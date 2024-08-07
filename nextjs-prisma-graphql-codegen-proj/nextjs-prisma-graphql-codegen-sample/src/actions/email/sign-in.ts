'use server'

import { AuthError } from 'next-auth'
import type * as z from 'zod'

import { getTwoFactorConfirmationByUserId } from '@/app/db/tow-factor-confirmation'
import { getTwoFactorTokenByEmail } from '@/app/db/two-factor-token'
import { getUserByEmail } from '@/app/db/user'
import { signIn as NextAuthSignIn } from '@/auth'
import { db } from '@/libs/db'
import { sendTwoFactorTokenEmail, sendVerificationEmail } from '@/libs/mail'
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from '@/libs/tokens'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { signInSchema } from '@/schemas'
import { ActionsResult } from '@/types/ActionsResult'

export const signIn = async (
  values: z.infer<typeof signInSchema>,
): Promise<ActionsResultWithData<boolean>> => {
  const validatedFields = signInSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      isSuccess: false,
      error: {
        message: validatedFields.error.message,
      },
    }
  }

  const { email, password, code } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      isSuccess: false,
      error: { message: '入力されたメールアドレスは登録されていません。' },
    }
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email,
    )
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    )
    return {
      isSuccess: false,
      error: {
        message:
          'メールアドレスが確認されていません。メールアドレスを確認してください。',
      },
    }
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email)

      if (!twoFactorToken) {
        return {
          isSuccess: false,
          error: {
            message: '認証コードが間違っています。',
          },
        }
      }

      if (twoFactorToken.token !== code) {
        return {
          isSuccess: false,
          error: {
            message: '認証コードが間違っています。',
          },
        }
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date()

      if (hasExpired) {
        return {
          isSuccess: false,
          error: {
            message: '認証コードが期限切れです。',
          },
        }
      }

      await db.twoFactorToken.delete({
        where: { id: twoFactorToken.id },
      })

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id,
      )

      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        })
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      })
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email)
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token)

      return {
        isSuccess: true,
        message: '認証コードを送信しました。',
        data: {
          isTwoFactorEnabled: true,
        },
      }
    }
  }

  try {
    await NextAuthSignIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })

    return {
      isSuccess: true,
      message: 'ログインに成功しました。',
      data: {
        isTwoFactorEnabled: false,
      },
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            isSuccess: false,
            error: {
              message: 'メールアドレスまたはパスワードが間違っています。',
            },
          }
        default:
          return {
            isSuccess: false,
            error: {
              message: 'ログインに失敗しました。',
            },
          }
      }
    }

    throw error
  }
}

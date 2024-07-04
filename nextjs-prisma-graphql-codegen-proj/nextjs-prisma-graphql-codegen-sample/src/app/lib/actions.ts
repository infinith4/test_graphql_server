'use server'

import { genSaltSync, hashSync } from "bcrypt-ts";

import { redirect } from 'next/navigation'
import { AuthError } from 'next-auth'

import { getUserByEmail } from '@/app/db/user'
import { signUpSchema } from '@/app/lib/schemas'
import { signIn, signOut } from '@/auth'
import { prisma } from '@/globals/db'

export type SignUpState = {
  errors?: {
    email?: string[]
    password?: string[]
  }
  message?: string | null
}

export async function signUp(
  prevState: SignUpState,
  formData: FormData,
): Promise<SignUpState> {
  console.log("signUp")
  const validatedFields = signUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '入力項目が足りません。',
    }
  }

  const { email, password } = validatedFields.data

  try {

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);
    //const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await getUserByEmail(email)

    if (existingUser) {
      return {
        message: '既に登録されているユーザーです。',
      }
    }

    await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    })
  } catch (error) {
    throw error
  }

  redirect('/login')
}

export async function login(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }

    throw error
  }
}

export async function logout() {
  try {
    await signOut()
  } catch (error) {
    throw error
  }
}

'use server';

import { signUpSchema } from '@/schemas';
import { ActionsResult } from '@/types/ActionsResult';
import { z } from 'zod';
import { getUserByEmail } from '@/db/user';

import { handleError } from '@/lib/utils';
import { genSaltSync, hashSync } from "bcrypt-ts";

export const signUp = async (
  values: z.infer<typeof signUpSchema>
): Promise<ActionsResult> => {
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      isSuccess: false,
      error: {
        message: validatedFields.error.message,
      },
    };
  }

  const { email, password, nickname } = validatedFields.data;

  try {
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return {
        isSuccess: false,
        error: {
          message: 'このメールアドレスは既に登録されています。',
        },
      };
    }

    await db.user.create({
      data: {
        name: nickname,
        email,
        password: hashedPassword,
      },
    });

    return {
      isSuccess: true,
      message: 'サインアップに成功しました。',
    };
  } catch (error) {
    handleError(error);

    return {
      isSuccess: false,
      error: {
        message: 'サインアップに失敗しました。',
      },
    };
  }
};

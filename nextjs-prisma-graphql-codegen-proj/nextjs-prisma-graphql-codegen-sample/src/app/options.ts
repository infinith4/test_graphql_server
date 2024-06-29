import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import prisma from '@/libs/prisma'

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: 'jwt' },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      // メルアド認証処理
      async authorize(credentials) {
        console.log('--------credentials: ', { credentials })
        const users = [
          { id: '1', email: 'user1@example.com', password: 'password1' },
          { id: '2', email: 'user2@example.com', password: 'password2' },
          { id: '3', email: 'abc@abc', password: '123' },
        ]
        //await prisma.
        const user = users.find((user) => user.email === credentials?.email)
        console.log('--------user: ', { user })

        if (user && user?.password === credentials?.password) {
          return {
            id: user.id,
            name: user.email,
            email: user.email,
            role: 'admin',
          }
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({
      token,
      user,
      account,
      profile,
      isNewUser,
    }: {
      token: any
      user: any
      account: any
      profile: any
      isNewUser: any
    }) => {
      // 注意: トークンをログ出力してはダメです。
      console.log('file: src/app/options.ts in jwt', {
        user,
        token,
        account,
        profile,
      })

      if (user) {
        token.user = user
        const u = user as any
        token.role = u.role
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    session: ({ session, token }: { session: any; token: any }) => {
      console.log('file: src/app/options.ts in session', { session })
      console.log('file: src/app/options.ts in token', { token })
      token.accessToken
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      }
    },
  },
}

// // import NextAuth from 'next-auth'

// // import { authConfig } from '../auth.config'

// // export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)

// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [GitHub],
//   callbacks: {
//     authorized({ request, auth }) {
//       const { pathname } = request.nextUrl;
//       if (pathname === "/dashboard") {
//         return !!auth;
//       }
//       return true;
//     },
//   },
// });

// import NextAuth from 'next-auth'

// import { authConfig } from '@/auth.config'

// export const { signIn, signOut } = NextAuth(authConfig)

import { PrismaAdapter } from '@auth/prisma-adapter'
import type { UserRole } from '@prisma/client'
import { compareSync, genSaltSync, hashSync } from 'bcrypt-ts'
import NextAuth from 'next-auth'

import { getAccountByUserId } from '@/app/db/account'
import { getTwoFactorConfirmationByUserId } from '@/app/db/tow-factor-confirmation'
import { getUserById } from '@/app/db/user'
import authConfig from '@/auth.config'
import { db } from '@/libs/db'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  update,
} = NextAuth({
  pages: {
    signIn: '/sign-in',
  },
  events: {
    async linkAccount({ user }: any) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    },
  },
  callbacks: {
    async signIn({ user, account }: any) {
      if (account?.provider !== 'credentials') return true

      const existingUser = await getUserById(user.id)

      if (!existingUser?.emailVerified) return false

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        )

        if (!twoFactorConfirmation) return false

        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        })
      }
      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false

      return true
    },
    async session({ token, session }: any) {
      console.log('---------session')
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      if (session.user) {
        session.user.name = token.name
        session.user.email = token.email
        session.user.isOAuth = token.isOAuth as boolean
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole
      }
      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
      }
      return session
    },
    async jwt({ token }: any) {
      console.log('---------jwt')
      if (!token.sub) return token
      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token

      const existingAccount = await getAccountByUserId(existingUser.id)

      token.isOAuth = !!existingAccount
      token.name = existingUser.name
      token.email = existingUser.email
      token.role = existingUser.role
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled

      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
  // providers: [
  //   Credentials({
  //     async authorize(credentials) {
  //       const parsedCredentials = signInSchema.safeParse(credentials)

  //       if (parsedCredentials.success) {
  //         const { email, password } = parsedCredentials.data
  //         const user = await getUserByEmail(email)

  //         if (!user) return null

  //         const passwordMatch = await bcrypt.compare(password, user.password)

  //         if (passwordMatch) return user
  //       }

  //       return null
  //     },
  //   }),
  // ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (token) {
  //       session.user.id = token.id;
  //     }
  //     return session;
  //   }
  // }
})

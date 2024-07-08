// // // import { PrismaAdapter } from '@next-auth/prisma-adapter'
// // // import { PrismaClient } from '@prisma/client'
// // // import mysql from 'mysql2/promise'
// // // import type { NextAuthConfig } from 'next-auth'
// // // import Credentials from 'next-auth/providers/credentials'
// // // import { resolve } from 'path'

// // // console.log('process.env.DB_HOST')
// // // console.log(process.env.DB_HOST)

// // // // MySQLデータベースへの接続設定
// // // const db = mysql.createPool({
// // //   host: process.env.DB_HOST,
// // //   port: Number(process.env.DB_PORT),
// // //   user: process.env.DB_USER,
// // //   password: process.env.DB_PASSWORD,
// // //   database: process.env.DB_NAME,
// // //   connectionLimit: 1, // 接続を張り続けるコネクション数を指定
// // //   namedPlaceholders: true, // 設定必須
// // // })
// // // export const authConfig: NextAuthConfig = {
// // //   providers: [
// // //     Credentials({
// // //       async authorize(credentials) {
// // //         await new Promise((resolve) => setTimeout(resolve, 5000))

// // //         const [rows] = await db.execute(
// // //           'SELECT * FROM users WHERE email = :email',
// // //           {
// // //             email: credentials.email,
// // //           },
// // //         )

// // //         console.log('rows')
// // //         console.log(rows)
// // //         if (Array.isArray(rows) && rows.length === 1) {
// // //           const user = rows[0]
// // //           console.log('user')
// // //           console.log(user)

// // //           // パスワードの検証（例：bcryptを使用）
// // //           const isValid = credentials.password === user.password // 仮の検証方法。適切にハッシュ化されたパスワードを使用すること。

// // //           if (isValid) {
// // //             return { id: user.id, name: user.username, email: user.email }
// // //           }
// // //         }
// // //         return null
// // //         const email = 'user@nextemail.com'
// // //         // return credentials.email === email && credentials.password === '123456'
// // //         //   ? { id: 'userId', email }
// // //         //   : null
// // //       },
// // //     }),
// // //   ],
// // //   pages: {
// // //     signIn: '/login',
// // //   },
// // //   callbacks: {
// // //     authorized({ auth, request: { nextUrl } }) {
// // //       const isLoggedIn = !!auth?.user
// // //       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
// // //       if (isOnDashboard) {
// // //         if (isLoggedIn) return true
// // //         return false
// // //       } else if (isLoggedIn) {
// // //         return Response.redirect(new URL('/dashboard', nextUrl))
// // //       }
// // //       return true
// // //     },
// // //   },
// // // }

// // import type { NextAuthConfig } from 'next-auth'
// // import Credentials from 'next-auth/providers/credentials'

// // export const authConfig: NextAuthConfig = {
// //   providers: [
// //     Credentials({
// //       async authorize(credentials) {
// //         await new Promise((resolve) => setTimeout(resolve, 5000))
// //         const email = 'user@nextemail.com'
// //         return credentials.email === email && credentials.password === '123456'
// //           ? { id: 'userId', email }
// //           : null
// //       },
// //     }),
// //   ],
// //   callbacks: {
// //     authorized({ auth, request: { nextUrl } }) {
// //       const isLoggedIn = !!auth?.user
// //       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
// //       if (isOnDashboard) {
// //         if (isLoggedIn) return true
// //         return false
// //       } else if (isLoggedIn) {
// //         return Response.redirect(new URL('/dashboard', nextUrl))
// //       }
// //       return true
// //     },
// //   },
// //   pages: {
// //     signIn: '/login',
// //   },
// // }

// // //prisma でDB接続 https://authjs.dev/getting-started/adapters/prisma
// // import { PrismaAdapter } from '@auth/prisma-adapter'
// // import type { NextAuthConfig } from 'next-auth'
// // import Credentials from 'next-auth/providers/credentials'
// // import { resolve } from 'path'

// // import prisma from '@/libs/prisma'

// // export const authConfig: NextAuthConfig = {
// //   adapter: PrismaAdapter(prisma), //prisma でDB接続
// //   providers: [
// //     Credentials({
// //       async authorize(credentials) {
// //         await new Promise((resolve) => setTimeout(resolve, 5000))

// //         const email = 'user@nextemail.com'
// //         return credentials.email === email && credentials.password === '123456'
// //           ? { id: 'userId', email }
// //           : null
// //       },
// //     }),
// //   ],
// //   pages: {
// //     signIn: '/login',
// //   },
// //   callbacks: {
// //     authorized({ auth, request: { nextUrl } }) {
// //       const isLoggedIn = !!auth?.user
// //       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
// //       if (isOnDashboard) {
// //         if (isLoggedIn) return true
// //         return false
// //       } else if (isLoggedIn) {
// //         return Response.redirect(new URL('/dashboard', nextUrl))
// //       }
// //       return true
// //     },
// //   },
// // }
// import { compareSync, genSaltSync, hashSync } from 'bcrypt-ts'
// import Credentials from 'next-auth/providers/credentials'
// import Github from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'

// import { getUserByEmail } from '@/app/db/user'
// import { signInSchema } from '@/app/lib/schemas'
// import { authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from '@/routes'

// console.log('process.env.GITHUB_CLIENT_ID---------------')
// console.log(process.env.GITHUB_CLIENT_ID)
// console.log('process.env.GITHUB_CLIENT_ID---------------')
// console.log(process.env.GITHUB_CLIENT_ID)
// export const authConfig = {
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: '/login',
//   },
//   cookies: {
//     pkceCodeVerifier: {
//       name: 'next-auth.pkce.code_verifier',
//       options: {
//         httpOnly: true,
//         sameSite: 'none',
//         path: '/',
//         secure: true,
//       },
//     },
//   },
//   callbacks: {
//     authorized({ request, auth }: any) {
//       console.log('callback----------------')
//       console.debug('auth')
//       console.debug(auth)
//       const isLoggedIn = !!auth?.user
//       const isAuthRoute = authRoutes.includes(request.nextUrl.pathname)
//       const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname)

//       console.debug('auth?.user')
//       console.debug(auth?.user)
//       console.debug('request')
//       console.debug(request)
//       if (isAuthRoute) {
//         if (isLoggedIn) {
//           return Response.redirect(
//             new URL(DEFAULT_LOGIN_REDIRECT, request.nextUrl),
//           )
//         }

//         return true
//       }

//       if (!isPublicRoute && !isLoggedIn) {
//         return false
//       }

//       return true
//     },
//   },
//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     Github({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     }),
//     Credentials({
//       async authorize(credentials) {
//         const parsedCredentials = signInSchema.safeParse(credentials)

//         if (parsedCredentials.success) {
//           const { email, password } = parsedCredentials.data
//           const user = await getUserByEmail(email)

//           if (!user || !user.password) return null

//           // const salt = genSaltSync(10);
//           // const hash = hashSync("B4c0//", salt);
//           const passwordMatch = compareSync(password, user.password) // await bcrypt.compare(password, user.password)

//           if (passwordMatch) return user
//         }

//         return null
//       },
//     }),
//   ],
//   // secret: process.env.AUTH_SECRET,
// } satisfies NextAuthConfig
import { compareSync, genSaltSync, hashSync } from 'bcrypt-ts'
import type NextAuthConfig from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import { getUserByEmail } from '@/app/db/user'

import { signInSchema } from './schemas'

console.log('process.env.GITHUB_CLIENT_ID---------------')
console.log(process.env.GITHUB_CLIENT_ID)
console.log('process.env.GITHUB_CLIENT_SECRET---------------')
console.log(process.env.GITHUB_CLIENT_SECRET)

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = signInSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          const user = await getUserByEmail(email)
          if (!user || !user.password) return null

          const passwordsMatch = compareSync(password, user.password)

          if (passwordsMatch) return user
        }

        return null
      },
    }),
  ],
} satisfies typeof NextAuthConfig

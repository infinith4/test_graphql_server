import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import mysql from 'mysql2/promise'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { resolve } from 'path'

console.log('process.env.DB_HOST')
console.log(process.env.DB_HOST)

// MySQLデータベースへの接続設定
const db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 1, // 接続を張り続けるコネクション数を指定
  namedPlaceholders: true, // 設定必須
})
export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        await new Promise((resolve) => setTimeout(resolve, 5000))

        const [rows] = await db.execute(
          'SELECT * FROM users WHERE email = :email',
          {
            email: credentials.email,
          },
        )

        console.log('rows')
        console.log(rows)
        if (Array.isArray(rows) && rows.length === 1) {
          const user = rows[0]

          // パスワードの検証（例：bcryptを使用）
          const isValid = credentials.password === user.password // 仮の検証方法。適切にハッシュ化されたパスワードを使用すること。

          if (isValid) {
            return { id: user.id, name: user.username, email: user.email }
          }
        }
        return null
        const email = 'user@nextemail.com'
        // return credentials.email === email && credentials.password === '123456'
        //   ? { id: 'userId', email }
        //   : null
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      return true
    },
  },
}

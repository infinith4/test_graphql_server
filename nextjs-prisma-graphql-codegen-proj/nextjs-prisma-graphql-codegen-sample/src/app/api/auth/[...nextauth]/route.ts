import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import mysql from 'mysql2/promise'
import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// MySQLデータベースへの接続設定
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// 認証オプションの設定
const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials

        const [rows] = await db.execute(
          'SELECT * FROM users WHERE username = ?',
          [username],
        )

        if (rows.length > 0) {
          const user = rows[0]

          // パスワードの検証（例：bcryptを使用）
          const isValid = password === user.password // 仮の検証方法。適切にハッシュ化されたパスワードを使用すること。

          if (isValid) {
            return { id: user.id, name: user.username, email: user.email }
          }
        }
        return null
      },
    }),
  ],
  session: {
    jwt: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(new PrismaClient()),
}

export default (req, res) => NextAuth(req, res, options)

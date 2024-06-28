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

import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { getUserByEmail } from '@/app/db/user'
import { signInSchema } from '@/app/lib/schemas'
import { authConfig } from '@/auth.config'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = signInSchema.safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUserByEmail(email)

          if (!user) return null

          const passwordMatch = await bcrypt.compare(password, user.password)

          if (passwordMatch) return user
        }

        return null
      },
    }),
  ],
})

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

import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/libs/db';

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
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

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
import { UserRole } from '@prisma/client';
import { getUserById } from '@/app/db/user';

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ token, session }) {
      console.log("---------session")
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token }) {
      console.log("---------jwt")
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;
      return token;
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

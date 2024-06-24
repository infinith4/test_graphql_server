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

import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'

export const { signIn, signOut } = NextAuth(authConfig)

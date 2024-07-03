// import NextAuth from 'next-auth'

// import { authConfig } from '../auth.config'

// export default NextAuth(authConfig).auth

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }

// import { withAuth } from 'next-auth/middleware'

// export { default } from 'next-auth/middleware' // defaultをママ使う。

// export const config = {
//   matcher: ['/((?!register|api|login|favion.ico|dir1|dir2).*)'], // ?!で否定です。
// }

// export default withAuth(
//   function middleware(req) {
//     // callbacks.authorizedがtrueの場合のみ進入できる
//     console.log('in middleware: ', req.nextauth.token)
//   },
//   {
//     callbacks: {
//       // 認可に関する処理。ロールが `admin` ならOK
//       authorized: ({ token }) => {
//         console.log('in authorized: ', token)
//         return token?.role === 'admin'
//         // if(token) return true // デフォ
//       },
//     },
//   },
// )

// import NextAuth from 'next-auth'

// import { authConfig } from './auth.config'

// export default NextAuth(authConfig).auth

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
// }



import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import {
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from '@/routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('/sign-up', nextUrl));
  }

  return null;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
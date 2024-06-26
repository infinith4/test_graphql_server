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

import NextAuth from 'next-auth'

import { authConfig } from './auth.config'

export default NextAuth(authConfig).auth

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
}

// // import type { Metadata } from 'next'
// // import { Inter } from 'next/font/google'
// // import './globals.css'

// // const inter = Inter({ subsets: ['latin'] })

// // export const metadata: Metadata = {
// //   title: 'Create Next App',
// //   description: 'Generated by create next app',
// // }

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en">
// //       <body className={inter.className}>{children}</body>
// //     </html>
// //   )
// // }

// // app/dir1/layout.tsx
// //https://zenn.dev/andraindrops/articles/a9d2ae3285ceb6
// 'use client'

// import { useState } from 'react'

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const [count, setCount] = useState(0)
//   return (
//     <html>
//       <head></head>
//       <body>
//         <div>layout header</div>
//         <div>{count}</div>
//         <button
//           onClick={() => {
//             setCount(count + 1)
//           }}
//         >
//           +
//         </button>
//         <div>{children}</div>
//       </body>
//     </html>
//   )
// }

'use client'
import './globals.css'

import { Inter } from 'next/font/google'
import { useState } from 'react'

import NextAuthProvider from '@/providers/NextAuth'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>layout header</div>
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          +
        </button>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}

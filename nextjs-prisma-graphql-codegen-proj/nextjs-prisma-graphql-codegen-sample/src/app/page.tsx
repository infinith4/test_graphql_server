import type { NextPage } from 'next'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import type { ReactElement } from 'react'

const Home: NextPage = (): ReactElement => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-10 font-bold text-red-500">Hello Tailwind CSS!</div>
    </main>
  )
}

// const Home: NextPage = (): ReactElement => {
//   const { data: session, status } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user?.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }

// export default Home
export default Home

// import { auth, signOut } from '@/auth'

import { useSession } from 'next-auth/react'

import GQLArticleList from '@/app/components/GQLArticleList'
import { auth, signOut } from '@/auth'

export default async function Dashboard() {
  const session = await auth()
  // import GQLArticleList from '../components/GQLArticleList'
  // import Login from '../components/Login';
  // import Logout from '../components/Logout';

  // export default function Home() {
  //const { data: session, status } = useSession()

  console.table(session)
  return (
    <div>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button>ログアウト</button>
      </form>
      dashboard <br />
      GQLArticleList
      <GQLArticleList />
    </div>
  )
}

// 'use client';
// import { ArticleList } from '../components/ArticleList'
// import { useSession } from 'next-auth/react';
// import Login from '../components/Login';
// import Logout from '../components/Logout';

// export default function Home() {
//   const { data: session, status } = useSession();
//   return (
//   <div>
//     {status === 'authenticated' ? (
//     <div>
//     <p>セッションの期限：{session.expires}</p>
//     <p>ようこそ、{session.user?.name}さん</p>
//     <img
//       src={session.user?.image ?? ``}
//       alt=""
//       style={{ borderRadius: '50px' }}
//     />
//     <div>
//       <ArticleList />
//       <Logout />
//     </div>
//   </div>
//   ) : (
//   <Login />
//   )}
//   </div>
//   );
// }

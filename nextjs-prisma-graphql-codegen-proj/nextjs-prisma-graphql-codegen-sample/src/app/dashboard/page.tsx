// import { auth, signOut } from '@/auth'

// import { ArticleList } from '../components/ArticleList'

import { signOut } from '@/auth'

export default function Dashboard() {
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
      dashboard
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

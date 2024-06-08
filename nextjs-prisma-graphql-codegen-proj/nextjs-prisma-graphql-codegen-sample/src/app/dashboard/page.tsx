import { signOut } from '@/auth'

import { ArticleList } from '../components/ArticleList'

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
      hello dashboard
      <ArticleList />
    </div>
  )
}

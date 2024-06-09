// app/dir2/page.tsx

import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Hello, dir 2</h1>
      <Link href="/dir1">dir 1</Link>
    </>
  )
}

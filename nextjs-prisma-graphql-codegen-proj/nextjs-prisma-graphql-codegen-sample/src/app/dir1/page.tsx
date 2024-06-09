// app/dir1/page.tsx

import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Hello, dir 1</h1>
      <Link href="/dir2">dir 2</Link>
    </>
  )
}

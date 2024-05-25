import type { NextPage } from 'next'
import Image from 'next/image'
import type { ReactElement } from 'react';

const Home: NextPage = (): ReactElement => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-10 font-bold text-red-500">Hello Tailwind CSS!</div>
    </main>
  )
}

export default Home;



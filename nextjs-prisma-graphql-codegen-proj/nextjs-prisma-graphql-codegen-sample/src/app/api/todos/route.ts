// pages/api/todos/index.ts

// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

// type Todo = {
//   title: string
// }

// const handler = async (req: NextApiRequest, res: NextApiResponse<Todo[]>) => {
//   await new Promise((resolve) => setTimeout(resolve, 3000)) // for slow test

//   res
//     .status(200)
//     .json([{ title: 'task 1' }, { title: 'task 2' }, { title: 'task 3' }])
// }

// export default handler

export async function GET(request: Request) {
  return NextResponse.json([
    { title: 'task 1' },
    { title: 'task 2' },
    { title: 'task 3' },
  ])
}

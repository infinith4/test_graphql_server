import type { IncomingMessage } from 'http'
import { getSession } from 'next-auth/react'

import prisma from '@/libs/prisma'

export type Context = {
  prisma: typeof prisma
  currentUser: users | null
}

export const createContext = async ({
  req,
}: {
  req: IncomingMessage
}): Promise<Context> => {
  console.log("createContext---------------")
  const session = await getSession({ req })
  console.log("session---------------")
  console.log(session)
  console.log("req---------------")
  console.log(req)
  const email = session?.user?.email
  const currentUser = email
    ? await prisma.user.findUnique({ where: { email } })
    : null
  return { prisma, currentUser }
}

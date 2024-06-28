import type { users } from '@prisma/client'
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
  const session = await getSession({ req })
  const email = session?.user?.email
  const currentUser = email
    ? await prisma.users.findUnique({ where: { email } })
    : null
  return { prisma, currentUser }
}

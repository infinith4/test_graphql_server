import type { Resolvers } from '@/generated/resolvers-types'

export const resolvers: Resolvers = {
  Query: {
    articles: async (_, __, { prisma, currentUser }) => {
      if (!currentUser) {
        throw new Error('User not logged in.')
      }
      const articles = await prisma.article.findMany({
        orderBy: { createdAt: 'desc' },
        include: { user: true },
        where: { userId: currentUser.id },
      })

      return articles
    },
  },
  Mutation: {
    addArticle: async (_, { title }, { prisma, currentUser }) => {
      if (!currentUser) {
        throw new Error('User not Logged in.')
      }
      const article = await prisma.article.create({
        data: { userId: currentUser.id, title },
        include: { user: true },
      })

      return article
    },
    updateArticle: async (
      _,
      { articleId, title, content },
      { prisma, currentUser },
    ) => {
      if (!currentUser) {
        throw new Error('User not Logged in.')
      }
      const targetArticle = await prisma.article.findUnique({
        where: { id: articleId },
      })

      if (targetArticle?.userId !== currentUser.id) {
        throw new Error('Invalid user.')
      }

      const article = await prisma.article.update({
        where: { id: articleId },
        data: {
          ...(title && { title }),
        },
        include: { user: true },
      })

      return article
    },
    deleterticle: async (
      _,
      { articleId, title, content },
      { prisma, currentUser },
    ) => {
      if (!currentUser) {
        throw new Error('User not Logged in.')
      }
      const targetArticle = await prisma.article.findUnique({
        where: { id: articleId },
      })

      if (targetArticle?.userId !== currentUser.id) {
        throw new Error('Invalid user.')
      }

      const article = await prisma.article.update({
        where: { id: articleId },
        data: {
          ...(title && { title }),
        },
        include: { user: true },
      })

      return article
    },
  },
}

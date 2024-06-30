// import type { Resolvers } from '@/generated/resolvers-types'
//import type { Resolvers } from '@/graphql/dist/graphql_codegen'
// import { prisma } from '@/libs/prisma'
// import { PrismaClient } from '@prisma/client'
// import { Context } from '@apollo/client'
// import { prisma } from '@/libs/prisma'
import { PrismaClient } from '@prisma/client'

import type { Resolvers } from '@/graphql/dist/resolvers-types'
// import type { Resolvers } from '@/generated/resolvers-types'
import prisma from '@/libs/prisma'

export const resolvers: Resolvers = {
  Query: {
    articles: async (parent, args, contextValue, info) => {
      //console.log(prisma)
      console.log('----------------------parent')
      console.log(parent)
      console.log('----------------------args')
      console.log(args)
      console.log('----------------------contextValue')
      console.log(contextValue)

      console.log('----------------------info')
      console.log(info)
      // if (!currentUser) {
      //   throw new Error('User not logged in.')
      // }
      const articles = await prisma.article.findMany({
        orderBy: { createdAt: 'desc' },
        include: { user: true },
      })
      console.log('----------------------articles')
      console.log(articles[0])

      return articles
    },
  },
  Mutation: {
    addArticle: async (_, { title, content }, { prisma, currentUser }) => {
      console.log('-------------currentUser')
      console.log(currentUser)
      if (!currentUser) {
        throw new Error('User not Logged in.')
      }
      const article = await prisma.article.create({
        data: { userId: currentUser.id, title, content: content },
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
    deleteArticle: async (_, { articleId }, { prisma, currentUser }) => {
      if (!currentUser) {
        throw new Error('User not Logged in.')
      }
      const targetArticle = await prisma.article.findUnique({
        where: { id: articleId },
      })

      if (targetArticle?.userId !== currentUser.id) {
        throw new Error('Invalid user.')
      }

      const article = await prisma.article.delete({
        where: { id: articleId },
        include: { user: true },
      })

      return article
    },
  },
}

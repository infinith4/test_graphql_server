// import type { Resolvers } from '@/generated/resolvers-types'
//import type { Resolvers } from '@/graphql/dist/graphql_codegen'
// import { prisma } from '@/libs/prisma'
// import { PrismaClient } from '@prisma/client'
// import { Context } from '@apollo/client'
// import { prisma } from '@/libs/prisma'
import { PrismaClient } from '@prisma/client'

import type { Resolvers } from '@/generated/dist/graphql_codegen'
import prisma from '@/libs/prisma'

export const resolvers: Resolvers = {
  Query: {
    articles: async (parent: any, args: any, contextValue: any, info: any) => {
      //console.log(prisma)
      console.log('----------------------parent')
      console.log(parent)
      console.log('----------------------args')
      console.log(args)
      console.log('----------------------contextValue')
      console.log(contextValue.currentUser)

      // console.log('----------------------info')
      // console.log(info)
      if (!contextValue.currentUser) {
        throw new Error('User not logged in.')
      }
      const articles = await prisma.article.findMany({
        orderBy: { createdAt: 'desc' },
        where: { userId: contextValue.currentUser.id },
        include: { user: true },
      })
      console.log('----------------------articles')
      console.log(articles[0])

      return articles
    },
  },
  Mutation: {
    addArticle: async (
      parent: any,
      args: any,
      contextValue: any,
      info: any,
    ) => {
      console.log('-------------contextValue')
      console.log(contextValue.currentUser)
      if (!contextValue.currentUser) {
        throw new Error('User not Logged in.')
      }
      const article = await prisma.article.create({
        data: {
          userId: contextValue.currentUser.id,
          title: args.title,
          content: args.content,
        },
        include: { user: true },
      })

      return article
    },
    updateArticle: async (
      parent: any,
      args: any,
      contextValue: any,
      info: any,
    ) => {
      if (!contextValue.currentUser) {
        throw new Error('User not Logged in.')
      }
      const targetArticle = await prisma.article.findUnique({
        where: { id: args.articleId },
      })

      if (targetArticle?.userId !== contextValue.currentUser.id) {
        throw new Error('Invalid user.')
      }

      const article = await prisma.article.update({
        where: { id: args.articleId },
        data: {
          title: args.title,
          content: args.content,
        },
        include: { user: true },
      })

      return article
    },
    deleteArticle: async (
      parent: any,
      args: any,
      contextValue: any,
      info: any,
    ) => {
      if (!contextValue.currentUser) {
        throw new Error('User not Logged in.')
      }
      const targetArticle = await prisma.article.findUnique({
        where: { id: args.articleId },
      })

      if (targetArticle?.userId !== contextValue.currentUser.id) {
        throw new Error('Invalid user.')
      }

      const article = await prisma.article.delete({
        where: { id: args.articleId },
        include: { user: true },
      })

      return article
    },
  },
}

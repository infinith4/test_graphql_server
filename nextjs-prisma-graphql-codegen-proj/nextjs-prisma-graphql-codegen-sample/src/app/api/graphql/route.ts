// //https://zenn.dev/metallic_kfc/articles/59f3875c950056
import type { BaseContext } from '@apollo/server'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchemaSync } from '@graphql-tools/load'
import { addResolversToSchema } from '@graphql-tools/schema'
import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
import { gql } from 'graphql-tag'
import NextAuth from 'next-auth'

import { resolvers } from '@/graphql/resolvers'
import prisma from '@/libs/prisma'
import path from 'path'
import authConfig from '@/auth.config'
const schemaPath = path.join(process.cwd(), 'src/generated/schema.graphql')
const typeDefs = readFileSync(schemaPath, { encoding: 'utf-8' })

// const schema = loadSchemaSync('src/generated/schema.graphql', {
//   loaders: [new GraphQLFileLoader()],
// })

// const schemaWithResolvers = addResolversToSchema({ schema, resolvers })
const server = new ApolloServer<BaseContext>({
  resolvers,
  typeDefs,
})

const { auth } = NextAuth(authConfig)
// const { url } = await startStandaloneServer(server, {
//   // Note: This example uses the `req` argument to access headers,
//   // but the arguments received by `context` vary by integration.
//   // This means they vary for Express, Fastify, Lambda, etc.

//   // For `startStandaloneServer`, the `req` and `res` objects are
//   // `http.IncomingMessage` and `http.ServerResponse` types.
//   context: async ({ req, res }) => {
//     // Get the user token from the headers.
//     const token = req.headers.authorization || '';

//     // Try to retrieve a user with the token
//     const user = await getUser(token);

//     // Add the user to the context
//     return { user };
//   },
// });

const handler = startServerAndCreateNextHandler(server, {
  // Note: This example uses the `req` argument to access headers,
  // but the arguments received by `context` vary by integration.
  // This means they vary for Express, Fastify, Lambda, etc.

  // For `startStandaloneServer`, the `req` and `res` objects are
  // `http.IncomingMessage` and `http.ServerResponse` types.
  context: async (req, res) => {
    try {
      // Get the user token from the headers.
      console.log('req.headers')
      console.log(req.headers)
      const token = req.headers.authorization || ''
      console.log('token---------------')
      console.log(token)

      const session = await auth()
      console.table(session)
      if (!session) {
        throw new Error('Session not found')
      }
      const email = session?.user?.email // NOTE: next-auth v5 use auth()
      // Try to retrieve a user with the token
      // const user = await getUser(token);
      const currentUser = email
        ? await prisma.user.findUnique({ where: { email } })
        : null
      // Add the user to the context
      return { email }
    } catch (ex) {
      console.log('ex---------------')
      console.log(ex)
      return null // Ensure a valid context is always returned
    }
  },
})

// const handler = startServerAndCreateNextHandler(server, {
//   context: async (req) => {
//     try {
//       // console.log('req---------------')
//       // console.log(req)
//       const session = await auth()
//       console.table(session)
//       if (!session) {
//         throw new Error('Session not found')
//       }
//       const email = session?.user?.email // NOTE: next-auth v5 use auth()
//       // console.log('email---------------')
//       // console.log(email)
//       const currentUser = email
//         ? await prisma.user.findUnique({ where: { email } })
//         : null
//       // console.log('currentUser---------------')
//       // console.log(currentUser)
//       return { prisma, currentUser }
//     } catch (ex) {
//       console.log('ex---------------')
//       console.log(ex)
//       return { prisma, currentUser: null } // Ensure a valid context is always returned
//     }
//     // let user: User | null = null
//     // const token = ctx.headers.authorization ?? ''
//     // if (token) {
//     //   // FirebaseやDBからUser情報を取得する(以下はDBから取得するイメージ)
//     //   user = await getUser()
//     // }
//     // return { user }
//   },
// })

export { handler as GET, handler as POST }

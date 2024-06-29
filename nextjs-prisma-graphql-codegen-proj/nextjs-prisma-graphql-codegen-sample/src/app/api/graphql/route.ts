// import { ApolloServer } from '@apollo/server'
// import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
// import { loadSchemaSync } from '@graphql-tools/load'
// import { addResolversToSchema } from '@graphql-tools/schema'
// import Cors from 'micro-cors'
// import { start } from 'repl'

// import { createContext } from '@/graphql/context'
// import { resolvers } from '@/graphql/resolvers'

// const cors = Cors()

// const schema = loadSchemaSync('src/generated/schema.graphql', {
//   loaders: [new GraphQLFileLoader()],
// })

// const schemaWithResolvers = addResolversToSchema({ schema, resolvers })

// const apolloServer = new ApolloServer({
//   schema: schemaWithResolvers,
// })

// const startServer = apolloServer.start()

// export default cors(async function handlers(req, res) {
//   if (req.method == 'OPTIONS') {
//     res.end()
//     return false
//   }

//   await startServer
//   // await apolloServer.({ path: '/api/graphql' })(req, res)
// })

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

// export default startServerAndCreateNextHandler(apolloServer)
// //https://zenn.dev/metallic_kfc/articles/59f3875c950056

import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
// const resolvers = {
//   Query: {
//     hello: () => 'world',
//   },
// }
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchemaSync } from '@graphql-tools/load'
import { addResolversToSchema } from '@graphql-tools/schema'
import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
import { gql } from 'graphql-tag'
import path from 'path'

import { createContext } from '@/graphql/context'
import { resolvers } from '@/graphql/resolvers'

// const prisma = new PrismaClient()
// const resolvers = {
//   Query: {
//     products: () => prisma.article.findMany(),
//   },
//   Mutation: {
//     createProduct: async (_: any, args: any) =>
//       prisma.article.create({ data: args.input }),
//   },
// }

const schemaPath = path.join(process.cwd(), 'src/generated/schema.graphql')
const typeDefs = readFileSync(schemaPath, { encoding: 'utf-8' })
// const server = new ApolloServer({
//   resolvers,
//   typeDefs,
// })

// export default startServerAndCreateNextHandler(server)

// const schema = loadSchemaSync('src/generated/schema.graphql', {
//   loaders: [new GraphQLFileLoader()],
// })

// const schemaWithResolvers = addResolversToSchema({ schema, resolvers })
console.log("create ApolloServer ----------------------")
console.log(createContext)
const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: createContext
})

const handler = startServerAndCreateNextHandler(server)

export { handler as GET, handler as POST }

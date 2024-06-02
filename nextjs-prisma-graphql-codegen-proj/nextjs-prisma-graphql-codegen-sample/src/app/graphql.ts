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
import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
import path from 'path'

const prisma = new PrismaClient()
const resolvers = {
  Query: {
    products: () => prisma.article.findMany(),
  },
  Mutation: {
    createProduct: async (_: any, args: any) =>
      prisma.article.create({ data: args.input }),
  },
}
const schemaPath = path.join(process.cwd(), 'src/graphql/schema.gql')
const typeDefs = readFileSync(schemaPath, { encoding: 'utf-8' })
const server = new ApolloServer({
  resolvers,
  typeDefs,
})

export default startServerAndCreateNextHandler(server)

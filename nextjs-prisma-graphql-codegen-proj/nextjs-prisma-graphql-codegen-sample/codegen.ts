import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/generated/schema.graphql',
  generates: {
    'src/graphql/dist/graphql_codegen.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        mappers: {
          prismaUser: '@prisma/client/index.d#User',
        },
      },
    },
  },
}

export default config
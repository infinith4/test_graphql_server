import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/generated/schema.graphql',
  documents: ['src/graphql/query/*.graphql'],
  generates: {
    'src/graphql/dist/graphql_codegen.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-graphql-request',
        'typescript-operations',
      ],
      config: {
        mappers: {
          prismaUser: '@prisma/client/index#users',
        },
      },
    },
  },
}

export default config

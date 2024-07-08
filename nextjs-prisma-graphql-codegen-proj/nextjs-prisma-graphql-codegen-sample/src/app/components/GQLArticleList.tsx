import { gql, useQuery } from '@apollo/client'

import type { ArticlesQuery } from '@/graphql/dist/graphql_codegen'
import { ArticlesDocument } from '@/graphql/dist/graphql_codegen'
import { getClient } from '@/libs/client'
import NextAuth from 'next-auth'
import authConfig from '@/auth.config'
export default async function GQLArticleList() {
  console.log('GQLArticleList----------------------------------------')
  // クエリ
  const { auth } = NextAuth(authConfig)
  const session = await auth()
  console.log(session)
  console.log('TODO: context is null----------------------------------------')
  const { data: queryData, loading } = await getClient().query<ArticlesQuery>({
    query: ArticlesDocument,
  })
  console.log('queryData----------------------------------------')
  console.log(queryData)
  // const articles = [...queryData.articles]

  return (
    <main>
      <div>list of articles</div>

    </main>
  )
}

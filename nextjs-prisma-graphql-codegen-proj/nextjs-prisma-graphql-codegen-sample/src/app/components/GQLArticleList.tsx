import { gql, useQuery } from '@apollo/client'

import type { ArticlesQuery } from '@/graphql/dist/graphql_codegen'
import { ArticlesDocument } from '@/graphql/dist/graphql_codegen'
import { getClient } from '@/libs/client'

export default async function GQLArticleList() {
  console.log('GQLArticleList----------------------------------------')
  // クエリ

  console.log('TODO: context is null----------------------------------------')
  const { data: queryData, loading } = await getClient().query<ArticlesQuery>({
    query: ArticlesDocument,
  })
  console.log('queryData----------------------------------------')
  console.log(queryData)
  const articles = [...queryData.articles]

  return (
    <main>
      <div>list of articles</div>
      {articles
        .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
        .map((article) => (
          <div key={article.id}>
            <h1>{article.content}</h1>
          </div>
        ))}
    </main>
  )
}

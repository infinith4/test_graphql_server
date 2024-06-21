import { gql, useQuery } from '@apollo/client'

import type { ArticlesQuery } from '@/graphql/dist/client'
import { ArticlesDocument } from '@/graphql/dist/client'
import { getClient } from '@/libs/client'

import Article from './Article'

export default async function GQLArticleList() {
  console.log('GQLArticleList----------------------------------------')
  // クエリ
  const { data: queryData, loading } = await getClient().query<ArticlesQuery>({
    query: ArticlesDocument,
  })
  console.log('queryData----------------------------------------')
  console.log(queryData)
  // const articles = [...queryData.articles];
  return ''
  // return (
  //   <main>
  //     <div>list of articles</div>
  //     {articles
  //       .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
  //       .map((article) => (
  //         <div key={article.id}>
  //           <h1>{article.content}</h1>
  //         </div>
  //       ))}
  //   </main>
  // );
}

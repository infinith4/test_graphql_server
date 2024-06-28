import {  gql, useQuery } from "@apollo/client";

import Article from "./Article";

import { ArticlesQuery, ArticlesDocument } from "@/graphql/dist/client";
import { getClient } from "@/libs/client";

export default async function GQLArticleList() {
  // クエリ
  const {data: queryData, loading} = await getClient().query<ArticlesQuery>({
    query: ArticlesDocument,
  });
  console.log("queryData----------------------------------------")
  console.log(queryData)
  const articles = [...queryData.articles];
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
  );
}
import {  gql, useQuery } from "@apollo/client";

import Article from "./Article";
import { ArticlesDocument } from "@/gql/graphql";

import { ArtilesQuery, ArtilesDocument } from "@/graphql/dist/client";
import { getClient } from "@/libs/client";

export default async function GQLArticleList() {
  // クエリ
  const { data: queryData } = await getClient().query<ArtilesQuery>({
    query: ArtilesDocument,
  });

  const articles = [...queryData.articles];
  return (
    <main>
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
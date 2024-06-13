import { useQuery } from "@apollo/client";

import Article from "./Article";
import { ArticlesDocument } from "@/gql/graphql";

function GQLArticleList() {
  // `data` is typed!
  const { data } = useQuery(ArticlesDocument);
  return (
    <div className="App">
      {data && (
        <ul>
          {data.articles?.map(
            (e, i) => e && <Article article={e} key={`article-${i}`} />
          )}
        </ul>
      )}
    </div>
  );
}

export default GQLArticleList;
import { useQuery } from "@apollo/client";
import { ArticleFragmentFragmentDoc, ArticlesDocument, ArticlesQueryVariables } from "@/gql/graphql";
import { FragmentType, useFragment } from "@/gql/fragment-masking";

const Article = (props: {
  /* `film` property has the correct type 🎉 */
  article: FragmentType<typeof ArticleFragmentFragmentDoc>;
}) => {
  const data = useFragment(ArticleFragmentFragmentDoc, props.article);

    return (
      <div>
        <p>-----------gqllist--</p>
        {data && (
        <ul>
        {data.id}
          {data.createdAt}
          {data.updatedAt}
          {data.content}
        </ul>
      )}
      </div>
    );
  };

  export default Article;
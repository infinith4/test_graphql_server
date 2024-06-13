/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment ArticleFragment on Article {\n  id\n  title\n  content\n  createdAt\n  updatedAt\n  user {\n    ...UserFragment\n  }\n}\n\nquery Articles {\n  articles {\n    ...ArticleFragment\n  }\n}\n\nmutation AddArticle($title: String!) {\n  addArticle(title: $title) {\n    ...ArticleFragment\n  }\n}\n\nmutation UpdateArticle($articleId: String!, $title: String, $content: String) {\n  updateArticle(articleId: $articleId, title: $title, content: $content) {\n    ...ArticleFragment\n  }\n}\n\nmutation DeleteArticle($articleId: String!) {\n  deleteArticle(articleId: $articleId) {\n    ...ArticleFragment\n  }\n}": types.ArticleFragmentFragmentDoc,
    "fragment UserFragment on User {\n  id\n  name\n  email\n}": types.UserFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ArticleFragment on Article {\n  id\n  title\n  content\n  createdAt\n  updatedAt\n  user {\n    ...UserFragment\n  }\n}\n\nquery Articles {\n  articles {\n    ...ArticleFragment\n  }\n}\n\nmutation AddArticle($title: String!) {\n  addArticle(title: $title) {\n    ...ArticleFragment\n  }\n}\n\nmutation UpdateArticle($articleId: String!, $title: String, $content: String) {\n  updateArticle(articleId: $articleId, title: $title, content: $content) {\n    ...ArticleFragment\n  }\n}\n\nmutation DeleteArticle($articleId: String!) {\n  deleteArticle(articleId: $articleId) {\n    ...ArticleFragment\n  }\n}"): (typeof documents)["fragment ArticleFragment on Article {\n  id\n  title\n  content\n  createdAt\n  updatedAt\n  user {\n    ...UserFragment\n  }\n}\n\nquery Articles {\n  articles {\n    ...ArticleFragment\n  }\n}\n\nmutation AddArticle($title: String!) {\n  addArticle(title: $title) {\n    ...ArticleFragment\n  }\n}\n\nmutation UpdateArticle($articleId: String!, $title: String, $content: String) {\n  updateArticle(articleId: $articleId, title: $title, content: $content) {\n    ...ArticleFragment\n  }\n}\n\nmutation DeleteArticle($articleId: String!) {\n  deleteArticle(articleId: $articleId) {\n    ...ArticleFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserFragment on User {\n  id\n  name\n  email\n}"): (typeof documents)["fragment UserFragment on User {\n  id\n  name\n  email\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
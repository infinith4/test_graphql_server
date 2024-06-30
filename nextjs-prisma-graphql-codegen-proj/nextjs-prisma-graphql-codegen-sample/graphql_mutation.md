
mutation Mutation($title: String!, $content: String!) {
  addArticle(title: $title, content: $content) {
    content
    createdAt
    id
    title
    updatedAt
    user {
      email
      id
      name
    }
  }
}


// app/todos/page.tsx

import { use } from 'react'

import GQLArticleList from '../components/GQLArticleList'

async function getData() {
  const res = await fetch('http://localhost:4210/api/todos')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json()
}

type Todo = {
  title: string
}

export default function Page() {
  const todos: Todo[] = use(getData())

  return (
    <>
      <h1>GQLArticleList</h1>
      <GQLArticleList />
      <h1>Todos</h1>
      {todos.map((todo) => {
        return (
          <>
            <div>{todo.title}</div>
          </>
        )
      })}
    </>
  )
}

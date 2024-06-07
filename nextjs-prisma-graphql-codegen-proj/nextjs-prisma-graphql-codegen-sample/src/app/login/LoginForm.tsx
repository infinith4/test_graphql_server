'use client'

import { useFormState, useFormStatus } from 'react-dom'

import { authenticate } from '@/app/login/actions'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const NEXT_PUBLIC_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

if(!NEXT_PUBLIC_GRAPHQL_ENDPOINT){
  throw new Error(message: 'NEXT_PUBLIC_GRAPHQL_ENDPOINT not found.')
}


export const client  = new ApolloClient({
  uri: NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
})

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, true)
  return (
    <ApolloProvider client={client}>
    <form action={formAction}>
      <label>
        メールアドレス:
        <input className="text-gray-900" type="email" name="email" />
      </label>
      <label>
        パスワード:
        <input className="text-gray-900" type="password" name="password" />
      </label>
      {!state && (
        <div className="text-red-500">
          メールアドレスかパスワードが違います。
        </div>
      )}
      <SubmitButton />
    </form>
    </ApolloProvider>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button aria-disabled={pending}>
      {pending ? 'ログイン中' : 'ログインする'}
    </button>
  )
}

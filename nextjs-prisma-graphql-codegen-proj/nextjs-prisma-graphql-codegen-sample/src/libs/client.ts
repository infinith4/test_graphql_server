import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import NextAuth from 'next-auth'
import { getSession } from 'next-auth/react'

import authConfig from '@/auth.config'

const authLink = setContext(async (_, { headers }: { headers: Headers }) => {
  console.log(`setContext-----------`)
  const { auth } = NextAuth(authConfig)
  const session = await auth()
  // const session = await getSession();
  console.log(`getSession-----------${session}`)
  console.table(session)
  // get the authentication token from local storage if it exists
  const token = session?.accessToken //window.localStorage.getItem('token');
  console.log(`token-----------${token}`)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:4210/api/graphql',
  fetchOptions: { cache: 'no-store' }, // 一旦、キャッシュしない設定で逃げる
})

export const getClient = () => {
  console.log(`getClient-----------`)
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

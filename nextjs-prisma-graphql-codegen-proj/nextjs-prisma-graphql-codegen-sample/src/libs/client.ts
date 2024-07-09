import { ApolloClient, HttpLink, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import authConfig from '@/auth.config'
import NextAuth from 'next-auth'

const authLink = setContext(async (_, { headers }: { headers: Headers }) => {
  const { auth } = NextAuth(authConfig)
  const session = await auth()
  // get the authentication token from local storage if it exists
  const token = session?.token//window.localStorage.getItem('token');
  console.log(`token-----------${token}`)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const httpLink = createHttpLink({
  uri: 'http://localhost:4210/api/graphql',
  fetchOptions: { cache: 'no-store' }, // 一旦、キャッシュしない設定で逃げる
});


export const getClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}

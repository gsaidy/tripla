import { InMemoryCache, ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API,
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
      },
    }),
    cache: new InMemoryCache(),
  });
};

const initializeApollo = () => {
  apolloClient = apolloClient ?? createApolloClient();
  return apolloClient;
};

const useApollo = () => initializeApollo();

export default useApollo;

import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://192.168.0.108:4000/graphql',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

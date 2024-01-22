import {ApolloClient, InMemoryCache} from '@apollo/client';
import {APOLLO_SERVER} from '@env';

export const httpLink = new ApolloClient({
  uri: APOLLO_SERVER,
  cache: new InMemoryCache(),
});

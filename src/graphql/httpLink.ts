import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = createHttpLink({
  uri: 'http://192.168.0.108:4000/graphql',
});

const authLink = setContext(async (_, {headers}): Promise<any> => {
  const token: any = await AsyncStorage.getItem('my-key');

  return {
    headers: {
      ...headers,
      authorization: token
        ? 'Bearer ' +
          'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUzZWFiMDBhNzc5MTk3Yzc0MWQ2NjJmY2EzODE1OGJkN2JlNGEyY2MiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2FtIiwicGljdHVyZSI6Imh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R3d21kbjVwNC9pbWFnZS91cGxvYWQvdjE2Mzg4ODMxMjUvbXklMjBwaG90by91c2VyX2ljb25feWl6YnFoLnBuZyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9kZWxhdC04YTM1OSIsImF1ZCI6ImRlbGF0LThhMzU5IiwiYXV0aF90aW1lIjoxNzA3NDAzMTg1LCJ1c2VyX2lkIjoia1ZlUDFLNHRNcllTZ1hiaXI0OEFGYzFSZTFIMyIsInN1YiI6ImtWZVAxSzR0TXJZU2dYYmlyNDhBRmMxUmUxSDMiLCJpYXQiOjE3MDc0MDMxODUsImV4cCI6MTcwNzQwNjc4NSwiZW1haWwiOiJzYW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNhbUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TqX5y3HAKEIPTLIoTNu19Vgo-kyKuFGvTd3Kr_gwwhUt2rHXh5IC6ON0YSIyw_eu1S13G9tJBqFmYx5Y9OIE9K8YEsNV1PQPjcV9rtbB1GJdlAt3yInS5QQfaKUFGOrGe2zSur9o4UzUWBDbKw5a2H8X9tvKuTXu3cKaQyHbVh2uj6T0CKpsHR4_cuaGuby42oHx3qe7wBYcITmOK3N18ZdfnVTqwLcCPnCm755I0kuejA6-on3gKuK8TEaDAR4fm5GHeEt6lnbJsF9mpkavJshAT0V2BxRRttyEwrB1r94QRwLJZsv9px9S0VPZIWLvzXqPhU3g-3opHj67-dj0kg'
        : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

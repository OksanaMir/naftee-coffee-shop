import { GraphQLClient } from 'graphql-request';

export function request({ query, variables }) {
  const endpoint = `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.datoCmsToken}`,
    },
  });
  return client.request(query, variables);
}

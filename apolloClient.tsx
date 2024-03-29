import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URI,
  //   headers: {
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  //   },
  cache: new InMemoryCache(),
});

export default client;

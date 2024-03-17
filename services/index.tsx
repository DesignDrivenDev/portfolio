import { request, gql } from "graphql-request";

const graphqlAPI: any = process.env.NEXT_PUBLIC_HYGRAPH_URI;

export const getPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const results: any = await request(graphqlAPI, query);
  return results.postsConnection.edges;
};

export const getPosts = async (offset: number, skip: number) => {
  const query = gql`
    query MyQuery($offset: Int, $skip: Int) {
      postsConnection(orderBy: createdAt_DESC, first: $offset, skip: $skip) {
        aggregate {
          count
        }
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
      }
    }
  `;

  const results: any = await request(graphqlAPI, query, { offset, skip });
  // return results.postsConnection.edges;
  return results.postsConnection;
};

export const getPostDetails = async (slug: any) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  const results: any = await request(graphqlAPI, query, { slug });
  return results.post;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails(){
        posts(
            orderBy: createdAt_ASC
            last:3
        ){
            title
            featuredImage {
              url
            }
            createdAt
            slug
        }
    }
    `;
  const results: any = await request(graphqlAPI, query);
  return results.posts;
};

// query GetPostDetails($slug: String!, $categories: [String!]) {

export const getSimilarPosts = async (categories: string[], slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 4
      ) {
        title
        slug
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  `;
  const results: any = await request(graphqlAPI, query, { categories, slug });
  return results.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const results: any = await request(graphqlAPI, query);
  return results.categories;
};

export const getCategoryPost = async (slug: string) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result: any = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

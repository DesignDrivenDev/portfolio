import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import React, { useState } from "react";
import { Categories, PostWidget } from "../../components/insights";
import { motion, useScroll } from "framer-motion";
import { useRouter, Router } from "next/router";
import BlogLoader from "../../components/insights/BlogLoader";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import { GetStaticPaths, GetStaticProps } from "next";

interface PostType {
  title: string;
  slug: string;
  excerpt: string;
  content: object;
  featuredImage: {
    url: string;
  };
  categories: any[];
}

const PostDetails = ({ post }: any) => {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  if (router.isFallback) {
    return <BlogLoader />;
  }

  function calculateReadingTime(content: any) {
    const wordsPerMinute = 160; // Assuming an average reading speed of 160 words per minute
    const text = content?.replace(/<[^>]*>/g, ""); // remove HTML tags from the content
    const wordCount = text.trim().split(/\s+/g).length; // remove white space and count words
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  }

  return (
    <div className="bg-main-map">
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-2 origin-[0%] bg-primary "
        style={{ scaleX: scrollYProgress }}
      />
      <div className="grid place-items-center w-11/12 mx-auto py-12 max-w-5xl ">
        <div>
          <h2 className="text-sm md:text-lg text-center">
            IT - Artificial Intelligence
          </h2>
          <h2 className="text-2xl md:text-5xl text-center font-bold py-8">
            {post.title}
          </h2>
          <p className="text-centertext-sm md:text-lg">
            {post.excerpt.slice(0, 227)}
          </p>
          <div className="flex justify-center items-center py-8 gap-8">
            {/* <Image
              src={"/"}
              alt="author profile image"
              width={10}
              height={10}
              className=""
            /> */}
            <div className="px-5 py-2.5 bg-purpleLight text-white rounded-full text-2xl">
              P
            </div>
            <div className="space-y-1">
              <h2>Padmalochan Barik</h2>
              <h2>O4 April 2023</h2>
            </div>
          </div>
          <h2 className="text-center text-lg pb-4">
            {/* {post.content.text} minute read */}
            {calculateReadingTime(post.content.text)} minutes read
            {/* {Math.ceil(
              post.content.text
                .replace(/<[^>]*>/g, "") // remove HTML tags from the content
                .trim()
                .split(/\s+/g).length / 160
            )} */}
          </h2>
        </div>
        <div className="max-w-7xl w-11/12 mx-auto overflow-hidden">
          <div className="">
            <Image
              src={post?.featuredImage?.url}
              alt={post?.title}
              width={1200}
              height={600}
            />
          </div>
          <div className="py-12">
            <p className="pb-8 border-b-2 leading-relaxed">{post.excerpt}</p>
          </div>
          <div className="prose prose-teal leading-8">
            <RichText content={post.content.raw.children} />
          </div>
          <div className="">
            <PostWidget
              slug={post?.slug}
              categories={post?.categories?.map(
                (category: any) => category?.slug
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getStaticProps = async ({ params }: string | any) => {
  const slug: string = params.slug;

  const { data } = await client.query({
    query: gql`
      query MyQuery {
        posts(where: { slug: "${slug}" }) {
          title
          slug
          excerpt
          featuredImage {
            url
          }
          content {
            text
            raw
          }
          categories {
            name
            slug
          }
        }
      }
    `,
  });

  if (!data.posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: data.posts[0] },
    // revalidate: 60 * 60,
  };
};

export const getStaticPaths = async () => {
  const { data, error } = await client.query({
    query: gql`
      query MyQuery {
        posts {
          title
          slug
          excerpt
          featuredImage {
            url
          }
          content {
            raw
          }
          categories {
            name
            slug
          }
        }
      }
    `,
  });
  return {
    paths: data.posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

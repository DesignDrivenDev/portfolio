import React, { useEffect, useState } from "react";
// import { getFeaturedPosts } from "../../services";
import Link from "next/link";
import Image from "next/image";
import BlogLoader from "./BlogLoader";
import client from "../../apolloClient";
import { gql } from "@apollo/client";

const FeaturedPost = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFeaturedPost = async () => {
      const { data, error } = await client.query({
        query: gql`
          query MyQuery {
            posts(where: { featuredPost: true }) {
              featuredImage {
                url
              }
              title
              slug
              createdAt
            }
          }
        `,
      });
      if (!error) {
        setFeaturedPosts(data.posts);
      }
    };
    getFeaturedPost();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 pb-10">
        {/* {featuredPosts && setFeaturedPosts.length > 0 && (
          <h2 className="py-3 text-2xl font-bold">Featured Post</h2>
        )} */}

        {featuredPosts?.map((post: any) => (
          <div key={post.slug}>
            <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
              <div className="md:col-span-8 col-span-1 cursor-pointer overflow-hidden">
                <Link href={`/insights/${post.slug}`}>
                  <Image
                    src={post.featuredImage.url}
                    layout="responsive"
                    width={"400"}
                    height={"200"}
                    alt={post.title}
                    className="overflow-hidden rounded-lg transition duration-500 hover:scale-110"
                  />
                </Link>
              </div>
              <div className="md:col-span-4 col-span-1 ">
                <Link href={`/insights/${post.slug}`}>
                  <h2 className="pb-4 text-xl md:text-2xl transition transform cursor-pointer leading-10 duration-500 hover:underline">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus deleniti reiciendis temporibus quia ad
                  perspiciatis.
                </p>
                <div className="flex gap-4 items-center pt-3">
                  <div className="px-4 py-2 bg-cyan-800 text-white rounded-full text-xl">
                    P
                  </div>
                  <div>
                    <p>Padmalochan Barik</p>
                    <p>04 April 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="md:col-span-4 col-span-12"></div> */}
      </div>
    </>
  );
};

export default FeaturedPost;

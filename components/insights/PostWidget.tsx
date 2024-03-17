import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { getRecentPosts, getSimilarPosts } from "../../services";

const PostWidget = ({ categories, slug }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result: any) => {
        console.log(result, "similar posts");
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className={`mx-auto mb-8 max-w-5xl rounded-lg p-4`}>
      {/* ${slug ? "" : "shadow-xl"} */}
      <div className={`${!slug && "border-b pb-4"} text-xl font-semibold`}>
        {slug ? (
          <div className="relative flex w-full items-center py-5">
            <div className="flex-grow border-t border-gray-400 opacity-60" />
            <h1 className="text-color-gradient px-3 text-center text-lg font-black tracking-wide md:leading-tight lg:text-2xl xl:leading-snug">
              Realated Post
            </h1>
            <div className="flex-grow border-t border-gray-400 opacity-60" />
          </div>
        ) : (
          "Latest"
        )}
      </div>
      <div
        className={`grid  ${
          slug ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""
        } `}
      >
        {relatedPosts.map((post: any) => (
          <div key={post.title}>
            {slug ? (
              <div className="my-1 w-full px-1 lg:px-4">
                <Link href={`/insights/${post.slug}`}>
                  <article className="mt-8 cursor-pointer overflow-hidden border-b-4 border-black pb-8">
                    <Image
                      src={post.featuredImage.url}
                      layout="responsive"
                      width={"400"}
                      height={"300"}
                      className="transition duration-500 hover:scale-110"
                      alt=""
                    />

                    <header className="flex items-center justify-between gap-4 p-2 leading-tight md:p-4">
                      <div className="">
                        <h2 className="py-2 text-sm font-extralight">
                          {post.categories.map((name: any) => name.name)}
                        </h2>
                        <h2 className="text-highlight text-lg text-black no-underline hover:underline">
                          {post.title}
                        </h2>
                      </div>
                      {/* <p className="text-grey-darker text-sm">{11/1/19}</p> */}
                    </header>
                  </article>
                </Link>
              </div>
            ) : (
              <div className=" py-3 hover:text-pink-600">
                <Link href={`/insights/${post.slug}`}>{post.title}</Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;

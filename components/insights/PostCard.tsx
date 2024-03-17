import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }: any) => {
  return (
    <>
      {/* <div className="mb-8 cursor-pointer rounded-lg p-0 pb-12 shadow-lg lg:p-8">
        <div className="relative mb-6 overflow-hidden">
          <Image
            src={post.featuredImage.url}
            width="1200"
            height={"600"}
            alt={post.title}
            className="absolute h-80 w-full rounded-t-lg object-cover shadow-lg lg:rounded-lg"
          />
        </div>
        <h1
          className="mb-2  text-center text-3xl font-semibold
               transition duration-700 hover:text-pink-600"
        >
          <Link href={`/insights/${post.slug}`}>{post.title}</Link>
        </h1>
        <h2 className="text-center ">
          Published date : {post.createdAt.slice(0, 10)}
        </h2>
        <h2 className="text-highlight text-center text-lg leading-relaxed">
          {post.excerpt}
        </h2>
        <div className="py-4 text-center">
          <Link href={`/insights/${post.slug}`}>
            <span className="inline-block transform  rounded-full bg-pink-600 px-6 py-2 text-lg text-white transition duration-500 hover:-translate-y-1">
              Continue Reading
            </span>
          </Link>
        </div>
      </div> */}
      <div className="">
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
            <div className="flex items-center justify-between gap-4 p-2 leading-tight md:p-4">
              <div className="">
                <h2 className="py-2 text-sm font-extralight">
                  {post.categories.map((name: any) => name.name)}
                </h2>
                <h2 className="text-highlight text-lg text-black no-underline hover:text-white hover:underline">
                  {post.title}
                </h2>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </>
  );
};

export default PostCard;

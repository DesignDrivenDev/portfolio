import { gql } from "@apollo/client";
import { useRouter, Router } from "next/router";
import React, { useEffect, useState } from "react";
import client from "../../apolloClient";
import { PostCard, PostWidget, Categories } from "../../components/insights";
import FeaturedPost from "../../components/insights/FeaturedPost";
import { motion } from "framer-motion";
import Image from "next/image";
import BlogHeader from "../../components/insights/BlogHeader";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPost } from "@/services";

const variants = {
  fadeIn: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const Index = ({ posts }: any) => {
  const router = useRouter();
  const query = router.query.category;

  const [totalpage, settotalpage] = useState(0);
  const [skip, setskip] = useState(0);
  const [blog, setblog] = useState<any>([]);
  const [pageinfo, setpageinfo] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [pagecounter, setpagecounter] = useState(1);
  const [blogPost, setBlogPost] = useState([]);
  const [offset, setOffset] = useState(6);

  const [category, setCategory] = useState<any[]>([]);

  const [search, setSearch] = useState("");
  console.log(search, "search Value");

  console.log(totalpage, "total Page");
  console.log(skip, "skip Page");
  console.log(pageinfo, "Page info");
  console.log(pagecounter, "Page counter");
  console.log(blog, "blog");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const getSearch = async () => {
      const { data, error } = await client.query({
        query: gql`
          query MyQuery {
            postsConnection(where: { _search: "${search}" }) {
              aggregate {
                count
              }
              edges {
                node {
                  title
                  createdAt
                  slug
                  excerpt
                  featuredImage {
                    url
                  }
                  content{
                    text
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
        `,
      });
      if (!error) {
        settotalpage(data.postsConnection?.aggregate.count);
        setpageinfo(data.postsConnection?.pageInfo);
        if (search && search.length > 1) {
          setblog(data.postsConnection?.edges);
        }
      } else {
        alert(error);
      }
    };
    getSearch();
  }, [search]);

  // Getting all posts from Hygraph
  const getPosts = async () => {
    const { data, error } = await client.query({
      query: gql`
          query MyQuery {
            postsConnection(orderBy: createdAt_DESC, first: ${offset}, skip: ${skip}) {
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
                  content{
                    text
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
        `,
    });
    if (!error) {
      settotalpage(data.postsConnection?.aggregate.count);
      setpageinfo(data.postsConnection?.pageInfo);
      setBlogPost(data.postsConnection?.edges);
    } else {
      alert(error);
    }
  };

  // Calling category wise post
  const catPost = async () => {
    const { data, error } = await client.query({
      query: gql`
          query MyQuery {
            postsConnection(
              where: { categories_some: { slug_in: "${query}" } }
              first: ${offset},
              skip: ${skip}
            ) {
              aggregate {
                count
              }
              edges {
                node {
                  createdAt
                  slug
                  title
                  excerpt
                  content{
                    text
                  }
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
        `,
    });
    if (!error) {
      settotalpage(data.postsConnection?.aggregate.count);
      setpageinfo(data.postsConnection?.pageInfo);
      setCategory(data.postsConnection?.edges);
    } else {
      alert(error);
    }
  };

  useEffect(() => {
    if (query && typeof query === "string") {
      catPost();
      setblog(category);
      return;
    } else {
      getPosts();
      setblog(blogPost);
    }
  }, [skip, offset, query, category, blogPost]);

  useEffect(() => {
    if (query && typeof query === "string") {
      setpagecounter(1);
      setskip(0);
    }
  }, [query]);

  const loadMore = () => {
    window.addEventListener("scroll", () => {
      let { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      console.log(scrollToTop, scrollHeight, clientHeight);
      if (scrollTop + clientHeight >= scrollHeight) {
        setOffset(offset + 6);
      }
    });
  };

  async function setskipnext() {
    if (pageinfo.hasNextPage) {
      setskip(skip + offset);
      setpagecounter(pagecounter + 1);
    } else {
      setskip(0);
    }
  }

  async function setskipprev() {
    if (pageinfo.hasPreviousPage) {
      setskip(skip - offset);
      setpagecounter(pagecounter - 1);
    } else {
      setskip(0);
    }
  }

  // scrolling to Top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-main-map relative bg-fixed">
      <BlogHeader />
      <div className="max-w-7xl mx-auto grid w-11/12 grid-cols-1 pb-8  lg:grid-cols-12 lg:gap-16">
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <div className="flex justify-center">
              <div className="relative mb-3 xl:w-96">
                <form>
                  <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                    id="search-input"
                    placeholder="Type here to search"
                  />
                </form>
              </div>
            </div>
            <Categories />
          </div>
        </div>
        <motion.div
          // @ts-ignore
          key={query}
          variants={variants}
          initial="fadeIn"
          animate="inactive"
          exit="fadeOut"
          className="col-span-1 duration-200 ease-in-out lg:col-span-8"
        >
          <div className="transition duration-1000">
            {!query && pagecounter == 1 && <FeaturedPost />}
            <InfiniteScroll
              dataLength={blog.length}
              next={loadMore}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {blog.length > 0 &&
                  blog.map((post: any) => (
                    <PostCard post={post.node} key={post.title} />
                  ))}
              </div>
            </InfiniteScroll>
            {blog.length > 0 && (
              <div className="grid-col-2 grid place-items-center pt-8">
                <div className="flex space-x-1">
                  <button
                    className={`${!pageinfo.hasPreviousPage && "hidden"} show`}
                    onClick={() => {
                      setskipprev();
                      scrollToTop();
                    }}
                  >
                    &larr;
                  </button>
                  <span className="block font-bold">
                    {pagecounter}/{Math.ceil(totalpage / offset)}
                  </span>
                  <button
                    className={`${!pageinfo.hasNextPage && "hidden"} show `}
                    onClick={() => {
                      setskipnext();
                      scrollToTop();
                    }}
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

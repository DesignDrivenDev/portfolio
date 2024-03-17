import Link from "next/link";
import React, { useState, useEffect } from "react";

import { getRecentPosts, getSimilarPosts } from "../../services";

const RelatedPost = ({ categories, slug }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result: any) =>
        setRelatedPosts(result)
      );
      console.log("...  ");
    }
  }, [slug]);
  return (
    <div className="mb-8 rounded-lg p-8 shadow-xl">
      <h3 className="mb-4 border-b pb-4 text-xl font-semibold">Related Post</h3>
      <div className="mx-auto grid max-w-5xl grid-cols-4">
        {relatedPosts.map((post: any) => (
          <div key={post.title} className="py-3 hover:text-pink-600">
            <Link href={`/insights/${post.slug}`}>
              <div>{post.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;

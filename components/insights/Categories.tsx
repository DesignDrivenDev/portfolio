import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { getCategories } from "../../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [activePost, setActivePost] = useState("Latest");
  const router = useRouter();
  const query = router.query.category;
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="my-8 p-4 ">
      <h3 className="border-b pb-4 text-xl font-semibold">Categories</h3>
      <div
        className={`block cursor-pointer py-3 ${
          query == undefined ? "font-bold text-red-500" : ""
        }`}
      >
        <Link href={`/insights`}>Latest</Link>
      </div>
      {categories.map((category: any) => (
        <Link
          href={{
            pathname: "/insights",
            query: {
              category: `${category.slug}`,
            },
          }}
          key={category.slug}
        >
          <span
            className={`block cursor-pointer py-3 ${
              category.slug == query ? "font-bold text-red-500" : ""
            }`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

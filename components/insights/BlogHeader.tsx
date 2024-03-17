import Image from "next/image";
import React from "react";
import I1 from "../../public/EmployeePricing.png";

const BlogHeader = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 max-w-7xl mx-auto w-11/12 md:gap-12">
        <div>
          <div className="md:text-left text-center">
            <h2 className="text-sm md:text-lg text-primary">
              Explore Insights
            </h2>
            <h2 className="text-xl md:text-3xl py-6 font-bold">
              Find Your Voice with Our Engaging Content.
            </h2>
            <h2 className="text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
              molestiae.
            </h2>
          </div>
        </div>
        {/* <div>
          <Image src={I1} alt="Hero Image for the blog page" />
        </div> */}
      </div>
    </div>
  );
};

export default BlogHeader;

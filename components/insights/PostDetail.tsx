import React from "react";
import Image from "next/image";
import I from "../../assets/Office.webp";

const PostDetail = ({ post }: any) => {
  return (
    <div>
      <div className="">
        <Image src={I} alt="post details" />
      </div>
    </div>
  );
};

export default PostDetail;

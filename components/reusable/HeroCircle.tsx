import React from "react";

const HeroCircle = () => {
  return (
    <div className="relative grid place-items-center">
      <div className="border h-[200px] w-[200px] rounded-full animate-ping absolute" />
      <div className="border h-[250px] w-[250px] rounded-full animate-ping absolute" />
      <div className="border h-[300px] w-[300px] rounded-full animate-ping absolute" />
      <div className="border h-[550px] w-[550px] rounded-full opacity-30 absolute" />
      <div className="border h-[450px] w-[450px] rounded-full opacity-30 absolute" />
    </div>
  );
};

export default HeroCircle;

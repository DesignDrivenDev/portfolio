import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import HeroCircle from "./reusable/HeroCircle";

import I1 from "../public/assets/man2.jpg";

const Hero = () => {
  return (
    <>
      {/* <div className="context"> */}
      <div className="min-h-screen absolute w-full top-[50vh] gird place-items-center">
        <HeroCircle />
        <h2 className="text-center text-white">Software Engineer</h2>
        <div className="grid place-items-center">
          <Image
            src={I1}
            alt={"hero"}
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="text-white text-5xl pt-8">
            <Typewriter
              options={{
                strings: [
                  "I am Padmalochan Barik",
                  "I do Front-end development.",
                  "< I love Next.js More Than Cofee />",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Hero;

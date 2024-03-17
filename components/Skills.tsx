import React from "react";
import ProgressBar from "./reusable/ProgressBar";

const Skills = () => {
  return (
    <div id="skills" className="text-white bg-gray-900 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto w-11/12">
        <div className="relative mt-">
          <h2 className="md:text-3xl text-lg md:pt-12 pt-4 text-center font-bold border-b-2 border-white w-fit mx-auto">
            {` I’ve Worked`}
          </h2>
          <div className="absolute top-0 left-0 right-0 bottom-0 text-center opacity-10 md:text-[6rem] text-[3rem]">
            SKILLS
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:pt-24 pt-12 gap-12">
          <div className="space-y-4 mx-auto">
            <h2 className="text-center md:text-left text-xl font-bold">
              Skiils & Experience
            </h2>
            <p>
              Since beginning my journey as a front-end developer nearly 16
              months ago, I&#8217;ve done more than 10 projects for both
              business and consumer use.
            </p>
            <p>
              I create successful responsive websites that are fast, easy to
              use, and built with best practices. The main area of my expertise
              is front-end development, HTML, CSS, JS,React.js,Next.js, Tailwind
              CSS, building small and medium web apps, features, animations, and
              coding interactive layouts.
            </p>
            <p>
              I also have full-stack developer experience with popular
              open-source CMS like (Hygraph/graph CMS).
            </p>
          </div>
          <div className="space-y-4 ">
            <div className="border-b pb-4 border-white">
              <span className="font-extrabold pr-6">Front-end</span>
              <progress value="80" max="100" className="" />
            </div>
            <div className="border-b pb-4 border-white">
              <span className="font-extrabold pr-6">Back-end</span>
              <progress value="50" max="100" className="" />
            </div>
            <div className="border-b pb-4 border-white">
              <span className="font-extrabold pr-6">React.js</span>
              <progress value="60" max="100" className="" />
            </div>
            <div className="border-b pb-4 border-white">
              <span className="font-extrabold pr-6">Next.js</span>
              <progress value="60" max="100" className="" />
            </div>
            <div className="border-b pb-4 border-white">
              <span className="font-extrabold pr-6">Node.js</span>
              <progress value="50" max="100" className="" />
            </div>
            <div className="border-b pb-4 border-white">
              <span className="font-extrabold pr-6">GraphQL</span>
              <progress value="50" max="100" className="" />
            </div>
            <div className="border-b pb-4 border-white">
              <span className="font-extrabold pr-6">Tailwind CSS</span>
              <progress value="70" max="100" className="" />
            </div>
            <div className="border-b pb-4 border-white">
              <span className="font-extrabold pr-6">Boostrap</span>
              <progress value="80" max="100" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

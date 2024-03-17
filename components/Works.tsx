import React from "react";
import I1 from "../public/assets/work.jpg";
import I2 from "../public/assets/workmain.jpg";
import Image from "next/image";
import proj1 from "../public/assets/bir-proj.png";
import proj2 from "../public/assets/star-proj.png";
import proj3 from "../public/assets/ven-proj.png";
import Link from "next/link";

const works = [
  {
    title: "Biryani City Website",
    img: proj1,
    alt: "Biryani City Website",
    link: "https://biryanicityde.com/",
    desc: "The idea of Biryani City came into conception when Husband & Wife Bharath Sundararaman and Aparna Bharath decided to share their love for food with the residents of Norristown. ",
  },
  {
    title: "The Star Nest Suites",
    img: proj2,
    alt: "star nest Website",
    link: "https://thestarnest.com/",
    desc: " The Star Nest Suites provides long term stay to people for the wonderful journey.",
  },
  {
    title: "Ventois Website",
    img: proj3,
    alt: "Ventois Website",
    link: "https://ventois-new.vercel.app/",
    desc: "Ventois have a vast resource of the skilled and professional workforce who work tirelessly to provide you with on-time and quality solutions and service. ",
  },
];

const Works = () => {
  return (
    <div id="works" className="text-white bg-gray-900 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto w-11/12">
        <div className="relative mt-">
          <h2 className="md:text-3xl text-lg md:pt-12 pt-4 text-center font-bold border-b-2 border-white w-fit mx-auto">
            {`Some Things I’ve Built`}
          </h2>
          <div className="absolute top-0 left-0 right-0 bottom-0 text-center opacity-10 md:text-[6rem] text-[3rem]">
            My Works
          </div>
        </div>

        <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0">
          <div className="w-full pt-4 pb-6 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
            <div className="flex flex-col items-center sm:px-5 md:flex-row">
              <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5 text-white">
                  <h2 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                    Write anything. Be creative.
                  </h2>
                  {/* <div className="pt-2 pr-0 pb-0 pl-0">
                    <p className="text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">
                      Things i have buiilt so far
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="block">
                  <Image
                    src={I2}
                    alt="hero"
                    className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1 sm:px-5 gap-x-8 gap-y-16 text-white">
              {works.map((work) => (
                <div
                  className="flex flex-col items-start col-span-1 space-y-3 sm:col-span-6 xl:col-span-4"
                  key={work.title}
                >
                  <Image
                    src={work.img}
                    alt={work.alt}
                    className="object-cover w-full mb-2  rounded-lg shadow-sm max-h-56 btn-"
                  />
                  <Link
                    href={work.link}
                    target="_blank"
                    className="text-lg font-bold sm:text-xl md:text-2xl hover:text-blue-400 transition duration-500"
                  >
                    {work.title}
                  </Link>
                  <p className="text-sm">{work.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

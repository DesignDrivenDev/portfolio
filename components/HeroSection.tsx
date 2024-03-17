import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-4xl pt-8">
              <Typewriter
                options={{
                  strings: [
                    "I'm Padmalochan Barik",
                    "I build things for the web.",
                    "<I love Next.js More Than Cofee />",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none  active:text-opacity-75 sm:w-auto"
                href={"/#works"}
              >
                See Projects
              </Link>

              <Link
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none  active:bg-blue-500 sm:w-auto"
                href={"/#contact"}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <div
        id="hero"
        className="grid place-items-center min-h-screen text-white bg-cyan-900"
      >
        <div>
          <h2 className="md:text-5xl text-4xl text-center mb-10">Hey</h2>
          <div className="md:text-5xl text-2xl">
            <Typewriter
              options={{
                strings: [
                  "I'm Padmalochan Barik",
                  "I build things for the web.",
                  "<I love Next.js More Than Cofee />",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex justify-center mt-10 ">
            <button className="px-8 py-3 rounded-full border-2 bg-transparent hover:bg-white transition duration-500 hover:text-black">
              <Link href={"/#contact"}>Contact me</Link>
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HeroSection;

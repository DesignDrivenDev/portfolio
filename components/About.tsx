import React from "react";

const About = () => {
  const handleDownloadCV = () => {
    window.open("assets/resume-2023.pdf", "_blank");
  };
  return (
    <div id="about" className="min-h-screen text-white py-8 bg-gray-900 ">
      <div className="max-w-7xl mx-auto w-11/12">
        <div className="relative mt-">
          <h2 className="md:text-3xl text-lg md:pt-12 pt-4 text-center font-bold border-b-2 border-gray-700 w-fit mx-auto">
            Know Me More
          </h2>
          <div className="absolute top-0 left-0 right-0 bottom-0 text-center opacity-10 md:text-[6rem] text-[3rem]">
            ABOUT ME
          </div>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 md:pt-32 pt-12 md:gap-12 gap-0">
          <div className="md:col-span-8 col-span-12">
            <div>
              <h2 className="text-center md:text-left font-bold md:text-2xl text-xl pb-4">
                {`I'm`} <span className="text-blue-700">Padmalochan Barik</span>{" "}
                , a front-end developer(React.js/Next.js)
              </h2>
              <h2 className="space-y-4 leading-7 text-sm md:text-base ">
                <p>
                  {`As a Front End Developer, I am passionate about creating
                  beautiful, responsive and user-friendly websites that not only
                  look great, but also function seamlessly. With my expertise in
                  HTML, CSS, JavaScript React.js, and various front-end
                  frameworks, I have a proven track record of delivering
                  high-quality work that meets the needs of clients and users.`}
                </p>
                <p className="">
                  {`I pride myself on my ability to collaborate with designers and
                  back-end developers to bring their visions to life. I have
                  experience in optimizing website performance and ensuring
                  cross-browser compatibility, accessibility and SEO best
                  practices.`}
                </p>
                <p>
                  {`In addition to my technical skills, I possess strong
                  communication and problem-solving skills, which allow me to
                  work effectively both independently and in a team. I am always
                  eager to learn and keep up-to-date with the latest
                  technologies, techniques and trends in the industry to deliver
                  the best results to my clients.`}
                </p>
              </h2>
            </div>

            {/* <div className="pt-4">
              <h2 className="md:text-xl text-sm font-bold">
                {`Here are a few technologies I’ve been working with recently:`}
              </h2>
              <div className="grid grid-cols-2 w-10/12 gap-4 mx-auto pb-6 ">
                <ol type="1" className="pt-6 space-y-2 list-disc">
                  <li>JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                </ol>
                <ul className="pt-6 space-y-2 list-disc">
                  <li>TypeScript</li>
                  <li>Tailwind css</li>
                  <li>Bootstrap</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="md:col-span-4 col-span-12">
            <h2 className="border-b py-4 border-white text-sm md:text-base">
              <span className="font-extrabold">Name</span> :{" "}
              <span className="font-semibold">Padmalochan Barik</span>
            </h2>
            <h2 className="border-b py-4 border-white text-sm md:text-base">
              <a href="mailto:padmalochanbarik98@gmail.com">
                <span className="font-bold">Email</span> :{" "}
                <span className="font-bold hover:underline hover:text-blue-700">
                  padmalochanbarik98@gmail.com
                </span>
              </a>
            </h2>

            <h2 className="border-b py-4 border-white text-sm md:text-base">
              <span className="font-extrabold">Phone</span> :{" "}
              <a
                href="tel:+917008751514"
                className="font-semibold hover:underline hover:text-blue-700"
              >
                +91 7008751514
              </a>
            </h2>
            <h2 className="border-b py-4 border-white text-sm md:text-base">
              <span className="font-extrabold">From</span> :{" "}
              <span className="font-semibold">Basudevpur, Bhadrak, Odisha</span>
            </h2>
            <div className="pt-4 text-center md:text-left">
              <button
                onClick={handleDownloadCV}
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none  active:text-opacity-75 sm:w-auto"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

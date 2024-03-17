import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const offerings: any = {
  hola9: {
    project: "Hola9 Official Website",
    content: () => (
      <ul className="space-y-3 list-disc">
        <li>
          Worked with a team of four designers to build a marketing website and
          e-commerce platform for Hola9, an ambitious startup originating from
          Bangalore,India.
        </li>
        <li>
          Developed and maintained code for in-house and client websites
          primarily using HTML, CSS, Bootstrap, JavaScript, and React.
        </li>
        <li>
          Manually tested sites in various browsers and mobile devices to ensure
          cross-browser compatibility and responsiveness
        </li>
        <li>
          Interfaced with user experience designers and other developers to
          ensure thoughtful and coherent user experiences across web apps.
        </li>
      </ul>
    ),
  },
  inRadius: {
    project: "InRadius Technologies",
    content: () => (
      <ul className="space-y-3 list-disc">
        <li>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects
        </li>
        <li>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, TypeScript, Next.js,
          React.js, hygraph, and Netlify
        </li>
        <li>
          Communicate with multi-disciplinary teams of engineers, designers,
          producers, and clients on a daily basis
        </li>
        <li>
          Manually tested sites in various browsers and mobile devices to ensure
          cross-browser compatibility and responsiveness
        </li>
      </ul>
    ),
  },
};

const Experience = () => {
  const [active, setActive] = useState<any>("hola9");
  const [data, setData] = useState<any>(offerings.Restaurant);

  useEffect(() => {
    setData(offerings[active]);
  }, [active]);
  return (
    <div id="skills" className="text-white bg-gray-900 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto w-11/12">
        <div className="relative">
          <h2 className="md:text-3xl text-lg md:pt-14 pt-4 text-center font-bold border-b-2 border-white w-fit mx-auto">
            {` I’ve Worked`}
          </h2>
          <div className="absolute top-0 left-0 right-0 bottom-0 text-center opacity-10 md:text-[6rem] text-[3rem]">
            Experience
          </div>
        </div>
        <div className="max-w-7xl mx-auto md:py-32 py-12 ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 place-items-center">
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
            >
              <div
                className={`flex flex-row gap-2 px-5 py-3 hover:cursor-pointer rounded-md  text-primary my-3  ${
                  active === "hola9" ? " bg-primary text-white" : "bg-white"
                }`}
                onClick={() => setActive("hola9")}
              >
                <div>
                  <h2 className="text-md md:text-lg">
                    Hola9 Classified India Private Limited
                  </h2>
                  <p className="mt-2 md:text-sm text-xs">
                    (2022-MAY - 2022-NOV)
                  </p>
                </div>
              </div>
              <div
                className={`flex flex-row gap-2 px-5 py-3  hover:cursor-pointer rounded-md text-primary my-3 ${
                  active === "inRadius" ? " bg-primary text-white" : "bg-white"
                }`}
                onClick={() => setActive("inRadius")}
              >
                <div>
                  <h2 className="text-md md:text-lg">InRadius Technology</h2>
                  <p className="mt-2 md:text-sm text-xs">
                    (2022-NOV - Present)
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              key={active}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeInOut" }}
              variants={{
                hidden: { opacity: 0, x: 200, y: 0 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
            >
              <div className="w-11/12 mx-auto">
                <h2 className="font-bold text-2xl py-2">{data?.project}</h2>
                <div>{data?.content()}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

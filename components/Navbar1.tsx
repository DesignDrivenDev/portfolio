import Link from "next/link";
import { useRouter, Router } from "next/router";
import React, { useEffect, useState } from "react";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Works", href: "/#works" },
  // { name: "Resume", href: "/#resume" },
  // { name: "Portfolio", href: "/#portfolio" },
  // { name: "Insights", href: "/insights" },
  { name: "Contact ", href: "/#contact" },
];
const Navbar1 = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const doMagic = () => {
      setIsOpen(false);
    };

    Router.events.on("routeChangeStart", doMagic); // add listener

    return () => {
      Router.events.off("routeChangeStart", doMagic); // remove listener
    };
  }, []);

  return (
    <div
      className={`md:hidden block py-6 fixed top-0 w-full text-white z-50 bg-red-900/20 shadow-2xl backdrop-blur-2xl`}
    >
      <div className="flex justify-between gap-8 max-w-5xl mx-auto w-10/12">
        <div className="cursor-pointer">
          <Link href={"/#hero"} className="text-3xl font-bold">
            Portfolio
          </Link>
        </div>
        <div className="md:flex gap-4 cursor-pointer hidden">
          {navigation.map((nav) => (
            <Link href={nav.href} key={nav.name}>
              {nav.name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="block md:hidden z-10"
        >
          <svg viewBox="0 0 100 80" width="25" height="25" fill="#fff">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "h-screen" : "h-0 opacity-0"
          } z-50 fixed transition-all duration-500 bg-blue-400 text-white text-xl font-bold grid grid-cols-1 place-items-center w-full left-0 top-0`}
        >
          <div>
            {navigation.map((nav) => (
              <h2 className="text-center py-2" key={nav.name}>
                <Link
                  href={nav.href}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {nav.name}
                </Link>
              </h2>
            ))}
          </div>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="absolute top-6 right-6 text-white text-5xl"
            aria-label="Menu Mobile Button"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;

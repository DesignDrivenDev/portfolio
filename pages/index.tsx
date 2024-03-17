import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import SideMenu from "@/components/SideMenu";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="relative">
          <div className="relative inset-0 w-full min-h-screen md:fixed md:w-2/12 bg-[#111418] text-white  hidden md:block overflow-hidden">
            <SideMenu />
          </div>
          <div className="w-full ml-auto md:w-10/12 snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
            <div className="md:snap-center">
              <HeroSection />
            </div>
            <div className="md:snap-center">
              <About />
            </div>
            <div className="md:snap-center">
              <Skills />
            </div>
            <div className="md:snap-center">
              <Experience />
            </div>
            <div className="md:snap-start">
              <Works />
            </div>
            <div className="md:snap-center">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

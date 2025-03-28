import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { ProjectType } from "../lib/types";
import { CogitoProjects } from "../data/projects";
import { Carousel } from "@material-tailwind/react";
// Images
import Banner from "../public/Projects/MarketingAIShowcase.jpg";
import Project from "../components/Projects/Project";
import Navbar from "../components/Navbar/Navbar";

const ProjectCarousel = () => {
  return (
    <>
      <Carousel className="rounded-xl h-fit"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )} autoplay loop>
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-[30rem] w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-[30rem] w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-[30rem] w-full object-cover"
        />
      </Carousel>
    </>
  );
}

const Projects = () => {
  return (
    <div className="h-fit overscroll-contain animate-toblack">
      <Head>
        <title>Prosjekter - Cogito NTNU</title>
      </Head>
      <Navbar page="projects"/>
      <main className="h-fit w-full pt-44 justify-center items-center flex-col px-20">
        <ProjectCarousel />
        <div className="pt-16 pb-12">
          <p className="text-white font-semibold text-3xl tracking-wide">Prosjekt Galleri</p>
          <div className="flex pt-8 gap-x-12 gap-y-4 flex-wrap">
            <Project name="Marketing AI" github="www.github.com" img="/Projects/Cards/MarketingAI.png" playable url={"/projects/marketingai"}/>
            <Project name="NEATactics" github="www.github.com" img="/Projects/Cards/NEATactics.png" released={false}  url={"/projects/articles/neatactics"}/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

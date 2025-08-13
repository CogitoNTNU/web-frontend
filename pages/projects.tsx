import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import { ProjectType } from "../lib/types";
import { CogitoProjects } from "../data/projects";
import Project from "../components/Projects/Project";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";

interface ButtonProps {
  text: string;
  type: "play" | "read" | "github";
  link: string;
}

const Button = ({ text, type, link }: ButtonProps) => {
  function getColor() {
    if (type === "play") return "bg-blue-500";
    if (type === "read") return "bg-green-500";
    else return "bg-black-default";
  }
  return (
    <Link href={link} className="flex justify-center w-fit h-fit items-center">
      <p
        className={`text-white tracking-wide px-12 py-3 rounded-2xl  ${getColor()}`}
      >
        {text}
      </p>
    </Link>
  );
};

interface ProjectBannerProps {
  bannerImg: string;
  description: string;
  bgImg: string;
  link: string;
  github: string;
  playable: boolean;
}

const ProjectBanner = ({
  bannerImg,
  description,
  bgImg,
  link,
  playable,
  github,
}: ProjectBannerProps) => (
  <div className="relative h-[30rem] w-full flex justify-start px-12 py-8">
    <div className="z-50 h-full flex flex-col justify-center">
      <Image
        src={bannerImg}
        alt="banner"
        width={500}
        height={400}
        draggable={false}
      />
      <p className="text-lg text-white w-3/6 pl-8 pt-4">{description}</p>
      <div className="flex gap-x-6 px-8 pt-4">
        {playable ? (
          <Button text="Prøv ut her" type="play" link={link} />
        ) : (
          <Button text="Les mer her" type="read" link={link} />
        )}
        <Button text="GitHub" type="github" link={github} />
      </div>
    </div>
    <Image
      src={bgImg}
      alt="background"
      fill
      className="object-cover rounded-3xl"
      draggable={false}
    />
  </div>
);

const ProjectCarousel = () => (
  <div className="rounded-xl h-6/4 w-6/4 ">
    <ProjectBanner
      bannerImg={"/Projects/ProjectBanners/MarketingAI/banner.png"}
      description={
        "Marketing AI is a powerful marketing tool made to conquer all social platforms, seamlessly optimizing campaigns and maximizing outreach with its advanced capabilities."
      }
      bgImg={"/Projects/ProjectBanners/MarketingAI/bg.png"}
      playable={true}
      link={"/projects/marketingai"}
      github={"https://github.com/CogitoNTNU/MarketingAI"}
    />
  </div>
);

const Projects = () => {
  return (
    <div className="h-fit overscroll-contain animate-toblack">
      <Head>
        <title>Prosjekter - Cogito NTNU</title>
      </Head>
      <Navbar page="projects" />
      <main className="h-fit w-full pt-44 justify-center items-center flex-col px-20">
        <ProjectCarousel />
        <div className="pt-16 pb-12">
          <p className="text-white font-semibold text-3xl tracking-wide">
            Prosjekt Galleri
          </p>
          <div className="flex pt-8 gap-x-12 gap-y-4 flex-wrap">
            {CogitoProjects.sort((firstProject, secondProject) => {
              if (firstProject.released === secondProject.released) return 0;
              if (firstProject.released) return -1;
              return 1;
            }).map((project: ProjectType) => {
              return (
                <Project
                  key={project.name}
                  name={project.name}
                  released={project.released}
                  github={project.github}
                  img={project.img}
                  url={project.url}
                  playable={project.playable}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

"use client";
import { useRouter } from "next/router";
import ProjectNavbar from "../../../components/Navbar/ArticleNavbar";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { children } from "@material-tailwind/react/types/components/accordion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import ProjectFooter from "../../../components/Footer/ArticleFooter";
import {
  ArticleDescriptionPage,
  ArticleLandingPage,
  ArticleTeamPage,
  TeamMember,
} from "../../../lib/types";
import { articles } from "../../../data/articles";

const ReadMoreButton = () => {
  function scrollDown() {
    window.scrollBy({
      top: window.outerHeight,
      behavior: "smooth",
    });
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
      onClick={scrollDown}
      className="w-full h-full justify-center flex-col items-center text-center cursor-pointer"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
        className="text-white text-lg"
      >
        Les mer nedover
      </motion.p>
      <FaChevronDown className="text-white text-2xl text-center w-full mt-2 animate-bounce" />
    </motion.div>
  );
};

interface GithubButtonProps {
  link: string;
}

const GithubButton = ({ link }: GithubButtonProps) => {
  return (
    <div className="relative w-[18rem] h-[3rem] rounded-3xl group">
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 overflow-hidden transition-all delay-75">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-white animate-gradient" />
      </div>
      <Link
        href={link}
        className="absolute inset-[2px] rounded-3xl flex gap-4 justify-center items-center bg-black-dark z-10"
      >
        <FiGithub className="text-white text-2xl" />
        <p className="text-white text-lg">Github</p>
      </Link>
    </div>
  );
};

interface LandingProps {
  title: string;
  description: string;
  github?: string;
}

const Landing = ({ title, description, github }: LandingProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        className="h-screen w-screen bg-black-dark z-30 absolute"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        className="w-full h-full flex items-center justify-center relative z-40"
      >
        <div className="relative w-fit">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="text-stroke text-stroke-white text-stroke-fill-transparent text-8xl absolute top-3 left-3 z-40 w-full text-center"
          >
            {title}
          </motion.p>
          <motion.div className="text-stroke text-stroke-fill-white text-stroke-white text-8xl z-50 flex justify-center">
            {Array.from(title).map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.5,
              delay: 1,
              ease: "easeInOut",
            }}
            className="w-full h-[2px] bg-white mt-4 rounded-3xl origin-left"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            className="text-center w-full flex justify-center pt-8"
          >
            <p className="w-4/6 text-xl text-white">{description}</p>
          </motion.div>
          {github && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
              className="flex justify-center pt-8"
            >
              <GithubButton link={github} />
            </motion.div>
          )}
          <div className="relative -bottom-48">
            <ReadMoreButton />
          </div>
        </div>
      </motion.div>
    </>
  );
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ParallaxContentProps {
  id: number;
  articleId: string;
  video?: boolean;
  main: children;
}

const ParallaxContent = ({
  id,
  articleId,
  video = false,
  main,
}: ParallaxContentProps) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const parallaxValue = 300;
  const y = useParallax(scrollYProgress, id === 0 ? 0 : parallaxValue);

  return (
    <>
      <motion.div
        className="absolute z-50 w-screen h-screen"
        initial={{ y: parallaxValue }}
        whileInView={{ y: 0 }}
        style={{ y }}
      >
        {main}
      </motion.div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-screen flex justify-center items-center relative z-30 overflow-hidden"
      >
        <div ref={ref}>
          {video ? (
            <video
              src={`/Projects/Articles/${articleId}/${id}.mp4`}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute top-0 left-0 block w-full h-full object-cover object-center"
            />
          ) : (
            <Image
              src={`/Projects/Articles/${articleId}/${id}.png`}
              alt={id.toString()}
              fill
              className="object-cover object-center animate-grow overflow-hidden"
            />
          )}
        </div>
      </motion.section>
    </>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

interface DescriptionProps {
  description: string;
  funFacts: string[];
  technologies: string[];
  links: string[];
}

const Description = ({
  description,
  funFacts,
  technologies,
  links,
}: DescriptionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="flex flex-col items-center w-screen h-screen text-white top-0 left-0"
    >
      <div className="flex flex-col justify-center items-center h-full w-full">
        <motion.p
          variants={itemVariants}
          className="text-lg bg-black-dark bg-opacity-50 px-12 py-3 mb-4 tracking-wide"
        >
          Beskrivelse av Prosjektet
        </motion.p>
        <div className="pt-2 w-3/5 h-3/5 flex justify-between gap-4">
          <motion.div
            variants={itemVariants}
            className="w-3/5 h-full bg-black-dark bg-opacity-50 rounded-lg px-8 py-12 space-y-4"
          >
            <p className="text-xl font-semibold">Hva er dette egentlig? 👀</p>
            <p className="tracking-wide font-normal">{description}</p>
            <p className="text-xl font-semibold pt-2">Fun Facts 🕺</p>
            <ul className="px-4 space-y-3">
              {funFacts.map((fact, index) => (
                <li key={index} className="list-disc">
                  {fact}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-2/5 h-full bg-black-dark bg-opacity-50 rounded-lg px-8 py-10 space-y-4"
          >
            <p className="text-xl font-semibold pt-2">Teknologivalg 💻</p>
            <ul className="px-4 space-y-3">
              {technologies.map((tech, index) => (
                <li key={index} className="list-disc">
                  {tech}
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold pt-2">Links & Stuff 🔗</p>
            <ul className="space-y-3 w-full overflow-hidden">
              {links.map((link, index) => (
                <a key={index} href={link} className="list-disc">
                  {link}
                </a>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-12">
        <ReadMoreButton />
      </div>
    </motion.div>
  );
};

const Results = () => {
  return (
    <div className="w-screen h-screen justify-center flex pt-44">
      <p className="px-24 py-3 text-lg text-white bg-black-dark opacity-80 h-fit tracking-wide">
        Resultatet...
      </p>
      <div className="absolute bottom-12">
        <ReadMoreButton />
      </div>
    </div>
  );
};

interface TeamProps {
  articleId: string;
  team: TeamMember[];
}

const Team = ({ articleId, team }: TeamProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <div className="w-screen h-screen items-center flex flex-col pt-36">
        <p className="px-24 py-3 text-lg text-white bg-black-dark bg-opacity-50 h-fit tracking-wide">
          Teamet bak
        </p>
        <motion.div
          className="flex justify-center gap-x-24 gap-y-4 pt-12 flex-wrap"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={item}>
              <TeamMember
                articleId={articleId}
                name={member.name}
                role={member.role}
                github={member.github}
                linkedIn={member.linkedIn}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ProjectFooter />
    </>
  );
};

interface TeamMemberProps {
  articleId: string;
  name: string;
  role: "Leder" | "Medlem";
  github?: string;
  linkedIn?: string;
}

const TeamMember = ({
  articleId,
  name,
  role,
  github,
  linkedIn,
}: TeamMemberProps) => {
  function getLink(): string {
    if (github) return github;
    if (linkedIn) return linkedIn;
    return "#";
  }

  function getMemberName(): string {
    return name.split(" ")[0].toLowerCase();
  }

  return (
    <Link
      href={getLink()}
      className="text-center flex flex-col items-center justify-center group hover:scale-105 transition-all delay-75"
    >
      <div className="relative flex flex-col items-center w-36 h-36 bg-black-dark bg-opacity-50 rounded-[100rem]">
        <Image
          src={`/Projects/Articles/${articleId}/${getMemberName()}.png`}
          alt={getMemberName()}
          layout="fill"
          className="object-cover rounded-[100rem]"
        />
      </div>
      <p className="text-white text-lg font-semibold pt-4">{name}</p>
      <p className="text-white text-lg font-normal">{role}</p>
    </Link>
  );
};

interface ArticleProps {
  articleId: string;
  landingPage: ArticleLandingPage;
  descriptionPage: ArticleDescriptionPage;
  teamPage: ArticleTeamPage;
  github?: string;
}

const Article = ({
  articleId,
  landingPage,
  descriptionPage,
  teamPage,
  github,
}: ArticleProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.documentElement.classList.add("snap-y", "snap-mandatory");

    return () => {
      document.documentElement.classList.remove("snap-y", "snap-mandatory");
    };
  }, []);

  return (
    <div className="h-screen w-screen">
      <ParallaxContent
        id={0}
        video
        main={
          <Landing
            title={landingPage.title}
            description={landingPage.description}
            github={github}
          />
        }
        articleId={articleId}
      />
      <ParallaxContent
        id={1}
        main={<Description {...descriptionPage} />}
        articleId={articleId}
      />
      <ParallaxContent id={2} video main={<Results />} articleId={articleId} />
      <ParallaxContent
        id={3}
        main={<Team team={teamPage.team} articleId={articleId} />}
        articleId={articleId}
      />
      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-white bottom-0 origin-left z-[100]"
        style={{ scaleX }}
      />
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  const { projectId } = router.query;

  if (!router.isReady) {
    return null;
  }

  const article = articles.find((article) => article.articleId === projectId);
  if (!article)
    return (
      <div className="text-2xl text-white w-screen h-screen justify-center items-center flex flex-col space-y-2">
        <p>404 - Article Not Found</p>
        <p className="text-lg">Did you write the url corretly?</p>
      </div>
    );

  return (
    <>
      <ProjectNavbar semester={`${article.semester} ${article.year}`} />
      <Article {...article} />
    </>
  );
};

export default Page;

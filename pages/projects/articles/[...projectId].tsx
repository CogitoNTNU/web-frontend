"use client"
import { useRouter } from "next/router";
import ProjectNavbar from "../../../components/Navbar/ProjectNavbar";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import { useEffect, useRef } from "react"
import Image from "next/image";
import { children } from "@material-tailwind/react/types/components/accordion";
import { FaChevronDown, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import ProjectFooter from "../../../components/Footer/ProjectFooter";

const ReadMoreButton = () => {
  function scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
      onClick={scrollDown}
      className="w-full h-full justify-center flex-col items-center text-center cursor-pointer">
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
  )
}

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
  )
}

const FirstMain = () => {
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
            className="text-stroke text-stroke-white text-stroke-fill-transparent text-8xl absolute top-3 left-3 z-40"
          >
            NEATACTICS
          </motion.p>
          <motion.div className="text-stroke text-stroke-fill-white text-stroke-white text-8xl z-50 flex">
            {Array.from("NEATACTICS").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.1,
                  ease: "easeOut"
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
              ease: "easeInOut"
            }}
            className="w-full h-[2px] bg-white mt-4 rounded-3xl origin-left"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            className="text-center w-full flex justify-center pt-8">
            <p className="w-4/6 text-xl text-white">
              Hvordan kan en datamaskin lære seg å spille Mario helt selv?
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
            className="flex justify-center pt-8">
            <GithubButton link="https://github.com" />
          </motion.div>
          <div className="relative -bottom-48">
            <ReadMoreButton />
          </div>
        </div>
      </motion.div>
    </>
  )
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

interface ParallaxContentProps {
  id: number
  video?: boolean
  main: children
}

const ParallaxContent = ({ id, video = false, main }: ParallaxContentProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, (id === 0) ? 0 : 400)

  return (
    <>
      <motion.div
        className="absolute z-50 w-screen h-screen"
        style={{ y }}
      >
        {main}
      </motion.div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-screen flex justify-center items-center relative z-30 overflow-hidden">
        <div ref={ref}>
          {
            video ? (
              <video
                src={`/Projects/Articles/NEATactics/neat-${id}.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 block w-full h-full object-cover object-center"
              />
            ) : (
              <Image
                src={`/Projects/Articles/NEATactics/neat-${id}.png`}
                alt={id.toString()}
                fill
                className="object-cover object-center animate-grow overflow-hidden"
              />
            )
          }
        </div>
      </motion.section>
    </>
  )
}

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

const DescriptionMain = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="flex flex-col items-center w-screen h-screen text-white"
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
            <p className="tracking-wide font-normal">
              NEATactics er et prosjekt som bygger på KI-metoden NEAT (Neuroevolution of Augmenting Topologies), en genetisk algoritme for å utvikle nevrale nettverk. Dette er noe av det nærmeste vi har til menneskelig evolusjon, men i form av en maskinlæringsmodell. Modellen har ingen forhåndskunnskap om miljøet den opererer i, men har lært en intern representasjon av verdenen som den bruker til å bestemme policyen for sin adferd.
            </p>
            <p className="text-xl font-semibold pt-2">Fun Facts 🕺</p>
            <ul className="px-4 space-y-3">
              <li className="list-disc">NEATactics trente modellen sin på IDUN, en supercomputer på NTNU!</li>
              <li className="list-disc">Gruppen programmerte nesten alt fra bunnen av, f.eks. de nevrale nettverkene etc. Wow!</li>
            </ul>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-2/5 h-full bg-black-dark bg-opacity-50 rounded-lg px-8 py-10 space-y-4"
          >
            <p className="text-xl font-semibold pt-2">Teknologivalg 💻</p>
            <ul className="px-4 space-y-3">
              <li className="list-disc">Python 3</li>
              <li className="list-disc">OpenAI Gymnasium</li>
              <li className="list-disc">Pygame</li>
              <li className="list-disc">Flask</li>
            </ul>
            <p className="text-xl font-semibold pt-2">Links & Stuff 🔗</p>
            <ul className="px-4 space-y-3">
              <li className="list-disc"><a href="..."></a></li>
              <li className="list-disc">OpenAI Gymnasium</li>
              <li className="list-disc">Pygame</li>
              <li className="list-disc">Flash</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-12">
        <ReadMoreButton />
      </div>
    </motion.div>
  )
}

const ResultsMain = () => {
  return (
    <div className="w-screen h-screen justify-center flex pt-44">
      <p className="px-24 py-3 text-lg text-white bg-black-dark opacity-80 h-fit tracking-wide">Resultatet...</p>
      <div className="absolute bottom-12">
        <ReadMoreButton />
      </div>
    </div>
  )
}

const TeamMain = () => {
  return (
    <>

    <div className="w-screen h-screen justify-center flex pt-44">
      <p className="px-24 py-3 text-lg text-white bg-black-dark opacity-80 h-fit tracking-wide">Teamet bak</p>

    </div>
      <ProjectFooter />
    </>
  )
}

const Parallax = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    document.documentElement.classList.add('snap-y', 'snap-mandatory');

    return () => {
      document.documentElement.classList.remove('snap-y', 'snap-mandatory');
    };
  }, []);

  return (
    <div className="h-screen">
      <ParallaxContent id={0} video main={<FirstMain />} />
      <ParallaxContent id={1} main={<DescriptionMain />} />
      <ParallaxContent id={2} video main={<ResultsMain />} />
      <ParallaxContent id={3} main={<TeamMain />} />
      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-white bottom-0 origin-left z-[100]"
        style={{ scaleX }}
      />
    </div>
  )
}

const Article = () => {
  const router = useRouter();
  // return <div>Article {router.query.projectId}</div>;
  return (
    <>
      <ProjectNavbar semester="Høst 2024" />
      <Parallax />
    </>
  )
};

export default Article;

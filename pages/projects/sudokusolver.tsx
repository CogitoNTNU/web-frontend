"use client";
import ProjectNavbar from "../../components/Navbar/ArticleNavbar";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import ProjectFooter from "../../components/Footer/ArticleFooter";

const ReadMoreButton = () => {
  function scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      onClick={scrollDown}
      className="w-full h-full justify-center flex-col items-center text-center cursor-pointer"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="text-white text-lg"
      >
        Les mer nedover
      </motion.p>
      <FaChevronDown className="text-white text-2xl text-center w-full mt-2 animate-bounce" />
    </motion.div>
  );
};

const GithubButton = ({ link }: { link: string }) => {
  return (
    <div className="relative w-[18rem] h-[3rem] rounded-3xl group">
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 overflow-hidden transition-all delay-75">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] animate-gradient" />
      </div>
      <Link
        href={link}
        className="absolute inset-[2px] rounded-3xl flex gap-4 justify-center items-center bg-[#0a0a0a] z-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub className="text-white text-2xl" />
        <p className="text-white text-lg">Github</p>
      </Link>
    </div>
  );
};

const Landing = () => {
  const title = "SUDOKU SOLVER";
  const description =
    "Hvordan kan vi bruke datasyn og AR for å løse sudoku i sanntid?";
  const github = "https://github.com/CogitoNTNU/SudokuSolver";

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]">
      {/* Animated sudoku grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 35px, #4ECDC4 35px, #4ECDC4 36px),
            repeating-linear-gradient(90deg, transparent, transparent 35px, #4ECDC4 35px, #4ECDC4 36px),
            repeating-linear-gradient(0deg, transparent, transparent 105px, #FF6B6B 105px, #FF6B6B 107px),
            repeating-linear-gradient(90deg, transparent, transparent 105px, #FF6B6B 105px, #FF6B6B 107px)
          `
        }} />
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-5xl w-full">
          {/* Floating numbers animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[1,2,3,4,5,6,7,8,9].map((num, i) => (
              <motion.div
                key={i}
                className="absolute text-6xl font-bold text-[#4ECDC4] opacity-20"
                initial={{ 
                  x: `${Math.random() * 100}%`,
                  y: -100 
                }}
                animate={{ 
                  y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                  rotate: 360
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear"
                }}
              >
                {num}
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mb-12">
            <motion.div className="text-stroke text-stroke-fill-white text-stroke-white text-6xl md:text-7xl lg:text-8xl flex justify-center flex-wrap font-bold">
              {Array.from(title).map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: -50, opacity: 0, rotate: -180 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.05,
                    type: "spring",
                    stiffness: 120
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            className="w-full h-[3px] bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] rounded-3xl origin-left mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            className="text-xl text-gray-300 text-center mb-8"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
            className="flex justify-center mb-16"
          >
            <GithubButton link={github} />
          </motion.div>

          <div className="flex justify-center">
            <ReadMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const Description = () => {
  const description =
    "SudokuSolver er en Augmented Reality (AR) applikasjon som løser sudoku-oppgaver i sanntid ved hjelp av datasyn og maskinlæring. Systemet bruker OpenCV.js for å detektere sudoku-rutenett i bilder gjennom avansert bildebehandling med gaussian blur og adaptive threshold-filtre. Når rutenettet er identifisert, deles det opp i 81 individuelle celler hvor bakgrunn og cellelinjer fjernes. For å gjenkjenne sifrene brukes en custom-trent CNN (Convolutional Neural Network) modell trent på et datasett med 4500 digitale sifre, hvor sifrene forbehandles med dilasjon for bedre gjenkjennelse. Selve sudoku-løsningen beregnes ved hjelp av en rekursiv backtracking-algoritme som systematisk prøver ulike kombinasjoner til den finner riktig løsning.";
  
  const funFacts = [
    "CNN-modellen ble trent på et custom datasett med 4500 digitale sifre, prosessert med samme metode som brukes i selve løsningen!",
    "Systemet kan løse selv de vanskeligste sudoku-oppgavene på under ett sekund.",
    "AR-visualiseringen bruker avansert projeksjonsmatematikk for å plassere løsningen perfekt over det fysiske brettet.",
  ];

  const technologies = [
    "TypeScript",
    "OpenCV.js",
    "Python",
    "TensorFlow/Keras",
    "Computer Vision",
    "Convolutional Neural Networks",
    "Augmented Reality",
    "Vercel",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16213e] via-[#1a1a2e] to-[#0a0a0a] relative overflow-hidden pt-36 pb-20">
      {/* Colorful gradient background instead of grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 via-[#4ECDC4]/10 to-[#45B7D1]/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #FF6B6B20 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #4ECDC420 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #45B7D120 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
            Beskrivelse av Prosjektet
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main description - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 backdrop-blur-xl rounded-3xl p-8 border border-[#4ECDC4]/20 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#45B7D1] mb-4">
              Hva er dette egentlig? 🧩
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
            
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] mb-4 mt-8">
              Fun Facts 🎯
            </h3>
            <ul className="space-y-3">
              {funFacts.map((fact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start text-gray-300"
                >
                  <span className="text-[#FF6B6B] mr-3 mt-1 text-xl">◈</span>
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies and links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#16213e]/90 to-[#1a1a2e]/90 backdrop-blur-xl rounded-3xl p-8 border border-[#FF6B6B]/20 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#45B7D1] to-[#FF6B6B] mb-4">
              Teknologivalg 💻
            </h3>
            <ul className="space-y-2 mb-8">
              {technologies.map((tech, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="flex items-center text-gray-300"
                >
                  <span className="text-[#4ECDC4] mr-3">▸</span>
                  {tech}
                </motion.li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mb-4">
              Links 🔗
            </h3>
            <div className="space-y-3">
              <Link
                href="https://github.com/CogitoNTNU/SudokuSolver"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#4ECDC4]/10 hover:bg-[#4ECDC4]/20 border border-[#4ECDC4]/40 rounded-xl px-4 py-3 transition-all group"
              >
                <FiGithub className="text-[#4ECDC4] text-xl" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  GitHub Repository
                </span>
                <FiExternalLink className="text-gray-400 text-sm ml-auto" />
              </Link>
              
              <Link
                href="https://sudoku-solver-theta-wine.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 border border-[#FF6B6B]/40 rounded-xl px-4 py-3 transition-all group"
              >
                <FiExternalLink className="text-[#FF6B6B] text-xl" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Try it yourself
                </span>
                <FiExternalLink className="text-gray-400 text-sm ml-auto" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Add showcase images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-4"
        >
          <div className="relative h-32 rounded-xl overflow-hidden shadow-lg group">
            <Image
              src="/Projects/Articles/sudokusolver/0.png"
              alt="Sudoku detection"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-32 rounded-xl overflow-hidden shadow-lg group">
            <Image
              src="/Projects/Articles/sudokusolver/3.jpg"
              alt="Project presentation"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </motion.div>

        <div className="flex justify-center mt-16">
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
};

const Results = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden pt-36 pb-20">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B] mb-12 text-center"
        >
          Se Løsningen i Aksjon! 🎬
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video on the left - LARGER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] p-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] animate-gradient opacity-50" />
              <div className="relative rounded-3xl overflow-hidden bg-black">
                <video
                  src="/Projects/Articles/sudokusolver/2.MP4"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  controls={false}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Description on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 backdrop-blur-xl rounded-3xl p-8 border border-[#4ECDC4]/20 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
                Live AR Sudoku Solving ✨
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Se hvordan vår AI-drevne løsning detekterer, løser og projiserer 
                sudoku-løsningen direkte på det fysiske brettet i sanntid!
              </p>
              
              <div className="space-y-4">
                {[
                  { num: "1", text: "Detekterer sudoku-rutenettet med OpenCV", color: "#FF6B6B" },
                  { num: "2", text: "Gjenkjenner sifre med CNN-modellen", color: "#4ECDC4" },
                  { num: "3", text: "Løser oppgaven med backtracking", color: "#45B7D1" },
                  { num: "4", text: "Projiserer løsningen tilbake med AR", color: "#FF6B6B" },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span 
                      className="mr-3 mt-1 font-bold text-2xl"
                      style={{ color: step.color }}
                    >
                      {step.num}
                    </span>
                    <span className="text-gray-300 pt-1">{step.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sudoku processing visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-xl mt-6"
            >
              <Image
                src="/Projects/Articles/sudokusolver/1.png"
                alt="Sudoku processing visualization"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">Bildeprosessering & Deteksjon</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-16">
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
};

const TeamMember = ({
  name,
  role,
  github,
  linkedIn,
  image,
}: {
  name: string;
  role: string;
  github?: string;
  linkedIn?: string;
  image: string;
}) => {
  const hasLinks = github || linkedIn;
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.2 }}
      className="text-center group"
    >
      <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden border-3 border-transparent group-hover:border-[#4ECDC4] transition-all duration-300 shadow-lg">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-white font-semibold text-lg">{name}</h3>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mb-2">{role}</p>
      
      {hasLinks && (
        <div className="flex justify-center gap-3 mt-2">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4ECDC4] transition-colors"
            >
              <FiGithub className="text-xl" />
            </Link>
          )}
          {linkedIn && (
            <Link
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#45B7D1] transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Team = () => {
  const team = [
    {
      name: "Afras Mansoor",
      role: "Prosjektleder",
      github: "https://github.com/Afrasum",
      linkedIn: "https://www.linkedin.com/in/afrasmansoor",
      image: "/Projects/Articles/sudokusolver/afras.png",
    },
    {
      name: "Andreas V. Jonsterhaug",
      role: "Medleder",
      github: "https://github.com/AndreasVJ",
      linkedIn: "https://www.linkedin.com/in/andreas-v-jonsterhaug-982232277/",
      image: "/Projects/Articles/sudokusolver/andreas.png",
    },
    {
      name: "Igor Iwanicki",
      role: "Medlem",
      github: "https://github.com/igiwa001",
      linkedIn: "",
      image: "/Projects/Articles/sudokusolver/igor.png",
    },
    {
      name: "Ulrikke Kvaal",
      role: "Medlem",
      github: "https://github.com/ulrikketk",
      linkedIn: "",
      image: "/Projects/Articles/sudokusolver/ulrikke.png",
    },
    {
      name: "Lotta Sandström",
      role: "Medlem",
      github: "https://github.com/lottahelen",
      linkedIn: "",
      image: "/Projects/Articles/sudokusolver/lotta.png",
    },
    {
      name: "Ella Octava S. Aakre",
      role: "Medlem",
      github: "https://github.com/EllaOctava",
      linkedIn: "",
      image: "/Projects/Articles/sudokusolver/0.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16213e] via-[#1a1a2e] to-[#0a0a0a] relative overflow-hidden pt-36 pb-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #FF6B6B 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, #4ECDC4 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, #45B7D1 0%, transparent 50%)
          `
        }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1]">
            Teamet bak SudokuSolver
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <ProjectFooter />
    </div>
  );
};

const SudokuSolver = () => {
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
    <>
      <ProjectNavbar semester="Vår 2024" />
      <div className="relative">
        <section className="snap-start">
          <Landing />
        </section>
        <section className="snap-start">
          <Description />
        </section>
        <section className="snap-start">
          <Results />
        </section>
        <section className="snap-start">
          <Team />
        </section>
        <motion.div
          className="fixed left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] bottom-0 origin-left z-[100]"
          style={{ scaleX }}
        />
      </div>
    </>
  );
};

export default SudokuSolver;
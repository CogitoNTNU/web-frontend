"use client";
import ProjectNavbar from "../../components/Navbar/ArticleNavbar";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import ProjectFooter from "../../components/Footer/ArticleFooter";
import { articles } from "../../data/articles";

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
  const articleData = articles.find((a) => a.articleId === "geoguessrai");
  const title = articleData.landingPage.title;
  const description = articleData.landingPage.description;
  const github =
    articleData.github || "https://github.com/CogitoNTNU/GeoGuessrAI";

  // Base coordinate strings used for the falling animation
  const baseCoordinates = [
    "59.9139°N, 10.7522°E",
    "40.7128°N, 74.0060°W",
    "51.5074°N, 0.1278°W",
    "35.6762°N, 139.6503°E",
    "48.8566°N, 2.3522°E",
    "52.5200°N, 13.4050°E",
    "37.7749°N, 122.4194°W",
    "55.7558°N, 37.6173°E",
    "25.2048°N, 55.2708°E",
    "34.0522°N, 118.2437°W",
    "41.9028°N, 12.4964°E",
    "19.4326°N, 99.1332°W",
    "31.2304°N, 121.4737°E",
    "22.3193°N, 114.1694°E",
    "1.3521°N, 103.8198°E",
  ];

  // Country names to fall alongside the coordinates
  const baseCountries = [
    "Norge",
    "USA",
    "Storbritannia",
    "Japan",
    "Frankrike",
    "Tyskland",
    "Italia",
    "Canada",
    "Brasil",
    "Australia",
    "Sør-Afrika",
    "Mexico",
    "India",
    "Singapore",
    "De forente arabiske emirater",
    "Spania",
    "Portugal",
    "Sør-Korea",
    "Sverige",
  ];

  // Active fallers (coordinates and countries) spawned over time
  const [fallers, setFallers] = useState<
    { id: number; text: string; x: number; createdAt: number }[]
  >([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastXRef = useRef<number | null>(null);

  // Stop spawning once the user has scrolled down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Continuously spawn new fallers at a fixed rate while on the first section
  useEffect(() => {
    if (hasScrolled) return;

    const pickRandom = <T,>(arr: T[]): T =>
      arr[Math.floor(Math.random() * arr.length)];

    const spawn = () => {
      // Choose an x-position that is sufficiently far from the last spawn
      let x = 5 + Math.random() * 90;
      if (lastXRef.current !== null) {
        for (let i = 0; i < 10; i++) {
          const candidate = 5 + Math.random() * 90;
          if (Math.abs(candidate - lastXRef.current) > 10) {
            x = candidate;
            break;
          }
        }
      }
      lastXRef.current = x;

      setFallers((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          text:
            Math.random() < 0.5
              ? pickRandom(baseCoordinates)
              : pickRandom(baseCountries),
          // Keep a small margin so text doesn't clip at the edges
          x,
          createdAt: Date.now(),
        },
      ]);
    };

    // Spawn one immediately, then keep a steady rate
    spawn();
    const intervalId = window.setInterval(spawn, 900); // ~1 new item per second

    return () => window.clearInterval(intervalId);
  }, [hasScrolled]);

  // Periodically clean up old fallers to avoid unbounded growth
  useEffect(() => {
    const cleanupId = window.setInterval(() => {
      const cutoff = Date.now() - 35000; // ~35s lifetime
      setFallers((prev) => prev.filter((f) => f.createdAt > cutoff));
    }, 5000);

    return () => window.clearInterval(cleanupId);
  }, []);

  return (
    <div className="flex flex-col min-h-screen h-fit max-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]">
      {/* Animated sudoku grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 35px, #4ECDC4 35px, #4ECDC4 36px),
            repeating-linear-gradient(90deg, transparent, transparent 35px, #4ECDC4 35px, #4ECDC4 36px),
            repeating-linear-gradient(0deg, transparent, transparent 105px, #FF6B6B 105px, #FF6B6B 107px),
            repeating-linear-gradient(90deg, transparent, transparent 105px, #FF6B6B 105px, #FF6B6B 107px)
          `,
          }}
        />
      </div>

      {/* Floating coordinates & country names across the landing section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {fallers.map((faller) => (
          <motion.div
            key={faller.id}
            className="absolute text-base font-mono font-semibold text-[#4ECDC4] opacity-30"
            style={{ left: `${faller.x}%`, transform: "translateX(-50%)" }}
            initial={{ y: "-10vh" }}
            animate={{ y: "120vh" }}
            transition={{ duration: 24, ease: "linear" }}
          >
            {faller.text}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen h-fit max-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-5xl w-full">
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
                    stiffness: 120,
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
  const articleData = articles.find((a) => a.articleId === "geoguessrai");
  const description = articleData.descriptionPage.description;
  const funFacts = articleData.descriptionPage.funFacts;
  const technologies = articleData.descriptionPage.technologies;

  return (
    <div className="flex flex-col h-fit max-h-screen bg-gradient-to-b from-[#16213e] via-[#1a1a2e] to-[#0a0a0a] relative overflow-hidden pt-36 pb-20">
      {/* Colorful gradient background instead of grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 via-[#4ECDC4]/10 to-[#45B7D1]/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 30%, #FF6B6B20 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #4ECDC420 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #45B7D120 0%, transparent 50%)
          `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
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
            <div className="text-gray-300 text-xs leading-relaxed mb-6 [&>p]:mb-4 [&>p:last-child]:mb-0">
              {/* Render HTML paragraphs, but handle the article link explicitly to avoid HTML quirks */}
              <div dangerouslySetInnerHTML={{ __html: description }} />
              <p className="mt-4">
                Les mer i forskningsartikkelen{" "}
                <a
                  href="https://arxiv.org/abs/2307.05845"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  https://arxiv.org/abs/2307.05845
                </a>
                .
              </p>
            </div>

            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#4ECDC4] to-[#45B7D1] mb-4 mt-8">
              Fun Facts 🎯
            </h3>
            <ul className="space-y-3">
              {funFacts.map((fact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start text-gray-300 text-xs"
                >
                  <span className="text-[#FF6B6B] mr-3 mt-1 text-xs">◈</span>
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
                href="https://github.com/CogitoNTNU/GeoGuessrAI"
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Results = () => {
  return (
    <div className="flex flex-col h-fit max-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden pt-36 pb-20">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B] mb-2 text-center"
        >
          Våre resultater
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center lg:-ml-24">
          {/* Two equal blocks on the left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col gap-4 w-full max-w-sm ml-auto mr-8"
          >
            {/* Container with original aspect ratio */}
            <div className="relative w-full aspect-[9/16] flex flex-col gap-[13px] scale-95">
              {/* First block - half height */}
              <div className="relative w-full h-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] p-[2px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] animate-gradient opacity-50" />
                <div className="relative rounded-3xl overflow-hidden bg-black h-full">
                  <Image
                    src="/Projects/Articles/geoguessrai/0.png"
                    alt="GeoGuessr visualization"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xs font-semibold">
                      Kart over gjetninger, rød = fasit, grønn = gjetning
                    </p>
                  </div>
                </div>
              </div>
              {/* Second block - half height */}
              <div className="relative w-full h-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] p-[2px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] animate-gradient opacity-50" />
                <div className="relative rounded-3xl overflow-hidden bg-black h-full">
                  <Image
                    src="/Projects/Articles/geoguessrai/1.png"
                    alt="GeoGuessr processing visualization"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xs font-semibold">
                      Clusters av punkter i Sør-Norge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 backdrop-blur-xl rounded-3xl p-6 border border-[#4ECDC4]/20 shadow-2xl">
              <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
                Resultater
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                Etter kun 1 dag med trening og 2 epochs (gjennomkjøringer
                gjennom treningssettet) oppnår modellene våre følgende
                resultater på 1000 testbilder (ikke i treningssettet):
              </p>

              <div className="space-y-2">
                {[
                  {
                    num: "*",
                    label: "CLIP:",
                    score: "3360",
                    suffix: " gjennomsnittlig score",
                    color: "#FF6B6B",
                  },
                  {
                    num: "*",
                    label: "TinyVit:",
                    score: "3002",
                    suffix: " gjennomsnittlig score",
                    color: "#4ECDC4",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span
                      className="mr-2 mt-1 font-bold text-xl"
                      style={{ color: step.color }}
                    >
                      {step.num}
                    </span>
                    <span className="text-gray-300 pt-1 text-sm">
                      {step.label}{" "}
                      <span className="font-semibold">{step.score}</span>
                      {step.suffix}
                    </span>
                  </motion.div>
                ))}
                <p className="text-gray-400 leading-relaxed mb-3 text-xs italic">
                  TinyViT er en mye mindre modell enn CLIP, og kan derfor kjøres
                  lokalt på PC-en. Det betyr også at den alltid vil ha litt
                  dårligere resultater.
                </p>
                <p className="text-gray-300 text-xs leading-relaxed mb-4">
                  Vi vil fortsette å trene modellene våre og vil oppdatere denne
                  siden med nye resultater så fort vi får dem. TinyVit-modellen,
                  som er mindre krevende å kjøre enn CLIP-modellen, kan kjøre
                  inferens lokalt på en vanlig laptop på ca. 10 sekunder. Vårt
                  mål er derfor å lage en demo av denne som vi vil laste opp her
                  på siden i fremtiden slik at hvem som helst kan legge inn et
                  tilfeldig bilde og få ut et koordinat fra modellen vår.
                </p>
              </div>
            </div>

            {/* GeoGuessr processing visualization */}
            <div className="mt-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative h-[250px] rounded-2xl overflow-hidden shadow-xl bg-white border-4 border-white"
              >
                <Image
                  src="/Projects/Articles/geoguessrai/2.png"
                  alt="GeoGuessr processing visualization"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-xs font-semibold text-gray-300 mt-2">
                Statistikk for CLIP-modellen
              </p>
            </div>
          </motion.div>
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
      <div className="relative w-36 h-36 mx-auto mb-4 rounded-2xl overflow-hidden border-3 border-transparent group-hover:border-[#4ECDC4] transition-all duration-300 shadow-lg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover bg-gray-900"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-white font-semibold text-base">{name}</h3>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mb-2 text-sm">
        {role}
      </p>

      {hasLinks && (
        <div className="flex justify-center gap-3 mt-2">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4ECDC4] transition-colors"
            >
              <FiGithub className="text-lg" />
            </Link>
          )}
          {linkedIn && (
            <Link
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#45B7D1] transition-colors"
            >
              <FaLinkedin className="text-lg" />
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Team = () => {
  const articleData = articles.find((a) => a.articleId === "geoguessrai");
  const teamData = articleData.teamPage.team;

  // Map team data from articles with custom images
  const team = teamData.map((member) => {
    // Map names to images
    const imageMap: { [key: string]: string } = {
      "Daniel Neukirch Hansen": "/Projects/Articles/geoguessrai/daniel.jpeg",
      "Jens Martin Norheim Berget": "/Projects/Articles/geoguessrai/jens.jpeg",
      "Magnus Vesterøy Bryne": "/Projects/Articles/geoguessrai/magnus.jpeg",
      "Sondre Pettersen": "/Projects/Articles/geoguessrai/sondre.jpeg",
      "Håkon Støren": "/Projects/Articles/geoguessrai/hakon.jpeg",
      "Vetle Støren": "/Projects/Articles/geoguessrai/vetle.jpeg",
      "Parleen Brar": "/Projects/Articles/geoguessrai/parleen.jpeg",
      "Per Henrik Bergene Holm": "/Projects/Articles/geoguessrai/ph.jpeg",
    };

    return {
      name: member.name,
      role: member.role,
      github: member.github,
      linkedIn: member.linkedIn,
      image: imageMap[member.name] || "/Team/NoImage.svg",
    };
  });

  return (
    <div className="flex flex-col h-fit max-h-screen bg-gradient-to-b from-[#16213e] via-[#1a1a2e] to-[#0a0a0a] relative overflow-hidden pt-36 pb-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 50%, #FF6B6B 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, #4ECDC4 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, #45B7D1 0%, transparent 50%)
          `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1]">
            Teamet bak GeoGuessrAI
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
                stiffness: 100,
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

const GeoGuessrAI = () => {
  const articleData = articles.find((a) => a.articleId === "geoguessrai");
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
      <ProjectNavbar semester={`${articleData.semester} ${articleData.year}`} />
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

export default GeoGuessrAI;

import Head from "next/head";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
  image?: string;
}

const TV2xCogito = () => {
  const [selectedSemester, setSelectedSemester] = useState<"h24" | "v25">(
    "h24"
  );

  const scrollToContent = () => {
    const element = document.getElementById("semester-content");
    if (element) {
      const yOffset = -80; // Negative value to stop 80px before the element
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleSemesterChange = (semester: "h24" | "v25") => {
    setSelectedSemester(semester);
    // Scroll to content after state update
    void setTimeout(scrollToContent, 100);
  };

  const h24TeamLeaders: TeamMember[] = [
    {
      name: "Afras Mansoor",
      role: "Prosjektleder",
      github: "https://github.com/Afrasum",
      linkedin: "https://www.linkedin.com/in/afrasmansoor",
      image: "/Projects/Articles/tv2xcogito/afras.jpg",
    },
    {
      name: "Kristoffer Nohr Olaisen",
      role: "Prosjektleder",
      github: "https://github.com/Knolaisen",
      linkedin: "https://www.linkedin.com/in/kristoffer-nohr-olaisen-aa620722b",
      image: "/Projects/Articles/tv2xcogito/kristoffer.jpg",
    },
  ];

  const h24TeamMembers: TeamMember[] = [
    {
      name: "Alice Zheng",
      role: "Medlem",
      github: "https://github.com/A1ice-Z",
      linkedin: "https://www.linkedin.com/in/alice-z-21b351246/",
      image: "/Projects/Articles/tv2xcogito/alice.JPG",
    },
    {
      name: "Olivia Tan",
      role: "Medlem",
      github: "https://github.com/heiolivia",
      linkedin: "https://www.linkedin.com/in/oliviatan2002/",
      image: "/Projects/Articles/tv2xcogito/default.png",
    },
    {
      name: "Håvard Fossdal",
      role: "Medlem",
      github: "https://github.com/HFossdal",
      linkedin: "https://www.linkedin.com/in/hfossdal/",
      image: "/Projects/Articles/tv2xcogito/håvard_fossdal.jpg",
    },
    {
      name: "Serina Serife Erzengin",
      role: "Medlem",
      github: "https://github.com/serinaerzengin",
      linkedin: "https://www.linkedin.com/in/serina-erzengin-7b9734260/",
      image: "/Projects/Articles/tv2xcogito/default.png",
    },
    {
      name: "Folke Jernbert",
      role: "Medlem",
      github: "https://github.com/jernbert",
      linkedin: "https://www.linkedin.com/in/folke-jernbert-75b52032a/",
      image: "/Projects/Articles/tv2xcogito/default.png",
    },
    {
      name: "Maja Austguard",
      role: "Medlem",
      github: "https://github.com/maiahi",
      linkedin: "https://www.linkedin.com/in/maia-austigard-80054132a/",
      image: "/Projects/Articles/tv2xcogito/maia.jpg",
    },
    {
      name: "Sanne Jamila Olsen",
      role: "Medlem",
      github: "https://github.com/sannejamila",
      linkedin: "https://www.linkedin.com/in/sannejamila/",
      image: "/Projects/Articles/tv2xcogito/default.png",
    },
  ];

  const v25TeamLeaders: TeamMember[] = [
    {
      name: "Eva Stamatovska",
      role: "Prosjektleder",
      github: "https://github.com/stamatovskaeva",
      linkedin: "https://www.linkedin.com/in/evastamatovska/",
      image: "/Projects/Articles/tv2xcogito/eva.JPG",
    },
    {
      name: "Maren Landno",
      role: "Prosjektleder",
      github: "https://github.com/marenlan",
      linkedin: "https://www.linkedin.com/in/maren-landro-420535249/",
      image: "/Projects/Articles/tv2xcogito/maren.JPG",
    },
  ];

  const v25TeamMentors: TeamMember[] = [
    {
      name: "Sverre Nystad",
      role: "Mentor",
      github: "https://github.com/SverreNystad",
      linkedin: "https://www.linkedin.com/in/sverre-nystad/",
      image: "/Projects/Articles/tv2xcogito/sverre.jpg",
    },
    {
      name: "Afras Mansoor",
      role: "Mentor",
      github: "https://github.com/Afrasum",
      linkedin: "https://www.linkedin.com/in/afrasmansoor",
      image: "/Projects/Articles/tv2xcogito/afras.jpg",
    },
  ];

  const h24TechStack = [
    { name: "Docker", url: "https://www.docker.com" },
    { name: "Scikit-learn", url: "https://scikit-learn.org" },
    { name: "Keras", url: "https://keras.io" },
    { name: "NLTK", url: "https://www.nltk.org" },
    { name: "spaCy", url: "https://spacy.io" },
    { name: "Hugging Face", url: "https://huggingface.co" },
    { name: "WandB", url: "https://wandb.ai" },
    { name: "Optuna", url: "https://optuna.org" },
    { name: "XGBoost", url: "https://xgboost.readthedocs.io" },
    { name: "FastAPI", url: "https://fastapi.tiangolo.com" },
  ];

  const v25TechStack = [
    { name: "Docker", url: "https://www.docker.com" },
    { name: "Scikit-learn", url: "https://scikit-learn.org" },
    { name: "Keras", url: "https://keras.io" },
    { name: "NLTK", url: "https://www.nltk.org" },
    { name: "spaCy", url: "https://spacy.io" },
    { name: "Hugging Face", url: "https://huggingface.co" },
    { name: "WandB", url: "https://wandb.ai" },
    { name: "Optuna", url: "https://optuna.org" },
    { name: "XGBoost", url: "https://xgboost.readthedocs.io" },
    { name: "FastAPI", url: "https://fastapi.tiangolo.com" },
  ];

  const v25TeamMembers: TeamMember[] = [
    {
      name: "Adrian Jacobsen Lund",
      role: "Medlem",
      github: "https://github.com/adrianjlundd",
      linkedin: "https://www.linkedin.com/in/adrian-jacobsen-lund-818a41232/",
      image: "/Projects/Articles/tv2xcogito/adrian.JPG",
    },
    {
      name: "Arta Osmani",
      role: "Medlem",
      github: "https://github.com/Artaosmani",
      linkedin: "https://www.linkedin.com/in/arta-osmani-569292265/",
      image: "/Projects/Articles/tv2xcogito/arta.JPG",
    },
    {
      name: "Håvard Daleng",
      role: "Medlem",
      github: "https://github.com/MrMarHVD",
      linkedin: "https://www.linkedin.com/in/håvard-johannes-daleng-2266b7248/",
      image: "/Projects/Articles/tv2xcogito/håvard_daleng.jpeg",
    },
    {
      name: "Mari Hove Gusdal",
      role: "Medlem",
      github: "https://github.com/MariHGU",
      linkedin: "https://www.linkedin.com/in/mari-hove-gusdal-980395313/",
      image: "/Projects/Articles/tv2xcogito/mari.JPG",
    },
    {
      name: "Sebastian Riibe Berthelsen",
      role: "Medlem",
      github: "https://github.com/sebastianrb05",
      linkedin: "https://www.linkedin.com/in/sebastianriibeberthelsen/",
      image: "/Projects/Articles/tv2xcogito/sebastian.JPG",
    },
    {
      name: "Yatavi Suresh",
      role: "Medlem",
      github: "https://github.com/yada0403",
      linkedin: "https://www.linkedin.com/in/yatavi-suresh-62149534a/",
      image: "/Projects/Articles/tv2xcogito/yatavi.jpeg",
    },
  ];

  return (
    <>
      <Head>
        <title>TV2 x Cogito - Cogito NTNU</title>
      </Head>
      <Navbar page="/" onlyLogo />

      <div className="bg-[#100118] min-h-screen">
        {/* Hero Section with Background Image */}
        <header className="relative tablet:h-[600px] h-[450px] w-full overflow-hidden">
          {/* Background Image with Parallax Effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src="/Projects/Articles/tv2xcogito/1.jpg"
              alt="TV2 x Cogito Team"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#100118] via-[#100118]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#100118]/30 to-[#100118]" />
          </motion.div>

          <div className="relative flex justify-start w-full h-full tablet:px-[6%] px-[4%] items-center">
            <div className="flex items-center gap-8 z-10">
              {/* TV2 Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="tablet:w-[180px] w-[120px]"
              >
                <img
                  src="/Projects/ProjectLogos/tv2xcogito_whitetrans.png"
                  alt="TV2 x Cogito Logo"
                  className="w-full drop-shadow-2xl"
                />
              </motion.div>

              {/* Title and Description */}
              <div className="text-white">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="tablet:text-5xl text-3xl font-bold mb-2 drop-shadow-2xl"
                >
                  TV2 x Cogito
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="tablet:text-xl text-sm font-light drop-shadow-lg"
                >
                  AI-drevet redaksjonell innsikt
                </motion.p>
              </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute right-10 top-10 w-32 h-32 bg-[#702eff] opacity-30 rounded-lg rotate-12 backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute right-40 bottom-20 w-40 h-40 bg-[#702eff] opacity-30 rounded-lg -rotate-12 backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute right-20 top-1/2 w-24 h-24 bg-[#ffbf94] opacity-40 rounded-lg rotate-45 backdrop-blur-sm"
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative">
          {/* Combined Section - Project Description with Image Background */}
          <section className="relative min-h-[700px] w-full overflow-hidden">
            {/* Background Image */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src="/Projects/Articles/tv2xcogito/0.jpg"
                alt="TV2 x Cogito Workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#100118] via-[#100118]/70 to-[#100118]" />
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 px-4 py-16 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-2xl">
                  Om Prosjektet
                </h2>
                <p className="text-white opacity-90 text-lg max-w-4xl mx-auto leading-relaxed mb-4 drop-shadow-lg">
                  Dette er et samarbeidsprosjekt mellom Cogito NTNU og TV2 som
                  har pågått over to semestre.
                </p>
                <p className="text-white opacity-90 text-lg max-w-4xl mx-auto leading-relaxed mb-16 drop-shadow-lg">
                  Prosjektet utforsker hvordan kunstig intelligens kan hjelpe
                  TV2.no med å ta bedre redaksjonelle valg ved å utnytte store
                  mengder data om leseratferd og artikkelprestasjon. Målet er å
                  bruke maskinlæring for å analysere artikkeldata og gi nyttige
                  innsikter som hjelper TV2 med å forstå hva som engasjerer
                  leserne mest.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-20"
                >
                  <h3 className="text-3xl font-bold text-white drop-shadow-2xl mb-4">
                    Velg Semester
                  </h3>
                  <p className="text-xl text-white/90 drop-shadow-lg mb-8">
                    Utforsk prosjektets utvikling over tid
                  </p>

                  {/* Semester Selector */}
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => handleSemesterChange("h24")}
                      className={`px-10 py-4 rounded-lg font-semibold transition-all backdrop-blur-md ${
                        selectedSemester === "h24"
                          ? "bg-[#702eff] text-white scale-105 shadow-2xl"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/30"
                      }`}
                    >
                      Høst 2024
                    </button>
                    <button
                      onClick={() => handleSemesterChange("v25")}
                      className={`px-10 py-4 rounded-lg font-semibold transition-all backdrop-blur-md ${
                        selectedSemester === "v25"
                          ? "bg-[#702eff] text-white scale-105 shadow-2xl"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/30"
                      }`}
                    >
                      Vår 2025
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Semester Content - Creative Layout */}
          <section id="semester-content" className="relative py-20">
            {selectedSemester === "h24" ? (
              <div className="relative">
                {/* H24 Content - Timeline Style */}
                <div className="max-w-7xl mx-auto px-4">
                  {/* Header with gradient text */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                  >
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#702eff] to-[#ffbf94] bg-clip-text text-transparent mb-4">
                      Høst 2024
                    </h3>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white/80">
                      TV2 Article Predictor
                    </p>
                  </motion.div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20">
                    {/* Left Side - Project Story */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <div className="relative h-full">
                        <div className="absolute -left-2 sm:-left-4 top-0 w-1 h-full bg-gradient-to-b from-[#702eff] to-[#ffbf94] rounded-full" />

                        <div className="pl-4 sm:pl-8 h-full flex flex-col space-y-6 sm:space-y-8">
                          <div className="bg-[#1a0826] p-4 sm:p-6 rounded-xl border border-[#702eff]/30 flex-1">
                            <h4 className="text-[#ffbf94] font-bold text-lg mb-3 flex items-center gap-2">
                              <span className="text-2xl">🎯</span> Målet
                            </h4>
                            <p className="text-white/90 leading-relaxed">
                              Bygge et AI-system som predikerer artikkelytelse
                              basert på historiske data fra TV2.no
                            </p>
                          </div>

                          <div className="bg-[#1a0826] p-4 sm:p-6 rounded-xl border border-[#702eff]/30 flex-1">
                            <h4 className="text-[#ffbf94] font-bold text-lg mb-3 flex items-center gap-2">
                              <span className="text-2xl">💡</span> Løsningen
                            </h4>
                            <p className="text-white/90 leading-relaxed">
                              En dockerisert tjeneste med maskinlæringsmodeller
                              som analyserer artikler og gir prediksjoner med
                              forklaringer
                            </p>
                          </div>

                          <div className="bg-[#1a0826] p-4 sm:p-6 rounded-xl border border-[#702eff]/30 flex-1">
                            <h4 className="text-[#ffbf94] font-bold text-lg mb-3 flex items-center gap-2">
                              <span className="text-2xl">🔒</span> Status
                            </h4>
                            <p className="text-white/90 leading-relaxed">
                              Prosjektet er under NDA - detaljerte resultater
                              kan ikke deles offentlig
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Side - Tech & Stats */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      {/* Tech Stack Card */}
                      <div className="bg-[#1a0826] p-6 sm:p-8 rounded-2xl border border-[#702eff]/30">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                          <span className="text-2xl">⚡</span> Teknologi
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3 sm:gap-y-4 sm:gap-x-3">
                          {h24TechStack.map((tech, index) => (
                            <motion.a
                              key={tech.name}
                              href={tech.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="bg-[#100118] px-4 py-3 rounded-lg text-center text-[#ffbf94] font-medium border border-[#ffbf94]/40 hover:border-[#ffbf94] hover:bg-[#702eff]/10 transition-all cursor-pointer block"
                            >
                              {tech.name}
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-[#1a0826] p-6 rounded-xl border border-[#702eff]/30 text-center">
                          <div className="text-3xl font-bold text-[#702eff]">
                            1
                          </div>
                          <div className="text-white/80 text-sm mt-1 font-medium">
                            Semester
                          </div>
                        </div>
                        <div className="bg-[#1a0826] p-6 rounded-xl border border-[#ffbf94]/30 text-center">
                          <div className="text-3xl font-bold text-[#ffbf94]">
                            9
                          </div>
                          <div className="text-white/80 text-sm mt-1 font-medium">
                            Medlemmer
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                {/* V25 Content - Future Focus Layout */}
                <div className="max-w-7xl mx-auto px-4">
                  {/* Header with gradient text */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                  >
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#ffbf94] to-[#702eff] bg-clip-text text-transparent mb-4">
                      Vår 2025
                    </h3>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white/80">
                      Neste Kapittel
                    </p>
                  </motion.div>

                  {/* Main Content - Card Based */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20">
                    {/* Focus Areas */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <div className="bg-[#1a0826] p-6 sm:p-8 rounded-2xl border border-[#702eff]/30 h-full">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                          <span className="text-3xl">🚀</span> Fokusområder
                        </h4>
                        <div className="grid gap-4">
                          <div className="bg-[#2a1536] p-6 rounded-lg border-l-4 border-[#ffbf94]">
                            <h5 className="text-[#ffbf94] font-bold text-lg mb-2">
                              Embedding-modeller
                            </h5>
                            <p className="text-white/90 text-base leading-relaxed">
                              Utforske avanserte tekstforståelsesmodeller for
                              dypere innsikt
                            </p>
                          </div>
                          <div className="bg-[#2a1536] p-6 rounded-lg border-l-4 border-[#702eff]">
                            <h5 className="text-[#702eff] font-bold text-lg mb-2">
                              Sesongvariasjoner
                            </h5>
                            <p className="text-white/90 text-base leading-relaxed">
                              Håndtere tidsmessige mønstre og sesongbaserte
                              trender
                            </p>
                          </div>
                          <div className="bg-[#2a1536] p-6 rounded-lg border-l-4 border-[#ffbf94]">
                            <h5 className="text-[#ffbf94] font-bold text-lg mb-2">
                              Visuell Analyse
                            </h5>
                            <p className="text-white/90 text-base leading-relaxed">
                              Undersøke hvordan bilder påvirker artikkelytelse
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Stats & Tech */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      {/* Tech Stack */}
                      <div className="bg-[#1a0826] p-6 sm:p-8 rounded-2xl border border-[#ffbf94]/30 h-full flex flex-col">
                        <h5 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                          ⚡ Teknologi Stack
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3 sm:gap-y-6 sm:gap-x-3 flex-1 content-start">
                          {v25TechStack.map((tech) => (
                            <a
                              key={tech.name}
                              href={tech.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-3 bg-[#2a1536] rounded-lg text-[#ffbf94] text-base font-medium border border-[#ffbf94]/40 hover:border-[#ffbf94] hover:bg-[#702eff]/20 transition-all text-center h-fit"
                            >
                              {tech.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Team Section - Separated with visual break */}
          <section className="relative py-20 bg-gradient-to-b from-[#100118] via-[#1a0826] to-[#100118]">
            {/* Visual separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#702eff] to-transparent" />

            <div className="max-w-7xl mx-auto px-4">
              {selectedSemester === "h24" ? (
                <div className="relative">
                  {/* H24 Team - Enhanced Cards Layout */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <h4 className="text-4xl font-bold text-white mb-3">
                      Teamet Bak Prosjektet
                    </h4>
                    <p className="text-white/60 text-lg">
                      Høst 2024 - De som gjorde det mulig
                    </p>
                  </motion.div>

                  {/* Leaders Section with Larger Profile Pictures */}
                  <div className="mb-20">
                    <div className="flex items-center justify-center gap-4 mb-12">
                      <div className="h-px bg-gradient-to-r from-transparent via-[#ffbf94] to-transparent flex-1 max-w-[200px]" />
                      <h5 className="text-[#ffbf94] font-semibold px-4 text-lg">
                        LEDELSE
                      </h5>
                      <div className="h-px bg-gradient-to-r from-transparent via-[#ffbf94] to-transparent flex-1 max-w-[200px]" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                      {h24TeamLeaders.map((member, index) => (
                        <motion.div
                          key={member.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#702eff] to-[#ffbf94] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                          <div className="relative bg-[#100118] border border-[#702eff]/30 rounded-2xl p-8 group-hover:border-[#702eff] transition-all">
                            <div className="flex items-center gap-6">
                              {member.image && (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-32 h-32 rounded-2xl object-cover border-3 border-[#702eff]/50 shadow-lg"
                                />
                              )}
                              <div className="flex-1">
                                <h6 className="text-white font-bold text-xl mb-1">
                                  {member.name}
                                </h6>
                                <p className="text-[#ffbf94] text-base mb-4">
                                  {member.role}
                                </p>
                                <div className="flex gap-3">
                                  {member.github && (
                                    <a
                                      href={member.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-white/60 hover:text-[#702eff] transition-colors"
                                    >
                                      <FaGithub size={24} />
                                    </a>
                                  )}
                                  {member.linkedin && (
                                    <a
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-white/60 hover:text-[#702eff] transition-colors"
                                    >
                                      <FaLinkedin size={24} />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Members Grid with Larger Cards */}
                  <div>
                    <div className="flex items-center justify-center gap-4 mb-12">
                      <div className="h-px bg-gradient-to-r from-transparent via-[#ffbf94] to-transparent flex-1 max-w-[200px]" />
                      <h5 className="text-[#ffbf94] font-semibold px-4 text-lg">
                        MEDLEMMER
                      </h5>
                      <div className="h-px bg-gradient-to-r from-transparent via-[#ffbf94] to-transparent flex-1 max-w-[200px]" />
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                      {h24TeamMembers.map((member, index) => (
                        <motion.div
                          key={member.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                        >
                          <div className="flex items-center gap-4">
                            {member.image && (
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-20 h-20 rounded-xl object-cover border-2 border-white/20 shadow-md"
                              />
                            )}
                            <div className="flex-1">
                              <h6 className="text-white font-semibold text-base mb-1">
                                {member.name}
                              </h6>
                              <p className="text-[#ffbf94] text-sm mb-3">
                                {member.role}
                              </p>
                              <div className="flex gap-3">
                                {member.github && (
                                  <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/40 hover:text-[#ffbf94] transition-colors"
                                  >
                                    <FaGithub size={20} />
                                  </a>
                                )}
                                {member.linkedin && (
                                  <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/40 hover:text-[#ffbf94] transition-colors"
                                  >
                                    <FaLinkedin size={20} />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {/* V25 Team - Enhanced Layout */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <h4 className="text-4xl font-bold text-white mb-3">
                      Teamet Som Tar Over
                    </h4>
                    <p className="text-white/60 text-lg">
                      Vår 2025 - Neste generasjon
                    </p>
                  </motion.div>

                  {/* Leaders & Mentors Row */}
                  <div className="mb-16">
                    <div className="flex items-center justify-center gap-4 mb-12">
                      <div className="h-px bg-gradient-to-r from-transparent via-[#ffbf94] to-transparent flex-1 max-w-[200px]" />
                      <h5 className="text-[#ffbf94] font-semibold px-4 text-lg">
                        LEDELSE & VEILEDNING
                      </h5>
                      <div className="h-px bg-gradient-to-r from-transparent via-[#ffbf94] to-transparent flex-1 max-w-[200px]" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                      {/* Leaders Column */}
                      <div>
                        <h6 className="text-center text-white/60 text-sm mb-4 uppercase tracking-wider">
                          Prosjektledere
                        </h6>
                        <div className="space-y-4">
                          {v25TeamLeaders.map((member, index) => (
                            <motion.div
                              key={member.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="bg-gradient-to-r from-[#702eff]/10 to-transparent p-6 rounded-xl border border-[#702eff]/30 hover:border-[#702eff] transition-all"
                            >
                              <div className="flex items-center gap-5">
                                {member.image && (
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-xl object-cover border-2 border-[#702eff]/30 shadow-lg"
                                  />
                                )}
                                <div className="flex-1">
                                  <h6 className="text-white font-bold text-lg mb-1">
                                    {member.name}
                                  </h6>
                                  <p className="text-[#ffbf94] text-base mb-3">
                                    {member.role}
                                  </p>
                                  <div className="flex gap-3">
                                    {member.github && (
                                      <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/50 hover:text-[#702eff] transition-colors"
                                      >
                                        <FaGithub size={20} />
                                      </a>
                                    )}
                                    {member.linkedin && (
                                      <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/50 hover:text-[#702eff] transition-colors"
                                      >
                                        <FaLinkedin size={20} />
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Mentors Column */}
                      <div>
                        <h6 className="text-center text-white/60 text-sm mb-4 uppercase tracking-wider">
                          Mentorer
                        </h6>
                        <div className="space-y-4">
                          {v25TeamMentors.map((member, index) => (
                            <motion.div
                              key={member.name}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="bg-gradient-to-l from-[#ffbf94]/10 to-transparent p-6 rounded-xl border border-[#ffbf94]/30 hover:border-[#ffbf94] transition-all"
                            >
                              <div className="flex items-center gap-5">
                                {member.image && (
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-xl object-cover border-2 border-[#ffbf94]/30 shadow-lg"
                                  />
                                )}
                                <div className="flex-1">
                                  <h6 className="text-white font-bold text-lg mb-1">
                                    {member.name}
                                  </h6>
                                  <p className="text-[#702eff] text-base mb-3">
                                    {member.role}
                                  </p>
                                  <div className="flex gap-3">
                                    {member.github && (
                                      <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/50 hover:text-[#ffbf94] transition-colors"
                                      >
                                        <FaGithub size={20} />
                                      </a>
                                    )}
                                    {member.linkedin && (
                                      <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/50 hover:text-[#ffbf94] transition-colors"
                                      >
                                        <FaLinkedin size={20} />
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Team Members */}
                  <div className="mt-20">
                    <div className="flex items-center justify-center gap-4 mb-12">
                      <div className="h-px bg-gradient-to-r from-transparent via-[#ffbf94] to-transparent flex-1 max-w-[200px]" />
                      <h5 className="text-[#ffbf94] font-semibold px-4 text-lg">
                        MEDLEMMER
                      </h5>
                      <div className="h-px bg-gradient-to-r from-transparent via-[#ffbf94] to-transparent flex-1 max-w-[200px]" />
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                      {v25TeamMembers.map((member, index) => (
                        <motion.div
                          key={member.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                        >
                          <div className="flex items-center gap-4">
                            {member.image && (
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-20 h-20 rounded-xl object-cover border-2 border-white/20 shadow-md"
                              />
                            )}
                            <div className="flex-1">
                              <h6 className="text-white font-semibold text-base mb-1">
                                {member.name}
                              </h6>
                              <p className="text-[#ffbf94] text-sm mb-3">
                                {member.role}
                              </p>
                              <div className="flex gap-3">
                                {member.github && (
                                  <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/40 hover:text-[#ffbf94] transition-colors"
                                  >
                                    <FaGithub size={20} />
                                  </a>
                                )}
                                {member.linkedin && (
                                  <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/40 hover:text-[#ffbf94] transition-colors"
                                  >
                                    <FaLinkedin size={20} />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Spacer before footer */}
          <div className="h-32" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TV2xCogito;

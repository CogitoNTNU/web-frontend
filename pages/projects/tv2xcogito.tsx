import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TV2xCogito = () => {
  const [selectedSemester, setSelectedSemester] = useState<"h24" | "v25">(
    "h24"
  );

  const handleSemesterChange = (semester: "h24" | "v25") => {
    setSelectedSemester(semester);
    // Scroll to content after state update
    setTimeout(() => {
      const element = document.getElementById("semester-content");
      if (element) {
        const yOffset = -80; // Negative value to stop 80px before the element
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  const h24TeamLeaders = [
    {
      name: "Afras Mansoor",
      role: "Prosjektleder",
      github: "https://github.com/Afrasum",
      linkedin: "https://www.linkedin.com/in/afrasmansoor",
    },
    {
      name: "Kristoffer Nohr Olaisen",
      role: "Prosjektleder",
      github: "https://github.com/Knolaisen",
      linkedin: "https://www.linkedin.com/in/kristoffer-nohr-olaisen-aa620722b",
    },
  ];

  const h24TeamMembers = [
    {
      name: "Alice Zheng",
      role: "Medlem",
      github: "https://github.com/A1ice-Z",
      linkedin: "https://www.linkedin.com/in/alice-z-21b351246/",
    },
    {
      name: "Olivia Tan",
      role: "Medlem",
      github: "https://github.com/heiolivia",
      linkedin: "https://www.linkedin.com/in/oliviatan2002/",
    },
    {
      name: "Håvard Fossdal",
      role: "Medlem",
      github: "https://github.com/HFossdal",
      linkedin: "https://www.linkedin.com/in/hfossdal/",
    },
    {
      name: "Serina Serife Erzengin",
      role: "Medlem",
      github: "https://github.com/serinaerzengin",
      linkedin: "https://www.linkedin.com/in/serina-erzengin-7b9734260/",
    },
    {
      name: "Folke Jernbert",
      role: "Medlem",
      github: "https://github.com/jernbert",
      linkedin: "https://www.linkedin.com/in/folke-jernbert-75b52032a/",
    },
    {
      name: "Maja Austguard",
      role: "Medlem",
      github: "https://github.com/maiahi",
      linkedin: "https://www.linkedin.com/in/maia-austigard-80054132a/",
    },
    {
      name: "Sanne Jamila Olsen",
      role: "Medlem",
      github: "https://github.com/sannejamila",
      linkedin: "https://www.linkedin.com/in/sannejamila/",
    },
  ];

  const v25TeamLeaders = [
    { name: "Eva Stamatovska", role: "Prosjektleder" },
    { name: "Maren Landno", role: "Prosjektleder" },
  ];

  const v25TeamMentors = [
    { name: "Sverre Nystad", role: "Mentor" },
    { name: "Afras Mansoor", role: "Mentor" },
  ];

  const v25TeamMembers = [
    { name: "Adrian Jacobsen Lund", role: "Medlem" },
    { name: "Arta Osmani", role: "Medlem" },
    { name: "Håvard Daleng", role: "Medlem" },
    { name: "Mari Hove Gusdal", role: "Medlem" },
    { name: "Sebastian Riibe Berthelsen", role: "Medlem" },
    { name: "Yatavi Suresh", role: "Medlem" },
  ];

  return (
    <>
      <Head>
        <title>TV2 x Cogito - Cogito NTNU</title>
      </Head>
      <Navbar page="/" onlyLogo />
      <div className="bg-[#100118] min-h-screen">
        {/* Hero Section */}
        <header className="relative tablet:h-[480px] h-[350px] w-full bg-gradient-to-br from-[#702eff] to-[#100118] overflow-hidden">
          <div className="absolute inset-0 bg-[#100118] opacity-20"></div>

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
                  className="tablet:text-5xl text-3xl font-bold mb-2"
                >
                  TV2 x Cogito
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="tablet:text-xl text-sm font-light"
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
                className="absolute right-10 top-10 w-32 h-32 bg-[#ffbf94] opacity-20 rounded-lg rotate-12"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute right-40 bottom-20 w-40 h-40 bg-[#ffbf94] opacity-20 rounded-lg -rotate-12"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute right-20 top-1/2 w-24 h-24 bg-[#ffbf94] opacity-20 rounded-lg rotate-45"
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-12">
          {/* Project Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Om Prosjektet
            </h2>
            <p className="text-white opacity-90 text-lg max-w-4xl mx-auto leading-relaxed mb-4">
              Dette er et samarbeidsprosjekt mellom Cogito NTNU og TV2 som har
              pågått over to semestre.
            </p>
            <p className="text-white opacity-90 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              Prosjektet utforsker hvordan kunstig intelligens kan hjelpe TV2.no
              med å ta bedre redaksjonelle valg ved å utnytte store mengder data
              om leseratferd og artikkelprestasjon. Målet er å bruke
              maskinlæring for å analysere artikkeldata og gi nyttige innsikter
              som hjelper TV2 med å forstå hva som engasjerer leserne mest.
            </p>

            {/* Semester Selector - moved inside the same section */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleSemesterChange("h24")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedSemester === "h24"
                    ? "bg-[#702eff] text-white"
                    : "bg-[#100118] text-white opacity-70 hover:opacity-100 border border-[#702eff]"
                }`}
              >
                Høst 2024
              </button>
              <button
                onClick={() => handleSemesterChange("v25")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedSemester === "v25"
                    ? "bg-[#702eff] text-white"
                    : "bg-[#100118] text-white opacity-70 hover:opacity-100 border border-[#702eff]"
                }`}
              >
                Vår 2025
              </button>
            </div>
          </motion.section>

          {/* Semester Content */}
          <div id="semester-content">
            {selectedSemester === "h24" ? (
              <motion.div
                key="h24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* H24 Content */}
                <section className="mb-16">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    TV2 Article Predictor
                  </h3>
                  <div className="bg-[#702eff] bg-opacity-50 border border-[#702eff] rounded-lg p-8 mb-8">
                    <p className="text-white opacity-90 mb-6">
                      I høstsemesteret 2024 utviklet teamet TV2 Article
                      Predictor - et system for å analysere og predikere hvor
                      godt nye artikler kommer til å prestere basert på
                      historisk data fra TV2.no.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex gap-3 flex-wrap">
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          Docker
                        </span>
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          Scikit-learn
                        </span>
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          Keras
                        </span>
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          NLTK
                        </span>
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          spaCy
                        </span>
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          Hugging Face
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* H24 Team */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-6 text-center">
                      Team Høst 2024
                    </h4>

                    {/* Project Leaders */}
                    <div className="mb-6">
                      <h5 className="text-lg font-medium text-[#ffbf94] mb-4 text-center">
                        Prosjektledere
                      </h5>
                      <div className="grid tablet:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {h24TeamLeaders.map((member) => (
                          <div
                            key={member.name}
                            className="bg-[#702eff] bg-opacity-50 border border-[#702eff] p-4 rounded-lg text-center"
                          >
                            <p className="text-white font-medium mb-3">
                              {member.name}
                            </p>
                            <div className="flex justify-center gap-3">
                              {member.github && (
                                <a
                                  href={member.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white hover:text-[#ffbf94] transition-colors"
                                >
                                  <FaGithub size={20} />
                                </a>
                              )}
                              {member.linkedin && (
                                <a
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white hover:text-[#ffbf94] transition-colors"
                                >
                                  <FaLinkedin size={20} />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Team Members */}
                    <div>
                      <h5 className="text-lg font-medium text-[#ffbf94] mb-4 text-center">
                        Medlemmer
                      </h5>
                      <div className="flex justify-center">
                        <div className="grid tablet:grid-cols-3 grid-cols-2 gap-4 tablet:max-w-3xl">
                          {h24TeamMembers.map((member, index) => (
                            <div
                              key={member.name}
                              className={`bg-[#702eff] bg-opacity-40 border border-[#702eff] border-opacity-30 p-4 rounded-lg text-center ${
                                index === h24TeamMembers.length - 1 &&
                                h24TeamMembers.length % 3 === 1
                                  ? "tablet:col-start-2"
                                  : ""
                              }`}
                            >
                              <p className="text-white font-medium mb-3">
                                {member.name}
                              </p>
                              <div className="flex justify-center gap-3">
                                {member.github && (
                                  <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ffbf94] transition-colors"
                                  >
                                    <FaGithub size={18} />
                                  </a>
                                )}
                                {member.linkedin && (
                                  <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ffbf94] transition-colors"
                                  >
                                    <FaLinkedin size={18} />
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="h-20"></div>
              </motion.div>
            ) : (
              <motion.div
                key="v25"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* V25 Content */}
                <section className="mb-16">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    Vår 2025 - Pågående
                  </h3>
                  <div className="bg-[#702eff] bg-opacity-50 border border-[#702eff] rounded-lg p-8 mb-8">
                    <p className="text-white opacity-90 mb-6">
                      Prosjektet fortsetter i vårsemesteret 2025 med et nytt
                      team som bygger videre på arbeidet fra forrige semester.
                      Målet er å videreutvikle og forbedre AI-systemet for enda
                      bedre prediksjoner og innsikter.
                    </p>

                    <p className="text-white opacity-90 mb-6">
                      Dette semesteret har teamet et ekstra fokus på å utforske
                      embedding-modeller for bedre tekstforståelse, utvikle
                      modeller som håndterer sesongvariasjoner mer effektivt,
                      og undersøke hvordan bilder påvirker artiklers ytelse.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex gap-3 flex-wrap">
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          Docker
                        </span>
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          Scikit-learn
                        </span>
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          Keras
                        </span>
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          NLTK
                        </span>
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          spaCy
                        </span>
                        <span className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]">
                          Hugging Face
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center gap-2 text-[#ffbf94]">
                      <div className="w-2 h-2 bg-[#ffbf94] rounded-full animate-pulse"></div>
                      <span>Prosjektet pågår</span>
                    </div>
                  </div>

                  {/* V25 Team */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-6 text-center">
                      Team Vår 2025
                    </h4>

                    {/* Project Leaders */}
                    <div className="mb-6">
                      <h5 className="text-lg font-medium text-[#ffbf94] mb-4 text-center">
                        Prosjektledere
                      </h5>
                      <div className="grid tablet:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {v25TeamLeaders.map((member) => (
                          <div
                            key={member.name}
                            className="bg-[#702eff] bg-opacity-50 border border-[#702eff] p-4 rounded-lg text-center"
                          >
                            <p className="text-white font-medium">
                              {member.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mentors */}
                    <div className="mb-6">
                      <h5 className="text-lg font-medium text-[#ffbf94] mb-4 text-center">
                        Mentorer
                      </h5>
                      <div className="grid tablet:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {v25TeamMentors.map((member) => (
                          <div
                            key={member.name}
                            className="bg-[#702eff] bg-opacity-40 border border-[#702eff] border-opacity-30 p-4 rounded-lg text-center"
                          >
                            <p className="text-white font-medium">
                              {member.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Team Members */}
                    <div>
                      <h5 className="text-lg font-medium text-[#ffbf94] mb-4 text-center">
                        Medlemmer
                      </h5>
                      <div className="grid tablet:grid-cols-3 grid-cols-2 gap-4">
                        {v25TeamMembers.map((member) => (
                          <div
                            key={member.name}
                            className="bg-[#702eff] bg-opacity-10 border border-[#702eff] border-opacity-30 p-4 rounded-lg text-center"
                          >
                            <p className="text-white font-medium">
                              {member.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
                <div className="h-20"></div>
              </motion.div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TV2xCogito;


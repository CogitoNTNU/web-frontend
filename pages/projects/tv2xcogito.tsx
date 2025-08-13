import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <motion.div 
    className="bg-[#702eff] bg-opacity-20 backdrop-blur-sm border border-[#702eff] p-4 rounded-lg hover:bg-opacity-30 transition-all duration-300 group"
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h5 className="text-white font-semibold mb-1 group-hover:text-[#ffbf94] transition-colors">{member.name}</h5>
    <p className="text-[#ffbf94] text-sm mb-3">{member.role}</p>
    <div className="flex gap-3">
      {member.github && (
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#ffbf94] transition-colors transform hover:scale-110"
        >
          <FaGithub size={20} />
        </a>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#ffbf94] transition-colors transform hover:scale-110"
        >
          <FaLinkedin size={20} />
        </a>
      )}
    </div>
  </motion.div>
);

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
    },
    {
      name: "Kristoffer Nohr Olaisen",
      role: "Prosjektleder",
      github: "https://github.com/Knolaisen",
      linkedin: "https://www.linkedin.com/in/kristoffer-nohr-olaisen-aa620722b",
    },
  ];

  const h24TeamMembers: TeamMember[] = [
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

  const v25TeamLeaders: TeamMember[] = [
    {
      name: "Eva Stamatovska",
      role: "Prosjektleder",
      github: "https://github.com/stamatovskaeva",
      linkedin: "https://www.linkedin.com/in/evastamatovska/",
    },
    {
      name: "Maren Landno",
      role: "Prosjektleder",
      github: "https://github.com/marenlan",
      linkedin: "https://www.linkedin.com/in/maren-landro-420535249/",
    },
  ];

  const v25TeamMentors: TeamMember[] = [
    {
      name: "Sverre Nystad",
      role: "Mentor",
      github: "https://github.com/SverreNystad",
      linkedin: "https://www.linkedin.com/in/sverre-nystad/",
    },
    {
      name: "Afras Mansoor",
      role: "Mentor",
      github: "https://github.com/Afrasum",
      linkedin: "https://www.linkedin.com/in/afrasmansoor",
    },
  ];

  const h24TechStack = [
    "Docker",
    "Scikit-learn",
    "Keras",
    "NLTK",
    "spaCy",
    "Hugging Face",
  ];

  const v25TechStack = [
    "Docker",
    "Scikit-learn",
    "Keras",
    "NLTK",
    "spaCy",
    "Hugging Face",
  ];

  const v25TeamMembers: TeamMember[] = [
    {
      name: "Adrian Jacobsen Lund",
      role: "Medlem",
      github: "https://github.com/adrianjlundd",
      linkedin: "https://www.linkedin.com/in/adrian-jacobsen-lund-818a41232/",
    },
    {
      name: "Arta Osmani",
      role: "Medlem",
      github: "https://github.com/Artaosmani",
      linkedin: "https://www.linkedin.com/in/arta-osmani-569292265/",
    },
    {
      name: "Håvard Daleng",
      role: "Medlem",
      github: "https://github.com/MrMarHVD",
      linkedin: "https://www.linkedin.com/in/håvard-johannes-daleng-2266b7248/",
    },
    {
      name: "Mari Hove Gusdal",
      role: "Medlem",
      github: "https://github.com/MariHGU",
      linkedin: "https://www.linkedin.com/in/mari-hove-gusdal-980395313/",
    },
    {
      name: "Sebastian Riibe Berthelsen",
      role: "Medlem",
      github: "https://github.com/sebastianrb05",
      linkedin: "https://www.linkedin.com/in/sebastianriibeberthelsen/",
    },
    {
      name: "Yatavi Suresh",
      role: "Medlem",
      github: "https://github.com/yada0403",
      linkedin: "https://www.linkedin.com/in/yatavi-suresh-62149534a/",
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
                  Dette er et samarbeidsprosjekt mellom Cogito NTNU og TV2 som har
                  pågått over to semestre.
                </p>
                <p className="text-white opacity-90 text-lg max-w-4xl mx-auto leading-relaxed mb-16 drop-shadow-lg">
                  Prosjektet utforsker hvordan kunstig intelligens kan hjelpe TV2.no
                  med å ta bedre redaksjonelle valg ved å utnytte store mengder data
                  om leseratferd og artikkelprestasjon. Målet er å bruke
                  maskinlæring for å analysere artikkeldata og gi nyttige innsikter
                  som hjelper TV2 med å forstå hva som engasjerer leserne mest.
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

          {/* Semester Content - Integrated into main */}
          <section id="semester-content" className="px-4 py-12 max-w-7xl mx-auto">
            {selectedSemester === "h24" ? (
              <div>
                {/* H24 Content */}
                <section className="mb-16">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    TV2 Article Predictor
                  </motion.h3>
                  <motion.div 
                    className="bg-[#702eff] bg-opacity-20 backdrop-blur-sm border border-[#702eff] rounded-lg p-8 mb-8 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-40 h-40 bg-[#ffbf94] rounded-full blur-3xl" />
                      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#702eff] rounded-full blur-3xl" />
                    </div>
                    
                    <p className="text-white opacity-90 mb-6 relative z-10">
                      I løpet av høstsemesteret 2024 utviklet teamet TV2 Article
                      Predictor – et system som analyserer og predikerer hvordan
                      nye artikler sannsynligvis vil prestere, basert på
                      historiske data fra TV2.no. I løpet av ett semester
                      leverte gruppen en dockerisert tjeneste som lot TV2 laste
                      opp en artikkel og motta prediksjoner om forventet ytelse,
                      samt forklaringer på hvorfor. På grunn av
                      konfidensialitetsavtale (NDA) kan vi dessverre ikke dele
                      ytterligere detaljer om resultatene.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex gap-3 flex-wrap">
                        {h24TechStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>


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
                          <TeamMemberCard key={member.name} member={member} />
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
                          {h24TeamMembers.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <div>
                {/* V25 Content */}
                <section className="mb-16">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Vår 2025
                  </motion.h3>
                  <motion.div 
                    className="bg-[#702eff] bg-opacity-20 backdrop-blur-sm border border-[#702eff] rounded-lg p-8 mb-8 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-[#ffbf94] rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#702eff] rounded-full blur-3xl" />
                    </div>
                    
                    <p className="text-white opacity-90 mb-6 relative z-10">
                      Prosjektet fortsetter i vårsemesteret 2025 med et nytt
                      team som bygger videre på arbeidet fra forrige semester.
                      Målet er å videreutvikle og forbedre AI-systemet for enda
                      bedre prediksjoner og innsikter.
                    </p>

                    <p className="text-white opacity-90 mb-6">
                      Dette semesteret har teamet et ekstra fokus på å utforske
                      embedding-modeller for bedre tekstforståelse, utvikle
                      modeller som håndterer sesongvariasjoner mer effektivt, og
                      undersøke hvordan bilder påvirker artiklers ytelse.
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex gap-3 flex-wrap">
                        {v25TechStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-[#ffbf94] bg-opacity-20 border border-[#ffbf94] px-3 py-1 rounded text-[#ffbf94]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

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
                          <TeamMemberCard key={member.name} member={member} />
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
                          <TeamMemberCard key={member.name} member={member} />
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
                          <TeamMemberCard key={member.name} member={member} />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TV2xCogito;

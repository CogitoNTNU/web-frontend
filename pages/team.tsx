"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import RadioButton from "../components/Buttons/RadioButton";
import Member from "../components/Member/Member";
import { MemberType } from "../lib/types";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

//Images
import team from "../public/Team/Alle.jpg";
import sverreogolav from "../public/Team/SverreOgOlav.jpg";
import { useGetMembers } from "../hooks/useGetMembers";

const Team = () => {
  const radioButtons = [
    "Alle Medlemmer",
    "Styret",
    "Prosjektledere",
    "Web",
    "Loquire",
  ];
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const innerPages = [
    {
      name: "Styret",
      description:
        "Styret har ansvar for organisasjonens daglige drift og styrer både prosjektkvelder og kurskvelder",
    },
    {
      name: "Prosjektledere",
      description:
        "Prosjektledere har ansvar å passe på og styre deres prosjekteam.",
    },
    {
      name: "Web",
      description:
        "Web gruppen står bak det tekniske i Cogito. Mesteparten av arbeidet går til utivikling av nettsiden.",
    },
    {
      name: "Loquire",
      description:
        "Loquire er Cogito's mest engasjerte. Disse skal holde sluttpresentasjonen vår Cogito AI-Loquire",
    },
  ];

  const [currentClicked, setCurrentClicked] =
    useState<string>("Alle Medlemmer");

  const { data: members } = useGetMembers({ member_type: currentClicked });

  useEffect(() => {
    if (currentClicked == "Alle Medlemmer") {
      return;
    }

    const pageObject = innerPages.filter((x) => x.name == currentClicked)[0];
    setTitle(pageObject.name);
    setDesc(pageObject.description);
  }, [members]);

  return (
    <>
      <Head>
        <title>Medlemmer - Cogito NTNU</title>
      </Head>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.0],
        }}
        className="relative overflow-hidden"
      >
        <div className="relative w-full z-30 flex-none phone:h-[720px] h-[660px]">
          <div className="absolute w-full h-full bg-gradient-to-b to-transparent from-blue-dark from-0% to-30% z-50"></div>
          <Image
            className="absolute inset-0 w-full h-full object-cover hover:shadow-inner shadow-2xl tablet:block hidden"
            src={team}
            alt={"banner"}
          />
          <Image
            className="absolute inset-0 w-full h-full object-cover hover:shadow-inner shadow-2xl tablet:hidden block"
            src={sverreogolav}
            alt={"banner"}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.0],
          }}
          className="absolute z-50 w-full flex items-end justify-center phone:top-[700px] top-[650px]"
        >
          <p className="bg-gray-default px-8 rounded-2xl absolute font-bold text-white laptop:text-[80px] tablet:text-[70px] text-[42px] tracking-wid drop-shadow-3xl">
            COGITO 2024
          </p>
        </motion.div>
        <div className="relative left-0 right-0 bottom-0 flex items-center justify-center z-40">
          <div className="bg-gray-lighter pt-[20px] tablet:px-[8%] px-[4%] rounded-b-3xl h-fit min-h-[700px] pb-[80px] w-[90%]">
            <div className="tablet:pt-4 tablet:pb-8 pb-4 flex justify-center tablet:gap-4 gap-2 flex-wrap w-full">
              {radioButtons.map((name) => (
                <RadioButton
                  key={name}
                  text={name}
                  currentClicked={currentClicked}
                  onClick={() => setCurrentClicked(name)}
                />
              ))}
            </div>
            {currentClicked == "Alle Medlemmer" ? (
              <div>
                {innerPages.map((page) => (
                  <div key={page.name} className="py-4">
                    <div className="text-blue-dark w-full text-center phone:py-2 py-1">
                      <p className="font-semibold tablet:text-[40px] text-[30px]">
                        {page.name.toUpperCase()}
                      </p>
                      <p className="pb-4 tablet:text-[16px] text-[13px]">
                        {page.description}
                      </p>
                    </div>
                    <div className="flex justify-center gap-10 py-2 flex-wrap">
                      {members
                        ?.filter((member) =>
                          member.category.includes(page.name)
                        )
                        .map((member: MemberType) => (
                          <Member
                            key={member.name}
                            name={member.name}
                            title={member.title}
                            imageURL={member.image}
                            linkedinURL={member.linkedIn}
                            mailURL={member.email}
                            githubURL={member.github}
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-4">
                <div className=" text-blue-dark w-full text-center py-2">
                  <p className="font-semibold text-[40px]">
                    {title.toUpperCase()}
                  </p>
                  <p className="pb-4">{desc}</p>
                </div>
                <div className="flex justify-center gap-10 py-2 flex-wrap">
                  {members?.map((member: MemberType) => (
                    <Member
                      key={member.name}
                      name={member.name}
                      title={member.title}
                      imageURL={member.image}
                      linkedinURL={member.linkedIn}
                      mailURL={member.email}
                      githubURL={member.github}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default Team;

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
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const radioButtons = ["Alle Medlemmer", "Styret", "Prosjektmedlemmer", "Web"];
  const projectButtons = [
    "Bedriftsammarbeid",
    "Cogitron",
    "Deeptactics",
    "Diffusion Models",
    "Infor",
    "SudokuAI",
    "TetrisAI",
    "Transformers",
    "TutorAI",
    "Training Planner",
  ];
  const projectMetaData = [
    { title: projectButtons[0], leaderCount: 2 },
    { title: projectButtons[1], leaderCount: 2 },
    { title: projectButtons[2], leaderCount: 2 },
    { title: projectButtons[3], leaderCount: 1 },
    { title: projectButtons[4], leaderCount: 2 },
    { title: projectButtons[5], leaderCount: 1 },
    { title: projectButtons[6], leaderCount: 1 },
    { title: projectButtons[7], leaderCount: 2 },
    { title: projectButtons[8], leaderCount: 3 },
    { title: projectButtons[9], leaderCount: 1 },
  ];
  const pagesMetaData = [
    {
      name: "Styret",
      description:
        "Styret har ansvar for organisasjonens daglige drift og styrer både prosjektkvelder og kurskvelder",
    },
    {
      name: "Prosjektmedlemmer",
      description:
        "Prosjektmedlemenne er kjernen i alt Cogito gjør. De står bak alle prosjekter produsert av Cogito.",
    },
    {
      name: "Web",
      description:
        "Web gruppen står bak det tekniske i Cogito. Mesteparten av arbeidet går til utivikling av nettsiden.",
    },
  ];

  const [currentClicked, setCurrentClicked] =
    useState<string>("Alle Medlemmer");

  const [currentProject, setCurrentProject] = useState<string>(
    projectButtons[0]
  );
  const [rawMembers, setRawMembers] = useState<MemberType[]>([]);
  const [members, setMembers] = useState<MemberType[]>([]);
  const { data: membersData } = useGetMembers({ member_type: currentClicked });

  useEffect(() => {
    if (membersData == undefined) {
      return;
    }
    setRawMembers(membersData);
  }, [membersData]);

  useEffect(() => {
    if (currentClicked == "Prosjektmedlemmer") {
      const filteredMembers = rawMembers?.filter((x) =>
        x.category.includes(currentProject)
      );
      const project = projectMetaData.filter(
        (x) => x.title == currentProject
      )[0];
      filteredMembers?.forEach((member, index) => {
        if (index < project.leaderCount) {
          member.title = "Prosjektleder";
        }
      });
      setMembers(filteredMembers);
    } else {
      setMembers(rawMembers);
    }

    if (currentClicked == "Alle Medlemmer") {
      return;
    }

    const pageObject = pagesMetaData.filter((x) => x.name == currentClicked)[0];
    setTitle(pageObject.name);
    setDesc(pageObject.description);
  }, [rawMembers, currentProject]);

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
                {pagesMetaData.map((page) => (
                  <div key={page.name} className="py-4">
                    <div className="text-blue-dark w-full text-center phone:py-2 py-1">
                      <p className="font-semibold tablet:text-[40px] text-[25px]">
                        {page.name.toUpperCase()}
                      </p>
                      <p className="pb-4 tablet:text-[16px] text-[13px]">
                        {page.description}
                      </p>
                    </div>
                    {page.name != "Prosjektmedlemmer" ? (
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
                    ) : (
                      <div>
                        {projectButtons.map((project) => (
                          <div className="pb-8">
                            <div className="text-blue-dark w-full text-center phone:py-2 py-1">
                              <p className="font-medium tablet:text-[34px] text-[20px]">
                                {project.toUpperCase()}
                              </p>
                            </div>
                            <div className="flex justify-center gap-10 py-4 flex-wrap">
                              {members
                                ?.filter(
                                  (member) =>
                                    member.category.includes(page.name) &&
                                    member.category.includes(project)
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
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <div className="text-blue-dark w-full text-center py-2">
                  <p className="font-semibold tablet:text-[40px] text-[25px]">
                    {title.toUpperCase()}
                  </p>
                  <p className="pb-4 tablet:text-[16px] text-[13px]">{desc}</p>
                </div>
                {currentClicked == "Prosjektmedlemmer" && (
                  <div className="pt-1 tablet:pb-8 pb-4 tablet:px-[2%] flex justify-center tablet:gap-4 gap-2 flex-wrap w-full">
                    {projectButtons.map((name) => (
                      <RadioButton
                        key={name}
                        text={name}
                        small={true}
                        currentClicked={currentProject}
                        onClick={() => setCurrentProject(name)}
                      />
                    ))}
                  </div>
                )}
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

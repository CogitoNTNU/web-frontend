"use client";

import Head from "next/head";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import Button from "../components/Buttons/Button";
import Image from "next/image";
import { useState } from "react";

//Images
// import NTNU from "../public/Logos/NTNU.png";
// import NAIL from "../public/Logos/norwegian_open_ai_lab.png";
import AboutUsBG from "../public/Team/AboutUsBG.png";
import RadioButton from "../components/Buttons/RadioButton";
import { Cogito } from "../components/AboutUs/General/Cogito";
import { Privacy } from "../components/AboutUs/General/Privacy";
import { SponsorPortal } from "../components/AboutUs/General/SponsorProtal";

type Topics = "Generelt" | "Organisasjonen" | "For Bedrifter";
const mainButtons: Topics[] = ["Generelt", "Organisasjonen", "For Bedrifter"];
const generalButtons = ["Info om Cogito", "Personvern", "Sponsor Portal"];

const About = () => {
  const [topic, setTopic] = useState<Topics>("Generelt");
  const [subTopic, setSubTopic] = useState<string>("Info om Cogito");

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const router = useRouter();

  const homeAndScrollToBottom = async () => {
    await router.push("/");
    await timeout(1000);
    document.getElementById("part-2").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Om oss - Cogito NTNU</title>
      </Head>
      <main className="relative overflow-hidden">
        <div className="flex items-center justify-center phone:pt-[0px] flex-col">
          <div
            data-name="Header"
            className="relative w-full z-30 flex-none h-[720px]"
          >
            <div className="absolute w-full h-full bg-gradient-to-b to-transparent from-blue-dark from-0% to-30% z-50"></div>
            <div>
              <Image
                src={AboutUsBG}
                alt="Bilde av teamet"
                placeholder="blur"
                quality={100}
                priority
                className="absolute inset-0 w-full h-full object-cover shadow-2xl"
              />
              <div
                data-name="Title"
                className="absolute z-50 w-full flex items-end justify-center phone:top-[700px] top-[650px]"
              >
                <p className="bg-gray-default px-16 rounded-2xl absolute font-bold text-white laptop:text-[80px] tablet:text-[70px] text-[42px] tracking-wid drop-shadow-3xl">
                  {topic}
                </p>
              </div>
            </div>
          </div>
          <div
            data-name="white-box"
            className="relative w-4/5 z-30 h-[180px] bg-slate-50 col-auto flex flex-col rounded-2xl shadow-2xl"
          >
            <div
              data-name="Main Buttons"
              className="tablet:pt-4 tablet:pb-2 pb-1 flex justify-center tablet:gap-4 gap-2 flex-wrap w-full"
            >
              {mainButtons.map((name) => (
                <RadioButton
                  key={name}
                  text={name}
                  currentClicked={topic}
                  onClick={() => setTopic(name)}
                />
              ))}
            </div>
            {topic === "Generelt" && (
              <div
                data-name="SubTopic Buttons"
                className="tablet:pt-1 tablet:pb-4 pb-2 flex justify-center tablet:gap-2 gap-1 flex-wrap w-full"
              >
                {generalButtons.map((name) => (
                  <RadioButton
                    key={name}
                    text={name}
                    currentClicked={subTopic}
                    onClick={() => setSubTopic(name)}
                  />
                ))}
              </div>
            )}
          </div>
          {topic === "Generelt" && subTopic === generalButtons[0] && <Cogito />}
          {topic === "Generelt" && subTopic === generalButtons[1] && (
            <Privacy />
          )}
          {topic === "Generelt" && subTopic === generalButtons[2] && (
            <SponsorPortal />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;

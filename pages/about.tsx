"use client";

import Head from "next/head";
import Footer from "../components/Footer/Footer";

import Image from "next/image";
import { useState } from "react";

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

  return (
    <>
      <Head>
        <title>Om oss - Cogito NTNU</title>
      </Head>
      <main className="relative overflow-hidden">
        <div className="flex items-center justify-center pt-[0px] flex-col">
          <div
            data-name="Header"
            className="relative w-full z-30 flex-none h-80 phone:h-[400px] tablet:h-[500px] laptop:h-[600px] desktop:h-[660px]"
          >
            <div
              data-name="Gives that blur effect on the image"
              className="absolute w-full h-full bg-gradient-to-b to-transparent from-blue-dark from-0% to-30% z-50"
            ></div>
            <div className="flex justify-center">
              <Image
                src={AboutUsBG}
                alt="Bilde av teamet"
                placeholder="blur"
                quality={100}
                priority
                className="absolute inset-0 w-full h-full object-cover shadow-2xl"
              />
              <h1
                data-name="Title"
                className="absolute z-50 flex bg-gray-default bottom-[20%] text-white p-3 text-4xl font-bold rounded-xl 
                shadow-2xl tablet:bottom-[16%] tablet:text-5xl tablet:p-4 laptop:bottom-[12%] laptop:text-6xl laptop:p-5 
                desktop:bottom-[10%] desktop:text-7xl desktop:p-6"
              >
                {topic}
              </h1>
            </div>
          </div>
          <div
            data-name="white-box"
            className={`relative w-4/5 tablet:w-2/3 desktop:w-1/2 z-30 h-[180px] tablet:h-[260px] laptop:h-[160px] ${
              topic === "Generelt"
                ? "desktop:h-[200px]"
                : "desktop:h-[160px] h-[100px] tablet:h-[150px]"
            } bg-slate-50 col-auto flex flex-col rounded-2xl shadow-2xl`}
          >
            <div
              data-name="Main Buttons"
              className="tablet:pt-4 tablet:pb-2 pb-1 pt-1 flex justify-center tablet:gap-4 gap-2 flex-wrap w-full"
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
                className="tablet:pt-1 tablet:pb-4 pb-1 pt-1 flex justify-center tablet:gap-2 gap-1 flex-wrap w-full"
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
          {topic === "Generelt" && subTopic === generalButtons[0] && (
            <div className="flex flex-col items-center justify-center w-full">
              <Cogito />
            </div>
          )}
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

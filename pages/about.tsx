"use client";

import Head from "next/head";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import Button from "../components/Buttons/Button";
import Image from "next/image";
import { Topics } from "../lib/types";
import { useState } from "react";

//Images
// import NTNU from "../public/Logos/NTNU.png";
// import NAIL from "../public/Logos/norwegian_open_ai_lab.png";
import AboutUsBG from "../public/Team/AboutUsBG.png";

const About = () => {
  const [topic, setTopic] = useState<Topics>("Generelt");

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
        <div className="flex items-center justify-center phone:pt-[0px]">
          <div className="relative w-full z-30 flex-none h-[720px]">
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
              <div className="absolute z-50 w-full flex items-end justify-center phone:top-[700px] top-[650px]">
                <p className="bg-gray-default px-16 rounded-2xl absolute font-bold text-white laptop:text-[80px] tablet:text-[70px] text-[42px] tracking-wid drop-shadow-3xl">
                  {topic}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import TextButton from "../../components/Buttons/TextButton";
import Link from "next/link";
import { motion } from "motion/react";

interface HomeMenuProps {
  toggleSchedule: () => void;
}

const HomeMenu = ({ toggleSchedule }: HomeMenuProps) => {
  const vodLink = "https://www.youtube.com/channel/UCqhmgLLW6pPo9r9nFwlzXPA";

  return (
    <>
      <div className="md:block hidden h-full">
        <div className="w-full flex justify-end py-2 gap-2 group/t">
          <TextButton onClick={() => toggleSchedule()} text={"SCHEDULE"} />
          <Link href={vodLink}>
            <TextButton text={"WATCH VOD"} />
          </Link>
        </div>
        <div className="w-full h-full">
          <p className="text-white md:text-[54px] text-[20px] glow:text-blue-default font-extralight tracking-wider">
            <span className="font-medium">YOU</span> ARE{" "}
            <span className="font-medium">INVITED</span>
          </p>
          <div className="w-full h-0.5 glow:bg-white" />
          <p className="pt-2 text-gray tracking-wider text-[19px] glow:text-white">
            READY TO SEE NTNU’S TOP AI TALENT IN ACTION?
          </p>
        </div>
        <div className="relative h-full flex items-end justify-end w-full ">
          <p className="animate-gradientshift bg-linear-to-r from-blue-default from-20% to-white relative bg-clip-text font-medium md:text-[22px] text-[10px] tracking-wide inline-block text-transparent">
            PROJECT PRESENTATION <span className="font-light">EVENT</span>
          </p>
        </div>
      </div>

      <div className="md:hidden block">
        <div className="absolute z-0 scale-[100%] pointer-events-none">
          <video className="videoTag" autoPlay loop muted playsInline>
            <source src="/ProjectPresentation/Motion2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex justify-center items-center h-screen w-full pb-[200px]">
          <div className="w-fit text-center">
            <p className="text-white md:text-[54px] text-[30px] font-extralight tracking-wider">
              <span className="font-medium">YOU</span> ARE{" "}
              <span className="font-medium">INVITED</span>
            </p>
            <div className="w-full h-0.5 bg-white" />
            <p className="pt-2 text-gray tracking-wider text-[11px] text-white">
              READY TO SEE NTNU’S TOP AI TALENT IN ACTION?
            </p>
            <div className="w-full flex justify-center py-2 gap-2 ">
              <TextButton onClick={() => toggleSchedule()} text={"SCHEDULE"} />
              <Link href={vodLink}>
                <TextButton text={"WATCH VOD"} />
              </Link>
            </div>
            <div className="relative h-full flex items-end justify-center w-full top-[350px]">
              <p className="animate-gradientshift bg-linear-to-r from-blue-default from-20% to-white relative bg-clip-text font-medium text-[14px] tracking-wide inline-block text-transparent">
                PROJECT PRESENTATION <span className="font-light">EVENT</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Schedule = ({ toggleSchedule }: HomeMenuProps) => {
  return (
    <>
      <TextButton onClick={() => toggleSchedule()} text={"GO BACK"} />
      <motion.div
        initial={{ x: 200 }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.0],
        }}
        animate={{ x: 0 }}
        exit={{ x: 200 }}
        className="text-center"
      >
        <p className="bg-linear-to-r from-blue-default from-20% to-white relative bg-clip-text font-medium md:text-[60px] text-[30px] tracking-wide inline-block text-transparent">
          THE <span className="font-regular">SCHEDULE</span>
        </p>
      </motion.div>
      <div className="w-full h-0.5 bg-white mb-4" />
      <div className="md:pb-0 pb-[200px]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.0],
          }}
          animate={{ x: 0, opacity: 100 }}
          exit={{ opacity: 0 }}
        >
          <GlowCapture>
            <Glow className="w-full h-full flex justify-center md:text-[22px] text-[10px]">
              <p className="text-white leading-[35px] glow:text-blue-light/50">
                17:00 - 17:15 Welcome <br /> 17:20 - 17:30 Diffusion <br />{" "}
                17:35 - 17:45 Infor <br /> 17:50 - 18:00 TutorAI <br /> 18:00 -
                18:15 Pause <br /> 18:15 - 18:25 TrainingAI <br /> 18:30 - 18:40
                TetrisAI
              </p>
              <div className="md:h-60 h-[100px] w-0.5 mx-8 bg-white glow:text-blue-light" />
              <p className="text-white leading-[35px] glow:text-blue-light/50">
                18:45 - 18:55 DeepTactics <br /> 18:55 - 19:40 Food <br /> 19:40
                - 19:50 WePost <br /> 19:55 - 20:05 Cogitron <br /> 20:10 -
                20:20 SudokuAI <br /> 20:20 - 21:00 Chatting
              </p>
            </Glow>
          </GlowCapture>
        </motion.div>
      </div>
    </>
  );
};

const Home = () => {
  const [showSchedule, setShowSchedule] = useState<boolean>(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  return (
    <>
      <main className="w-screen h-screen bg-black-dark overflow-hidden">
        <div className="md:block hidden">
          <div className="absolute">
            <Image
              className="tablet:w-[90px] w-20"
              src="/.svg"
              alt="logo"
              width={80}
              height={80}
            />
          </div>
          <div className="absolute z-0 scale-[300%] md:block hidden">
            <video className="videoTag" autoPlay loop muted>
              <source src="/ProjectPresentation/Motion2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute w-full h-full">
            {ready && (
              <Particles
                className="absolute top-[200px]"
                id="tsparticles"
                options={{
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: { enable: true },
                    },
                    modes: {
                      push: {
                        quantity: 2,
                      },
                      repulse: {
                        distance: 5,
                        duration: 0.2,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 200,
                      enable: true,
                      opacity: 0.35,
                      width: 1.5,
                    },
                    move: {
                      direction: "top",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: true,
                      speed: 1.5,
                      straight: true,
                    },
                    number: {
                      density: {
                        enable: true,
                      },
                      value: 40,
                    },
                    opacity: {
                      value: 0.2,
                    },
                    shape: {
                      type: "",
                    },
                    size: {
                      value: { min: 1, max: 2 },
                    },
                  },
                  detectRetina: true,
                }}
              />
            )}
            <motion.div
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.0],
              }}
              animate={{ opacity: 100 }}
              className="flex justify-end w-full"
            >
              <div className="absolute bg-black-dark bg-opacity-90 md:w-[650px] w-[200px] h-full">
                <GlowCapture className="h-full w-full justify-center items-center flex cursor-default pb-[90px]">
                  <Glow color="#1E90FF" className="w-full">
                    {!showSchedule ? (
                      <HomeMenu toggleSchedule={toggleSchedule} />
                    ) : (
                      <Schedule toggleSchedule={toggleSchedule} />
                    )}
                  </Glow>
                </GlowCapture>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="md:hidden block overflow-hidden">
          {!showSchedule ? (
            <HomeMenu toggleSchedule={toggleSchedule} />
          ) : (
            <div className="flex h-screen w-full items-center justify-center">
              <div>
                <Schedule toggleSchedule={toggleSchedule} />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

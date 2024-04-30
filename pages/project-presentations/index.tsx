import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import TextButton from "../../components/Buttons/TextButton";
import Link from "next/link";

interface HomeMenuProps {
  toggleSchedule: () => void;
}

const HomeMenu = ({ toggleSchedule }: HomeMenuProps) => {
  return (
    <>
      <div className="w-full flex justify-end py-2 gap-2 group/t">
        <TextButton onClick={() => toggleSchedule()} text={"SCHEDULE"} />
        <Link href={"https://www.twitch.tv/cogitontnu"}>
          <TextButton text={"WATCH STREAM"} />
        </Link>
      </div>
      <div className="w-full h-full">
        <p className="text-white md:text-[54px] text-[20px] glow:text-blue-default font-extralight tracking-wider">
          <span className="font-medium">YOU</span> ARE{" "}
          <span className="font-medium">INVITED</span>
        </p>
        <div className="w-full h-[2px] glow:bg-white" />
        <p className="pt-2 text-gray tracking-wider text-[19px] glow:text-white">
          READY TO SEE NTNU’S TOP AI TALENT IN ACTION?
        </p>
      </div>
      <div className="relative h-full flex items-end justify-end w-full ">
        <p className=" bg-gradient-to-r from-blue-default from-20% to-white relative bg-clip-text font-medium md:text-[22px] text-[10px] tracking-wide inline-block text-transparent">
          PROJECT PRESENTATION <span className="font-light">EVENT</span>
        </p>
      </div>
    </>
  );
};

const Schedule = ({ toggleSchedule }: HomeMenuProps) => {
  return (
    <>
      <TextButton onClick={() => toggleSchedule()} text={"GO BACK"} />
      <div className="text-center">
        <p className="bg-gradient-to-r from-blue-default from-20% to-white relative bg-clip-text font-medium md:text-[60px] text-[30px] tracking-wide inline-block text-transparent">
          THE <span className="font-regular">SCHEDULE</span>
        </p>
      </div>
      <div className="w-full h-[2px] bg-white mb-4" />
      <div>
        <div className="w-full h-full flex justify-center md:text-[22px] text-[10px]">
          <p className="text-white ">
            17:00 - 17:15 Welcome <br /> 17:20 - 17:30 Diffusion <br /> 17:35 -
            17:45 Infor <br /> 17:50 - 18:00 TutorAI <br /> 18:00 - 18:15 PAUSE{" "}
            <br /> 18:15 - 18:25 TrainingAI <br /> 18:30 - 18:40 TetrisAI
          </p>
          <div className="h-[200px] w-[2px] mx-8 bg-white" />
          <p className="text-white">
            17:00 - 17:15 Welcome <br /> 17:20 - 17:30 Diffusion <br /> 17:35 -
            17:45 Infor <br /> 17:50 - 18:00 TutorAI <br /> 18:00 - 18:15 PAUSE{" "}
            <br /> 18:15 - 18:25 TrainingAI <br /> 18:30 - 18:40 TetrisAI
          </p>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  const [showSchedule, setShowSchedule] = useState<boolean>(true);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  return (
    <>
      <Head>
        <title>Project Presentations Event - Cogito NTNU</title>
      </Head>
      <main className="w-[100vw] h-[100vh] bg-black-dark overflow-hidden">
        <div className="md:block hidden">
          <div className="absolute">
            <Image
              className="tablet:w-[90px] w-[80px]"
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
            <Particles
              className="absolute top-[200px]"
              id="tsparticles"
              init={particlesInit}
              options={{
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
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
                      area: 200,
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
            <div className="flex justify-end w-full">
              <div className="absolute bg-black-dark bg-opacity-90 md:w-[650px] w-[200px] h-full glow:bg-red-100">
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
            </div>
          </div>
        </div>
        <div className="md:hidden block overflow-hidden">
          {!showSchedule ? (
            <div>
              <div className="absolute z-0 scale-[100%]">
                <video className="videoTag" autoPlay loop muted>
                  <source
                    src="/ProjectPresentation/Motion2.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="flex justify-center items-center h-[100vh] w-full pb-[200px]">
                <div className="w-fit text-center">
                  <p className="text-white md:text-[54px] text-[25px] font-extralight tracking-wider">
                    <span className="font-medium">YOU</span> ARE{" "}
                    <span className="font-medium">INVITED</span>
                  </p>
                  <div className="w-full h-[2px] bg-white" />
                  <p className="pt-2 text-gray tracking-wider text-[9px] text-white">
                    READY TO SEE NTNU’S TOP AI TALENT IN ACTION?
                  </p>
                  <div className="w-full flex justify-center py-2 gap-2 ">
                    <TextButton
                      onClick={() => toggleSchedule()}
                      text={"SCHEDULE"}
                    />
                    <Link href={"https://www.twitch.tv/cogitontnu"}>
                      <TextButton text={"WATCH STREAM"} />
                    </Link>
                  </div>
                  <div className="relative h-full flex items-end justify-center w-full top-[350px]">
                    <p className="bg-gradient-to-r from-blue-default from-20% to-white relative bg-clip-text font-medium text-[14px] tracking-wide inline-block text-transparent">
                      PROJECT PRESENTATION{" "}
                      <span className="font-light">EVENT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-[100vh] w-full items-center justify-center">
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

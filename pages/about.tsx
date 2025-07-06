"use client";

import Head from "next/head";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import Button from "../components/Buttons/Button";
import Image from "next/image";
import { motion } from "framer-motion";

//Images
import NTNU from "../public/Logos/NTNU.png";
import NAIL from "../public/Logos/norwegian_open_ai_lab.png";
import Navbar from "../components/Navbar/Navbar";

const About = () => {
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
      <Navbar page="about" />
      <main className="overflow-hidden">
        <div className="flex items-center justify-center phone:pt-[160px] pt-[130px]">
          <div className="md:hidden visible">
            <img
              className="absolute inset-0 w-full h-full object-cover md:rounded-r-3xl"
              draggable="false"
              alt="Cogito"
              src="./HomePage/FolkFraCogito.webp"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.0],
            }}
            className="bg-gray-default text-white w-[85%] z-40 h-max-[600px] md:h-[600px] h-[550px] rounded-3xl"
          >
            <div className="w-full flex">
              <div className="flex-1 py-[30px] px-[4%] desktop:text-[17px] md:text-[15px] phone:text-[16px] text-[16px]">
                <p className="font-black laptop:text-[40px] text-[30px] text-shadow-lg tracking-wide leading-normal md:text-left text-center">
                  Hva er Cogito?
                </p>
                <div className="w-full mt-4 h-[2px] bg-white"></div>
                <p className="pt-[12px] tracking-wide prose mb-4">
                  Cogito NTNU er en teknisk studentorganisasjon for kunstig
                  intelligens. Hvert semester har vi prosjekter som hvem som
                  helst kan være med på for å få praktisk erfaring ved siden av
                  studiene.
                </p>
                <p className="prose mb-4">
                  Vi ønsker å bygge et miljø hvor både nybegynnere og erfarne
                  kan lære AI sammen! Vi består av studenter på tvers av flere
                  av de tekniske linjene ved NTNU Trondheim.
                </p>
                <p className="prose mb-4 phone:block hidden">
                  Vårt mål er å være en åpen studentorganisasjon der alle som er
                  nysgjerrige kan delta.
                </p>
                <div className="w-full items-center flex justify-center text-center pt-[6%]">
                  <div>
                    <p className="font-medium py-[10px]">
                      Lurer du på noe mer?
                    </p>
                    <Button
                      text={"Kontakt Oss"}
                      px={"12"}
                      py={"4"}
                      color={"blue"}
                      onClick={() => homeAndScrollToBottom()}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-none relative w-[50%] h-[600px] hidden md:block">
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-r-3xl"
                  draggable="false"
                  alt="Cogito"
                  src="./HomePage/FolkFraCogito.webp"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.0],
          }}
          className="flex items-center justify-center pt-[100px]"
        >
          <div className="bg-gray-lighter text-gray-default w-[80%] z-40 h-max-[600px] desktop:h-[600px] md:h-[500px] h-[400px] rounded-3xl flex justify-center text-center">
            <div className="py-[30px] px-[8%] w-full">
              <p className="md:text-[40px] phone:text-[28px] text-[22px] font-black tracking-wide">
                Våre Hovedpartnere
              </p>
              <div className="w-full my-[20px] h-[3px] bg-gray-default"></div>
              <div className="items-center flex justify-center py-[40px]">
                <Image
                  className="phone:w-[40%] w-[60%]"
                  src={NTNU}
                  alt={"NTNU LOGO"}
                />
              </div>
              <div className="items-center flex justify-center py-[40px]">
                <Image
                  className="phone:w-[30%] w-[50%]"
                  src={NAIL}
                  alt={"NAIL LOGO"}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default About;

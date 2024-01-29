"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Images
import SunImg from "../../public/HomePage/Bg_sun.webp";
import StageImg from "../../public/HomePage/Bg_stage.webp";
import TheatreImg from "../../public/HomePage/Bg_theatre.webp";
import Icon from "../Icons/Icon";
import { MousePosition } from "antd/es/modal/interface";

const HomeP1 = () => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative h-[100vh] w-full overflow-hidden bg-gray-darker"
        id="section-0"
      >
        <div className="absolute w-full h-full bg-gradient-to-b to-transparent from-blue-dark from-0% to-30% z-40"></div>

        <motion.div
          className="absolute w-[120vw] h-[110vh]"
          initial={{ opacity: 0, scale: 25 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.0],
          }}
        >
          <Image
            priority={true}
            draggable={false}
            src={SunImg}
            className="absolute w-full h-full object-cover"
            style={{
              transform: `translateX(calc(-2.5% + ${
                -mousePos.x * 0.04
              }px)) translateY(calc(-5% + ${-mousePos.y * 0.05}px))`,
            }}
            alt="Sun"
          />
        </motion.div>
        <div className="absolute flex justify-center items-center w-full h-full phone:ml-[30px] ml-[10px] pb-[100px] desktop:leading-[80px] leading-[60px]">
          <div className="text-white font-black">
            <motion.p
              className="text-center desktop:text-[74px] phone:text-[58px] text-[48px] tracking-wider drop-shadow-md"
              style={{
                transform: `translateX(calc(-2.5% + ${
                  -mousePos.x * 0.03
                }px)) translateY(calc(-5% + ${-mousePos.y * 0.06}px))`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.0],
              }}
            >
              ØNSKER DU
            </motion.p>
            <motion.p
              className="text-center desktop:text-[60px] phone:text-[46px] text-[38px] tracking-normal drop-shadow-md"
              style={{
                transform: `translateX(calc(-2.5% + ${
                  -mousePos.x * 0.03
                }px)) translateY(calc(-5% + ${-mousePos.y * 0.06}px))`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 2,
                ease: [0, 0.71, 0.2, 1.0],
              }}
            >
              Å LÆRE OM <span className="text-blue-light">AI</span>?
            </motion.p>
          </div>
        </div>
        <motion.div
          className="absolute mr-[20px] w-[110%] h-[110%]"
          initial={{ opacity: 0, scale: 10 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.0],
          }}
        >
          <Image
            priority
            draggable={false}
            loading="eager"
            src={TheatreImg}
            alt="Theatre"
            className="absolute w-full h-full object-cover"
            style={{
              transform: `translateX(calc(-2.5% + ${
                -mousePos.x * 0.025
              }px)) translateY(calc(-5% + ${-mousePos.y * 0.05}px))`,
            }}
          />
        </motion.div>

        <motion.div
          className="absolute items-center w-[110%] h-full mr-[100px]"
          initial={{ opacity: 1, scale: 200, y: 200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0, 0.9, 0.2, 1.0],
          }}
        >
          <Image
            priority
            draggable={false}
            loading="eager"
            src={StageImg}
            alt="Stage"
            className="absolute w-full h-full object-cover"
            style={{
              transform: `translateX(calc(${
                -mousePos.x * 0.02
              }px)) translateY(calc( 
                                ${-mousePos.y * 0.01}px))`,
            }}
          />
        </motion.div>
        <div className="absolute flex items-end h-full justify-start py-4 px-4 z-50">
          <motion.div
            className="flex items-center gap-4 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2,
              duration: 0.2,
              ease: [0, 0.71, 0.2, 1.0],
            }}
          >
            <Icon icon="Info" size="18px" />
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="phone:text-[14px] text-[12px] text-white "
              href="https://en.wikipedia.org/wiki/Th%C3%A9%C3%A2tre_d%27Op%C3%A9ra_Spatial"
            >
              &ldquo;Théâtre D’opéra Spatial&rdquo; © 2022 Jason M. Allen
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeP1;

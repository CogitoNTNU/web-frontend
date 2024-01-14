"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Images
import UlrikSanne from "../../public/HomePage/SanneUlrik.webp";
import SmallScreenBg from "../../public/HomePage/People.jpg";
import CogitoBrain from "../../public/HomePage/CogitoBrain1.webp";
import Link from "next/link";
import Button from "../Buttons/Button";

const HomeP2 = () => {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-b to-transparent from-blue-dark from-0% to-30% z-50"></div>
            <div className="absolute w-full h-full laptop:block hidden">
                <Image
                    priority={true}
                    src={UlrikSanne}
                    className="absolute w-full h-full object-cover"
                    alt="Background"
                />
            </div>
            <div className="absolute w-full h-full laptop:hidden block">
                <Image
                    priority={true}
                    src={SmallScreenBg}
                    className="absolute w-full h-full object-cover"
                    alt="Background"
                />
            </div>
            <motion.div
                className="absolute flex laptop:justify-end justify-center w-full h-full items-center text-white px-[30%]"
                initial={{ opacity: 0, scale: 0, x: 300 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <div className="flex items-center justify-center">
                    <Image
                        priority={true}
                        draggable={false}
                        alt="Cogito Brain"
                        className="absolute laptop:w-[600px] w-[400px]"
                        src={CogitoBrain}
                    />
                    <div className="absolute flex w-fit text-center laptop:pb-[200px] pb-[150px] laptop:text-[40px] text-[24px] font-black">
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            FÅ ERFARING MED{" "}
                            <a className="text-blue-light">AI</a>!
                        </motion.p>
                    </div>
                    <motion.div
                        className="absolute flex w-fit text-start pr-[4%] pb-[20px]"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <div className="text-white laptop:text-[18px] text-[12px]">
                            <p>
                                I Cogito NTNU hjelper vi deg å forstå AI på ditt
                            </p>
                            <p>
                                nivå gjennom prosjekter og sosiale arrangement.
                            </p>
                            <br />

                            <div className="z-[50] absolute">
                                <Link href="/projects">
                                    <Button
                                        text={"Prosjekter"}
                                        px={"12"}
                                        py={"4"}
                                        color={"blue"}
                                    />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default HomeP2;

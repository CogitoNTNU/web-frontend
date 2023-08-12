"use client";

import styles from "../styles/Home.module.css";
import Image from "next/image";
import Sun_Img from "../public/HomePage/Bg_sun.webp";
import Stage_Img from "../public/HomePage/Bg_stage.webp";
import Theatre_Img from "../public/HomePage/Bg_theatre.webp";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";

const HomeP1 = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
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
                className={styles.main}
                id="section-0"
            >
                <div className={styles.sun}>
                    <motion.div
                        initial={{ opacity: 0, scale: 25 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.4,
                            ease: [0, 0.71, 0.2, 1.0],
                        }}
                    >
                        <Image
                            priority={true}
                            draggable={false}
                            src={Sun_Img}
                            style={{
                                transform: `translateX(calc(-2.5% + ${
                                    -mousePos.x * 0.04
                                }px)) translateY(calc(-5% + ${
                                    -mousePos.y * 0.05
                                }px))`,
                            }}
                            height="1700"
                            width="1600"
                            alt="Sun"
                        />
                    </motion.div>
                </div>
                <div className={styles.titlePosition}>
                    <motion.p
                        className={styles.title1}
                        style={{
                            transform: `translateX(calc(-2.5% + ${
                                -mousePos.x * 0.03
                            }px)) translateY(calc(-5% + ${
                                -mousePos.y * 0.06
                            }px))`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 2,
                            ease: [0, 0.71, 0.2, 1.0],
                        }}
                    >
                        ØNSKER DU
                    </motion.p>
                    <motion.p
                        className={styles.title2}
                        style={{
                            transform: `translateX(calc(-2.5% + ${
                                -mousePos.x * 0.03
                            }px)) translateY(calc(-5% + ${
                                -mousePos.y * 0.06
                            }px))`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 2.6,
                            ease: [0, 0.71, 0.2, 1.0],
                        }}
                    >
                        Å LÆRE OM <a style={{ color: "#1E90FF" }}>AI</a>?
                    </motion.p>
                </div>
                <div className={styles.theatre}>
                    <motion.div
                        initial={{ opacity: 0, scale: 10 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.8,
                            ease: [0, 0.71, 0.2, 1.0],
                        }}
                    >
                        <Image
                            priority
                            draggable={false}
                            loading="eager"
                            src={Theatre_Img}
                            alt="Theatre"
                            style={{
                                transform: `translateX(calc(-2.5% + ${
                                    -mousePos.x * 0.025
                                }px)) translateY(calc(-5% + ${
                                    -mousePos.y * 0.05
                                }px))`,
                            }}
                            height="1700"
                            width="1600"
                        />
                    </motion.div>
                </div>
                <div className={styles.stage}>
                    <motion.div
                        initial={{ opacity: 1, scale: 200, y: 200 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.6,
                            ease: [0, 0.9, 0.2, 1.0],
                        }}
                    >
                        <Image
                            priority
                            draggable={false}
                            loading="eager"
                            src={Stage_Img}
                            alt="Stage"
                            style={{
                                transform: `translateX(calc(${
                                    -mousePos.x * 0.02
                                }px)) translateY(calc( 
                                ${-mousePos.y * 0.01}px))`,
                            }}
                            height="1700"
                            width="1600"
                        />
                    </motion.div>
                </div>
                <motion.div
                    className={styles.creatorText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <AiOutlineInfoCircle
                        style={{
                            color: "white",
                            fontSize: "18px",
                            paddingTop: "4px",
                        }}
                    />
                    <a href="https://en.wikipedia.org/wiki/Th%C3%A9%C3%A2tre_d%27Op%C3%A9ra_Spatial">
                        "Théâtre D’opéra Spatial" © 2022 Jason M. Allen
                    </a>
                </motion.div>
            </motion.div>
        </>
    );
};

export default HomeP1;

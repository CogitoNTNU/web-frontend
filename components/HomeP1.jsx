"use client";

import styles from "../styles/Home.module.css";
import Image from "next/image";
import Sun_Img from "../public/HomePage/Bg_sun.png";
import Stage_Img from "../public/HomePage/Bg_stage.png";
import Theatre_Img from "../public/HomePage/Bg_theatre.png";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";

const HomeP1 = () => {
    const [mousePos, setMousePos] = useState({});

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
            whileInView={{ opacity: 1}}
            className={styles.main} id="section-0">
                <div className={styles.sun}>
                    <motion.div
                        initial={{ opacity: 0, scale: 20 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 20 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.0],
                        }}
                    >
                        <Image
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
                <div className={styles.text_div}>
                    <motion.a
                        className={styles.text}
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
                            duration: 2,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.0],
                        }}
                    >
                        ØNSKER DU
                    </motion.a>
                    <motion.p
                        className={styles.text2}
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
                            duration: 2,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.0],
                        }}
                    >
                        Å LÆRE OM <a style={{ color: "#1E90FF" }}>AI</a>?
                    </motion.p>
                </div>
                <div className={styles.theatre}>
                    <motion.div
                        initial={{ opacity: 0, scale: 10 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.0],
                        }}
                    >
                        <Image
                            draggable={false}
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
                        initial={{ opacity: 1, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.8,
                            ease: [0, 0.71, 0.2, 1.0],
                        }}
                    >
                        <Image
                            draggable={false}
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
                    className={styles.textdiv}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    >
                    <AiOutlineInfoCircle style={{color: 'white', fontSize: '12px'}}/>
                    <a href="https://en.wikipedia.org/wiki/Th%C3%A9%C3%A2tre_d%27Op%C3%A9ra_Spatial"> Théâtre d'Opéra Spatial </a>
                </motion.div>
            </motion.div>
            
        </>
    );
};

export default HomeP1;

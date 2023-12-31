"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import styles from "../styles/About.module.css";
import main from "../public/HomePage/FolkFraCogito.webp";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

//Images
import NTNU from "../public/Logos/NTNU.png";
import NAIL from "../public/Logos/norwegian_open_ai_lab.png";

const About = () => {
    function timeout(delay: number) {
        return new Promise((res) => setTimeout(res, delay));
    }

    const router = useRouter();

    const changeAndScrollToBottom = async () => {
        router.push("/");
        await timeout(1000);
        document
            .getElementById("part-2")
            .scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Head>
                <title>Om oss - Cogito NTNU</title>
            </Head>
            <div className={styles.main}>
                <motion.div
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                    className={styles.desc}
                >
                    <div className={styles.descText}>
                        <div className={styles.descTitle}>
                            <a>Hva er Cogito?</a>
                        </div>
                        <hr className={styles.line} />
                        <div className={styles.descTextDesc}>
                            <a>
                                Cogito NTNU er en teknisk studentorganisasjon
                                for kunstig intelligens. Hvert semester har vi
                                prosjekter som hvem som helst kan være med på
                                for å få praktisk erfaring ved siden av
                                studiene.
                                <br />
                                <br />
                                Vi ønsker å bygge et miljø hvor både nybegynnere
                                og erfarne kan lære AI sammen! Vi består av
                                studenter på tvers av flere av de tekniske
                                linjene ved NTNU Trondheim.
                                <br />
                                <div className={styles.buttonDiv}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={styles.button}
                                        onClick={() =>
                                            changeAndScrollToBottom()
                                        }
                                    >
                                        <p className={styles.buttonText}>
                                            Kontakt Oss
                                        </p>
                                    </motion.button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.descImage}>
                        <Image
                            priority={true}
                            src={main}
                            draggable={false}
                            alt="Cogito"
                            className={styles.descImg}
                        />
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.0],
                }}
                className={styles.spons}
            >
                <div className={styles.sponsText}>
                    <div className={styles.sponsTitle}>
                        <a>Våre Hovedpartnere </a>
                    </div>
                    <hr className={styles.line2} />
                </div>
                <div className={styles.positionSponsor}>
                    <a href="https://www.ntnu.no/">
                        <Image
                            className={styles.imgNTNU}
                            priority
                            src={NTNU}
                            alt="NTNU logo"
                        />
                    </a>

                    <a href="https://www.ntnu.edu/ailab">
                        <Image
                            className={styles.imgNAIL}
                            priority
                            src={NAIL}
                            alt="NAIL logo"
                        />
                    </a>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default About;

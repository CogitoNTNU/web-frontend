"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";
import main from "../public/HomePage/FolkFraCogito.webp";
import { motion } from "framer-motion";

import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const About = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <>
            <Head>
                <title>Om oss - Cogito NTNU</title>
            </Head>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
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
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
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
                                <br />
                                Vårt mål er å være en åpen studentorganisasjon
                                der alle som er nysgjerrige kan delta.
                            </a>
                        </div>
                    </div>
                    <div className={styles.descImage}>
                        <Image
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

                        <a>Partnere i</a>
                    </div>
                    <hr className={styles.line2} />
                </div>
            </motion.div>
            <div className={styles.footer}>
                <Footer />
            </div>
            <div className={styles.footer}></div>
        </>
    );
};

export default About;

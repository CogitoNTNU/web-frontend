"use client";

import Bg from "../../public/HomePage/SanneUlrik.webp";
import CogitoBrain from "../../public/HomePage/CogitoBrain1.webp";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeP2 = () => {
    return (
        <div className={styles.main}>
            <div className={styles.erfaringTitle}>
                <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.6,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    FÅ ERFARING MED <a style={{ color: "#30b3ec" }}>AI</a>!
                </motion.p>
            </div>

            <motion.div
                className={styles.erfaring}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.6,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <p>I Cogito NTNU hjelper vi deg å forstå AI på ditt</p>
                <p>nivå gjennom prosjekter og sosiale arrangement.</p>
                <br />
                <p>Se og test tidligere prosjekter her:</p>

                <div className={styles.buttonDiv}>
                    <Link href="/projects">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.button}
                        >
                            <p className={styles.buttonText}>PROSJEKTER</p>
                        </motion.button>
                    </Link>
                </div>
            </motion.div>

            <motion.div
                className={styles.cogitoBrain}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <Image
                    priority={true}
                    draggable={false}
                    alt="Brain"
                    className={styles.brainimg}
                    src={CogitoBrain}
                />
            </motion.div>

            <div className={styles.subg}>
                <Image
                    priority={true}
                    src={Bg}
                    className={styles.page2bg}
                    alt="Background"
                />
            </div>
        </div>
    );
};

export default HomeP2;

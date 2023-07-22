"use client";

import { motion } from "framer-motion";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import CogitoLogo from "../public/cogito_white.svg";
import { useState } from "react";

const Navbar = () => {
    const [isActiveHome, setIsActiveHome] = useState(true);
    const [isActiveAbout, setIsActiveAbout] = useState(false);
    const [isActiveProjects, setIsActiveProjects] = useState(false);
    const [isActiveTeam, setIsActiveTeam] = useState(false);

    const handleClicked = (setFunc: Function, funcList: Array<Function>) => {
        setFunc((current) => !current);
        funcList.map((func) => {
            func(false);
        });
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 1.2,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className={styles.navigation}
            >
                <div className={styles.setup}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link href="./">
                            <Image
                                draggable={false}
                                src={CogitoLogo}
                                height="90"
                                width="80"
                                alt="CogitoLogo"
                                onClick={() => {
                                    handleClicked(
                                        setIsActiveHome,
                                        Array(
                                            setIsActiveAbout,
                                            setIsActiveProjects,
                                            setIsActiveTeam
                                        )
                                    );
                                }}
                            />
                        </Link>
                    </motion.div>

                    <ul className={styles.links}>
                        <Link
                            className={
                                (styles.link, styles.hoverUnderlineAnimation)
                            }
                            style={{
                                textDecoration: isActiveHome
                                    ? "underline 2px"
                                    : "",
                                textUnderlineOffset: isActiveHome ? "1vh" : "",
                            }}
                            onClick={() => {
                                handleClicked(
                                    setIsActiveHome,
                                    Array(
                                        setIsActiveAbout,
                                        setIsActiveProjects,
                                        setIsActiveTeam
                                    )
                                );
                            }}
                            key="/"
                            href="/"
                        >
                            Hjem
                        </Link>
                        <Link
                            className={
                                (styles.link, styles.hoverUnderlineAnimation)
                            }
                            style={{
                                textDecoration: isActiveAbout
                                    ? "underline 2px"
                                    : "",
                                textUnderlineOffset: isActiveAbout ? "1vh" : "",
                            }}
                            onClick={() => {
                                handleClicked(
                                    setIsActiveAbout,
                                    Array(
                                        setIsActiveHome,
                                        setIsActiveProjects,
                                        setIsActiveTeam
                                    )
                                );
                            }}
                            key="/about"
                            href="/about"
                        >
                            Om oss
                        </Link>
                        <Link
                            className={
                                (styles.link, styles.hoverUnderlineAnimation)
                            }
                            style={{
                                textDecoration: isActiveProjects
                                    ? "underline 2px"
                                    : "",
                                textUnderlineOffset: isActiveProjects
                                    ? "1vh"
                                    : "",
                            }}
                            onClick={() => {
                                handleClicked(
                                    setIsActiveProjects,
                                    Array(
                                        setIsActiveHome,
                                        setIsActiveAbout,
                                        setIsActiveTeam
                                    )
                                );
                            }}
                            key="/projects"
                            href="/projects"
                        >
                            Prosjekter
                        </Link>
                        <Link
                            className={
                                (styles.link, styles.hoverUnderlineAnimation)
                            }
                            style={{
                                textDecoration: isActiveTeam
                                    ? "underline 2px"
                                    : "",
                                textUnderlineOffset: isActiveTeam ? "1vh" : "",
                            }}
                            onClick={() => {
                                handleClicked(
                                    setIsActiveTeam,
                                    Array(
                                        setIsActiveHome,
                                        setIsActiveAbout,
                                        setIsActiveProjects
                                    )
                                );
                            }}
                            key="/team"
                            href="/team"
                        >
                            Medlemmer
                        </Link>
                        <div className={styles.buttonPos}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles.button}
                            >
                                <p className={styles.buttonText}>Søk opptak</p>
                            </motion.button>
                        </div>
                    </ul>
                </div>
            </motion.nav>
        </>
    );
};

export default Navbar;

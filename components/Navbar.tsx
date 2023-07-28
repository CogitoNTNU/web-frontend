"use client";

import { motion } from "framer-motion";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import CogitoLogo from "../public/cogito_white.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = (color) => {
    const router = useRouter();
    const [buttonColor, setButtonColor] = useState("#FF6348");
    const [isActiveHome, setIsActiveHome] = useState(true);
    const [isActiveAbout, setIsActiveAbout] = useState(false);
    const [isActiveProjects, setIsActiveProjects] = useState(false);
    const [isActiveTeam, setIsActiveTeam] = useState(false);
    const functions = Array<Function>(
        setIsActiveHome,
        setIsActiveAbout,
        setIsActiveProjects,
        setIsActiveTeam
    );

    function timeout(delay: number) {
        return new Promise((res) => setTimeout(res, delay));
    }

    const handleClicked = (setFunc: Function) => {
        functions.map((func) => {
            func(false);
        });
        if (setFunc == null) {
            return;
        }
        setFunc(true);
    };

    useEffect(() => {
        if (router.pathname == "/") {
            handleClicked(setIsActiveHome);
            setButtonColor("#FF6348");
        } else if (router.pathname == "/about") {
            handleClicked(setIsActiveAbout);
            setButtonColor("#FF6348");
        } else if (router.pathname == "/projects") {
            handleClicked(setIsActiveProjects);
            setButtonColor("#FF6348");
        } else if (router.pathname == "/team") {
            handleClicked(setIsActiveTeam);
            setButtonColor("#FF6348");
        } else if (router.pathname == "/apply") {
            setButtonColor("#13395B");
            handleClicked(null);
        }
    }, [router]);

    const scrollToTop = async () => {
        await timeout(100);
        if (router.pathname == "/") {
            document
                .getElementById("part-0")
                .scrollIntoView({ behavior: "smooth" });
        }
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
                                onClick={() => scrollToTop()}
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
                            key="/team"
                            href="/team"
                        >
                            Medlemmer
                        </Link>
                        <div className={styles.buttonPos}>
                            <Link href="/apply">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ backgroundColor: buttonColor }}
                                    className={styles.button}
                                >
                                    <p className={styles.buttonText}>
                                        Søk opptak
                                    </p>
                                </motion.button>
                            </Link>
                        </div>
                    </ul>
                </div>
            </motion.nav>
        </>
    );
};

export default Navbar;

"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../public/Team/team2023.jpg";
import brain from "../public/Team/CogitoBrain.png";
import styles from "../styles/Team.module.css";
import Member from "../components/Member";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Team = () => {
    useEffect(() => {
        getData();
    }, []);
    const [members, setMembers] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const [showLeaders, setShowLeaders] = useState(false);
    const [showWeb, setShowWeb] = useState(false);
    const [showHR, setShowHR] = useState(false);
    const functions = Array<Function>(
        setShowAll,
        setShowLeaders,
        setShowWeb,
        setShowHR
    );
    const setShow = (setFunc: Function) => {
        functions.map((func) => {
            func(false);
        });
        setFunc(true);
    };

    const getData = async () => {
        const membersResponse = await fetch(
            "http://127.0.0.1:8000/members/all_members/"
        );
        const membersData = await membersResponse.json();
        setMembers(membersData);
    };

    return (
        <>
            <Head>
                <title>Medlemmer - Cogito NTNU</title>
            </Head>
            <motion.div
                className={styles.main}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.0],
                }}
            >
                <div className={styles.bg}>
                    <Image
                        className={styles.bgImg}
                        draggable={false}
                        priority={true}
                        src={bg}
                        alt="bg"
                    />
                    <div className={styles.bgGradient}></div>
                    <Image
                        className={styles.brainImg}
                        draggable={false}
                        priority={true}
                        src={brain}
                        alt="brain"
                    />

                    <div className={styles.brainText}>
                        <a>COGITO 2023</a>
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.buttonsP1}>
                            <button
                                className={styles.button}
                                style={{
                                    background: showAll ? "#747D8C" : "#D9D9D9",
                                    color: showAll ? "#FFF" : "#000",
                                    filter: showAll
                                        ? "drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.8))"
                                        : "",
                                }}
                                onClick={() => setShow(setShowAll)}
                            >
                                <a className={styles.buttonText}>
                                    Alle Medlemmer
                                </a>
                            </button>
                            <button
                                className={styles.button}
                                style={{
                                    background: showLeaders
                                        ? "#747D8C"
                                        : "#D9D9D9",
                                    color: showLeaders ? "#FFF" : "#000",
                                    filter: showLeaders
                                        ? "drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.8))"
                                        : "",
                                }}
                                onClick={() => setShow(setShowLeaders)}
                            >
                                <a className={styles.buttonText}>Styret</a>
                            </button>
                        </div>
                        <div className={styles.buttonsP2}>
                            <button
                                className={styles.button}
                                style={{
                                    background: showWeb ? "#747D8C" : "#D9D9D9",
                                    color: showWeb ? "#FFF" : "#000",
                                    filter: showWeb
                                        ? "drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.8))"
                                        : "",
                                }}
                                onClick={() => setShow(setShowWeb)}
                            >
                                <a className={styles.buttonText}>WebDev</a>
                            </button>
                            <button
                                className={styles.button}
                                style={{
                                    background: showHR ? "#747D8C" : "#D9D9D9",
                                    color: showHR ? "#FFF" : "#000",
                                    filter: showHR
                                        ? "drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.8))"
                                        : "",
                                }}
                                onClick={() => setShow(setShowHR)}
                            >
                                <a className={styles.buttonText}>
                                    Tillitsvalgte
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className={styles.members}>
                        {members.map((member) => (
                            <div className={styles.member} key={member.name}>
                                <Member
                                    name={member.name}
                                    title={member.title}
                                    imageURL={member.image}
                                    mailURL={member.email}
                                    linkedinURL={member.linkedIn}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <div className={styles.footer}>
                <Footer />
            </div>
            <div className={styles.footer}></div>
        </>
    );
};

export default Team;

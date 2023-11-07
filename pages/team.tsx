"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../public/Team/team2023.jpg";
import brain from "../public/Team/CogitoBrain.png";
import styles from "../styles/Team.module.css";
import Member from "../components/Member";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

const Team = () => {
    const [members, setMembers] = useState([]);
    const [switchMembers, setSwitchMembers] = useState(0);
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

    const scrollToMembers = () => {
        if (switchMembers != 0) {
            if (showAll) {
                window.scrollTo({
                    top: 720,
                    behavior: "smooth",
                });
            } else if (showLeaders) {
                window.scrollTo({
                    top: 715,
                    behavior: "smooth",
                });
            } else {
                window.scrollTo({
                    top: 550,
                    behavior: "smooth",
                });
            }
        }
    };

    const memberSwitch = () => {
        setSwitchMembers(switchMembers + 1);
    };

    useEffect(() => {
        getData();
        scrollToMembers();
    }, [switchMembers]);

    const getData = async () => {
        let rest_url = "";
        if (showAll) {
            rest_url = "/members/all_members/";
        } else if (showLeaders) {
            rest_url = "/members/lead_members/";
        } else if (showWeb) {
            rest_url = "/members/web_members/";
        } else if (showHR) {
            rest_url = "/members/hr_members/";
        }

        const membersResponse = await fetch(
            "https://cogito-backend.net" + rest_url
        );

        const membersData = await membersResponse.json();
        console.log(membersData);
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
                                onClick={() => {
                                    setShow(setShowAll);
                                    memberSwitch();
                                }}
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
                                onClick={() => {
                                    setShow(setShowLeaders);
                                    memberSwitch();
                                }}
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
                                onClick={() => {
                                    setShow(setShowWeb);
                                    memberSwitch();
                                }}
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
                                onClick={() => {
                                    setShow(setShowHR);
                                    memberSwitch();
                                }}
                            >
                                <a className={styles.buttonText}>
                                    Tillitsvalgte
                                </a>
                            </button>
                        </div>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.members} id="members">
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
            <Footer />
        </>
    );
};

export default Team;

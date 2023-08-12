import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import styles from "../styles/Projects.module.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { motion } from "framer-motion";
import "react-awesome-slider/dist/styles.css";
import AwsSliderstyles from "../styles/Slider.module.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);

//Images
import img1 from "../public/Projects/Img1.jpeg";
import img2 from "../public/Projects/Img2.jpeg";
import img3 from "../public/Projects/Img3.jpeg";
import img4 from "../public/Projects/Img4.jpeg";
import img5 from "../public/Projects/Img5.jpeg";
import Project from "../components/Project";

//Icons
import { AiFillPlayCircle, AiFillFileText, AiFillGithub } from "react-icons/ai";

const Projects = () => {
    const [projects, setProjets] = useState([]);
    const [text, setText] = useState(
        "Prosjektene har et eller flere av disse attributtene"
    );

    useEffect(() => {
        window.location.href = window.location.href.replace("https:", "http:");
        getData();
    }, []);

    const getData = async () => {
        let rest_url = "/projects/all_new_projects/";
        const projectsResponse = await fetch(
            "http://16.171.144.138:8000/" + rest_url
        );
        const projectsData = await projectsResponse.json();
        setProjets(projectsData);
    };

    return (
        <>
            <Head>
                <meta
                    http-equiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
                <title>Prosjekter - Cogito NTNU</title>
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
                <AutoplaySlider
                    className={AwsSliderstyles.imageSlider}
                    play={true}
                    bullets={false}
                    organicArrows={false}
                    cancelOnInteraction={false}
                    interval={10000}
                >
                    <div className={styles.image}>
                        <Image
                            className={styles.img}
                            priority
                            src={img1}
                            alt="img1"
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            className={styles.img2}
                            priority
                            src={img2}
                            alt="img1"
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            className={styles.img3}
                            priority
                            src={img3}
                            alt="img1"
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            className={styles.img4}
                            priority
                            src={img4}
                            alt="img1"
                        />
                    </div>
                    <div className={styles.image}>
                        <Image
                            className={styles.img5}
                            priority
                            src={img5}
                            alt="img1"
                        />
                    </div>
                </AutoplaySlider>
                <div className={styles.changeCategory}>
                    <AwesomeSlider
                        className={AwsSliderstyles.textSlider}
                        bullets={false}
                        activityColor="white"
                    >
                        <p className={styles.projectTypeText}>ANBEFALTE</p>
                        <p className={styles.projectTypeText}>PROSJEKTER V23</p>
                        <p className={styles.projectTypeText}>PROSJEKTER H22</p>
                        <p className={styles.projectTypeText}>PROSJEKTER V22</p>
                    </AwesomeSlider>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.title}>
                        Her finner du tidligere semesters prosjekter
                    </p>
                    <p className={styles.desc}>{text}</p>
                    <div className={styles.icons}>
                        <AiFillGithub
                            style={{
                                color: "#f1f2f6",
                                fontSize: "4rem",
                            }}
                            className={styles.gicons}
                            onMouseEnter={() =>
                                setText(
                                    "Prosjektet har et public repository tilgjengelig"
                                )
                            }
                            onMouseLeave={() =>
                                setText(
                                    "Prosjektene har et eller flere av disse attributtene"
                                )
                            }
                        />
                        <AiFillFileText
                            style={{
                                color: "#70a1ff",
                                fontSize: "4rem",
                            }}
                            className={styles.ficons}
                            onMouseEnter={() =>
                                setText(
                                    "Prosjektet har et eller flere leselige dokument"
                                )
                            }
                            onMouseLeave={() =>
                                setText(
                                    "Prosjektene har et eller flere av disse attributtene"
                                )
                            }
                        />
                        <AiFillPlayCircle
                            style={{
                                color: "#ff4757",
                                fontSize: "4rem",
                            }}
                            className={styles.picons}
                            onMouseEnter={() =>
                                setText(
                                    "Prosjektet er mulig å teste på nettsiden"
                                )
                            }
                            onMouseLeave={() =>
                                setText(
                                    "Prosjektene har et eller flere av disse attributtene"
                                )
                            }
                        />
                    </div>
                </div>
                <div className={styles.projectBlocker}>
                    <p>[ UNDER UTVIKLING ]</p>
                </div>
                <div className={styles.projectContainer}>
                    <div className={styles.projects}>
                        {projects.map((project) => (
                            <Project
                                title={project.title}
                                desc={project.desc}
                                image={project.image}
                                key={project.title}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export default Projects;

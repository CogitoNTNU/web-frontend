import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import AwsSliderstyles from "../styles/Carousel.module.scss";
const AutoplaySlider = withAutoplay(AwesomeSlider);

//Images
import img1 from "../public/Projects/Img1.jpeg";
import img2 from "../public/Projects/Img2.jpeg";
import img3 from "../public/Projects/Img3.jpeg";
import img4 from "../public/Projects/Img4.jpeg";
import img5 from "../public/Projects/Img5.jpeg";

const Projects = () => {
    return (
        <>
            <Head>
                <title>Prosjekter - Cogito NTNU</title>
            </Head>
            <div className={styles.main}>
                <div className={styles.gradient}></div>
                <div className={styles.changeCategory}>
                    <AwesomeSlider></AwesomeSlider>
                </div>
                <AutoplaySlider
                    className={AwsSliderstyles.awsBtn}
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
            </div>
        </>
    );
};

export default Projects;

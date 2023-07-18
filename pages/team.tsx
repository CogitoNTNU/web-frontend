import Head from "next/head";
import React from "react";
import Image from "next/image";
import bg from "../public/Team/team2023.jpg";
import brain from "../public/Team/CogitoBrain.png";
import styles from "../styles/Team.module.css";

const Team = () => {
    return (
        <>
            <Head>
                <title>Medlemmer - Cogito NTNU</title>
            </Head>
            <div className={styles.main}>
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
                        <button className={styles.button}>
                            <a className={styles.buttonText}>Alle Medlemmer</a>
                        </button>
                        <button className={styles.button}>
                            <a className={styles.buttonText}>Styret</a>
                        </button>
                        <button className={styles.button}>
                            <a className={styles.buttonText}>WebDev</a>
                        </button>
                        <button className={styles.button}>
                            <a className={styles.buttonText}>Tillitsvalgte</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;

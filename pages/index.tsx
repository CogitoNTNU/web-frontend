"use client";

import Head from "next/head";
import HomeP1 from "../components/HomeP1";
import HomeP2 from "../components/HomeP2";
import HomeP3 from "../components/HomeP3";
import styles from "../styles/Home.module.css";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home - Cogito NTNU</title>
                <link rel="icon" type="image/x-icon" href="/cogito_white.svg" />
            </Head>

            <div className={styles.container}>
                <section>
                    <HomeP1 />
                </section>
                <section>
                    <HomeP2 />
                </section>
                <section>
                    <HomeP3 />
                </section>
            </div>
        </>
    );
};

export default Home;

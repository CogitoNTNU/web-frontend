import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <>
            <Head>
                <title>Home - Cogito NTNU</title>
                <link rel="icon" type="image/x-icon" href="/cogito_white.svg" />
            </Head>
            <Navbar />
        </>
    );
};

export default About;

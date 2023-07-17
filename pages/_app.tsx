"use client";

import Navbar from "../components/Navbar";
import Head from "next/head";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="/cogito_white.svg" />
            </Head>
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 1,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                    variants={{
                        initialState: {
                            opacity: 0,
                        },
                        animateState: {
                            opacity: 1,
                        },
                        exitState: {
                            opacity: 0,
                        },
                    }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default App;

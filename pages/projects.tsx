import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

// Images
import Banner from "../public/Projects/MarketingAIShowcase.jpg";
import Project from "../components/Projects/Project";

const Projects = () => {
    return (
        <>
            <Head>
                <title>Medlemmer - Cogito NTNU</title>
            </Head>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.0],
                }}
                className="relative overflow-hidden"
            >
                <div className="relative w-full z-30 flex-none h-[720px]">
                    <div className="absolute w-full h-full bg-gradient-to-b to-transparent from-blue-dark from-0% to-30% z-50"></div>
                    <Image
                        className="absolute inset-0 w-full h-full object-cover shadow-2xl"
                        src={Banner}
                        alt={"banner"}
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                    className="absolute z-50 w-full flex items-end justify-center top-[700px]"
                >
                    <p className="bg-gray-default px-8 rounded-2xl absolute font-bold text-white laptop:text-[80px] tablet:text-[70px] text-[42px] tracking-wid drop-shadow-3xl">
                        PROSJEKTER
                    </p>
                </motion.div>

                <div className="flex py-6 w-full">
                    <p className="text-center w-full phone:text-[20px] text-[16px] text-white">
                        Her er noen av prosjektene som har blitt laget <br /> av
                        tidligere deltakere av Cogito NTNU
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="my-2 w-[70%] h-[2px] bg-gray-lighter"></div>
                </div>

                <div className="pt-8 flex justify-center">
                    <Project />
                </div>
            </motion.main>
            <Footer />
        </>
    );
};

export default Projects;

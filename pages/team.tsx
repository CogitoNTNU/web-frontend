"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Member from "../components/Member/Member";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

// Images
import banner from "../public/Team/MarketingAI.jpg";
import brain from "../public/Team/CogitoBrain.png";

const Team = () => {
    return (
        <>
            <main className="relative h-[1400px]">
                <div className="relative w-full z-30 flex-none h-[720px]">
                    <Image
                        className="absolute inset-0 w-full h-full object-cover hover:shadow-inner shadow-2xl"
                        src={banner}
                        alt={"banner"}
                    />
                </div>
                <div className="absolute z-50 w-full flex items-center justify-center top-[550px]">
                    <p className="absolute font-bold text-white md:text-[80px] tablet:text-[70px] text-[52px] tracking-wide stroke-black-default drop-shadow-xl">
                        COGITO 2024
                    </p>
                    <Image className="w-[330px]" src={brain} alt={"brain"} />
                </div>
                <div className="absolute top-[650px] left-0 right-0 bottom-0 flex items-center justify-center z-40">
                    <div className="bg-gray-default text-white w-[95%] z-40 h-max-[600px] h-[800px] rounded-3xl drop-shadow-xl">
                        <div className="pt-[250px] flex px-8 justify-center gap-12">
                            <Member
                                name={"Simon Sandvik Lee"}
                                title={"Web Developer"}
                            />
                            <Member
                                name={"Simon Sandvik Lee"}
                                title={"Web Developer"}
                            />
                            <Member
                                name={"Simon Sandvik Lee"}
                                title={"Web Developer"}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Team;

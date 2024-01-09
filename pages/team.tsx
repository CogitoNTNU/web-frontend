"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import RadioButton from "../components/Buttons/RadioButton";
import Member from "../components/Member/Member";
import { MemberType } from "../types/types";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import axios from "axios";

// Images
import banner from "../public/Team/MarketingAI.jpg";
import bannerSmall from "../public/Team/Sveinung.jpg";

const Team = () => {
    const radioButtons = [
        "Alle Medlemmer",
        "Styret",
        "Prosjektledere",
        "Loqoire",
        "Web",
        "SoMe",
    ];

    const [currentClicked, setCurrentClicked] =
        useState<string>("Alle Medlemmer");
    const [members, setMembers] = useState([]);
    const formData = new FormData();

    const fetchData = async () => {
        formData.append("member_type", currentClicked);
        await axios
            .post(`${process.env.endpoint}/api/members_by_type/`, formData)
            .then((res) => {
                setMembers(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, [currentClicked]);

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
                        className="absolute inset-0 w-full h-full object-cover hover:shadow-inner shadow-2xl phone:block hidden"
                        src={banner}
                        alt={"banner"}
                    />
                    <Image
                        className="absolute inset-0 w-full h-full object-cover hover:shadow-inner shadow-2xl phone:hidden block"
                        src={bannerSmall}
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
                        COGITO 2024
                    </p>
                </motion.div>
                <div className="relative left-0 right-0 bottom-0 flex items-center justify-center z-40">
                    <div className="bg-gray-lighter pt-[20px] px-[8%] rounded-b-3xl h-fit pb-[80px] w-[90%]">
                        <div className="pt-4 pb-8 flex justify-center tablet:gap-4 gap-2 flex-wrap w-full">
                            {radioButtons.map((name) => (
                                <RadioButton
                                    key={name}
                                    text={name}
                                    currentClicked={currentClicked}
                                    onClick={() => setCurrentClicked(name)}
                                />
                            ))}
                        </div>
                        <div className="flex gap-12 justify-center flex-wrap">
                            {members.map((member: MemberType) => (
                                <Member
                                    key={member.name}
                                    name={member.name}
                                    title={member.title}
                                    imageURL={member.image}
                                    linkedinURL={member.linkedIn}
                                    mailURL={member.email}
                                    githubURL={member.github}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.main>
            <Footer />
        </>
    );
};

export default Team;

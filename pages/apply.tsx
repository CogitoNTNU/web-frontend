"use client";

import { useState } from "react";
import Field from "../components/Fields/Field";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Button from "../components/Buttons/Button";
import { motion } from "framer-motion";
import ProjectPreview from "../components/Projects/ProjectPreview";

const Apply = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [about, setAbout] = useState<string>("");
    const [applyPage, setApplyPage] = useState<boolean>(true);

    const changePage = () => {
        if (applyPage) {
            setApplyPage(false);
        } else {
            setApplyPage(true);
        }
    };

    return (
        <>
            <Head>
                <title>Meld deg på - Cogito NTNU</title>
            </Head>
            <main className="w-full h-full pt-[200px]">
                <div className="relative flex justify-center h-full w-full z-[50] px-[30px]">
                    <div className="relative ">
                        <div className="absolute top-0 left-0 tablet:w-[200px] w-[150px] tablet:h-[50px] h-[40px] tablet:-mt-[50px] -mt-[40px] bg-white z-[50] rounded-t-3xl text-center tablet:py-4 py-2 drop-shadow-md">
                            <p className="font-medium">Deltaker</p>
                        </div>
                        <div className="absolute top-0 tablet:left-[120px] left-[100px] tablet:w-[200px] w-[150px] tablet:h-[50px] h-[40px] tablet:-mt-[50px] -mt-[40px] bg-white z-[40] rounded-t-3xl text-center tablet:py-4 py-2">
                            <p className="font-medium">Verv</p>
                        </div>
                    </div>
                    {applyPage && (
                        <div className="w-[80%] h-fit pb-6 bg-white rounded-b-3xl rounded-tr-3xl drop-shadow-2xl z-[60]">
                            <p className="font-bold laptop:text-[30px] tablet:text-[26px] text-[16px] text-blue-dark px-6 pt-8 pb-4">
                                Søknad - Vårsemesteret 2024
                            </p>
                            <div className="w-full h-fit flex justify-center">
                                <div className="w-[95%] h-fit bg-gray-lighter rounded-3xl">
                                    <div className="px-6 py-4">
                                        <p className="text-[20px]">
                                            Personlig Informasjon
                                        </p>
                                    </div>
                                    <div className="flex laptop:flex-row flex-col">
                                        <div>
                                            <div className="px-6 flex gap-[10px]">
                                                <div className="w-[200px] min-w-[100px]">
                                                    <Field
                                                        label="Fornavn"
                                                        placeholder="Cogitron"
                                                        value={firstName}
                                                        setValue={setFirstName}
                                                        type={"text"}
                                                    />
                                                </div>

                                                <div className="w-[200px] min-w-[100px]">
                                                    <Field
                                                        label="Etternavn"
                                                        placeholder="Cogito"
                                                        value={lastName}
                                                        setValue={setLastName}
                                                        type={"text"}
                                                    />
                                                </div>
                                            </div>
                                            <div className="px-6 gap-[10px]">
                                                <div className="w-[460px] min-w-[100px]">
                                                    <Field
                                                        label="Epost"
                                                        placeholder="Cogitron@cogito-ntnu.no"
                                                        value={email}
                                                        setValue={setEmail}
                                                        type={"text"}
                                                    />
                                                </div>
                                                <div className="w-[460px] min-w-[100px]">
                                                    <Field
                                                        label="Telefon"
                                                        placeholder="000 00 000"
                                                        value={phone}
                                                        setValue={setPhone}
                                                        type={"numbers"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="laptop:w-[800px] laptop:min-w-[200px] w-[460px] min-w-[100px] px-6">
                                            <Field
                                                label="Om deg selv"
                                                value={about}
                                                setValue={setAbout}
                                                type={"area"}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex w-full px-6 py-6 laptop:text-[20px] text-[12px]">
                                        <div className="flex justify-start w-full ">
                                            <Button
                                                text={"Send inn søknad"}
                                                px={"8"}
                                                py={"4"}
                                                icon={"ArrowRight"}
                                                color={"pink"}
                                            />
                                        </div>
                                        <div className="flex justify-end w-full">
                                            <Button
                                                text={"Semesterinfo"}
                                                px={"8"}
                                                py={"4"}
                                                icon="Info"
                                                color={"blue"}
                                                onClick={() => changePage()}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {!applyPage && (
                        <div className="w-[80%] h-[550px] bg-white rounded-b-3xl rounded-tr-3xl drop-shadow-2xl z-[60]">
                            <p className="font-bold text-[30px] text-blue-dark px-6 pt-8 pb-4">
                                Søknad - Vårsemesteret 2024
                            </p>
                            <div className="w-full h-full flex justify-center">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0,
                                        ease: [0, 0.71, 0.2, 1.0],
                                    }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-[95%] h-[420px] bg-gray-lighter rounded-3xl"
                                >
                                    <div className="px-6 py-4">
                                        <p className="text-[20px]">
                                            Semesterinfo - Vår 2024
                                        </p>
                                        <div className="flex">
                                            <div className="tracking-wider text-[16px] h-[280px]">
                                                <p>
                                                    Vårsemesteret 2024 prøver vi
                                                    i Cogito noe helt nytt!
                                                    Ingen direkte søknad til
                                                    prosjekt!
                                                </p>
                                                <br />
                                                <p>
                                                    Har du noen gang hatt lyst å
                                                    lære hvordan man kan lage en
                                                    Sjakk AI eller noe annet?
                                                    Dette og mer lærer vi ilag
                                                    av de dyktige kurslederene
                                                    våre!
                                                </p>
                                                <br />
                                                <p>
                                                    Vi starter av med en hel
                                                    måned med progging, sosialt
                                                    og såklart AI! Dette gjennom
                                                    kursing, sosialkvelder og
                                                    god mat. Senere i semesteret
                                                    starter prosjektene.
                                                </p>
                                            </div>
                                            <div className="flex justify-end w-full h-[280px]">
                                                <div className="overflow-auto">
                                                    <ProjectPreview />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-6">
                                        <Button
                                            text={"Gå tilbake"}
                                            px={"8"}
                                            py={"4"}
                                            color={"pink"}
                                            icon="ArrowLeft"
                                            iconPos="left"
                                            onClick={() => changePage()}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Apply;

"use client";

import { useState } from "react";
import Field from "../components/Fields/Field";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Button from "../components/Buttons/Button";
import { motion } from "framer-motion";
import { useSendApplication } from "../hooks/useSendApplication";

const Apply = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [applyPage, setApplyPage] = useState<boolean>(true);
  const [errorArray, setErrorArray] = useState<Array<string>>([]);
  const formData = new FormData();

  const { mutate, isSuccess: sent } = useSendApplication({ setErrorArray });

  const changePage = () => {
    if (applyPage) {
      setApplyPage(false);
    } else {
      setApplyPage(true);
    }
  };

  const sendApplication = () => {
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("phone_number", phone.replaceAll(" ", ""));
    formData.append("about", about);

    mutate(formData);
  };

  return (
    <>
      <Head>
        <title>Meld deg på - Cogito NTNU</title>
      </Head>
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.0],
        }}
        className="w-full h-full laptop:pt-[200px] pt-[150px]"
      >
        <div className="relative flex justify-center h-full w-full z-[50] px-[30px]">
          <div className="relative ">
            <div className="absolute top-0 left-0 tablet:w-[200px] w-[150px] tablet:h-[50px] h-[40px] tablet:-mt-[50px] -mt-[40px] bg-white z-[50] rounded-t-3xl text-center tablet:py-4 py-2 drop-shadow-md">
              <p className="font-medium">Deltaker</p>
            </div>
            {/* <div className="absolute top-0 tablet:left-[120px] left-[100px] tablet:w-[200px] w-[150px] tablet:h-[50px] h-[40px] tablet:-mt-[50px] -mt-[40px] bg-white z-[40] rounded-t-3xl text-center tablet:py-4 py-2">
                            <p className="font-medium">Verv</p>
                        </div> */}
          </div>
          {applyPage && (
            <div className="tablet:w-[80%] w-[110%] h-fit pb-8 bg-white rounded-b-3xl rounded-tr-3xl drop-shadow-2xl z-[60]">
              <p className="font-bold laptop:text-[30px] tablet:text-[26px] text-[18px] text-blue-dark px-6 pt-8 pb-4">
                Søknad - Vårsemesteret 2024
              </p>
              <div className="w-full h-fit flex justify-center">
                <div className="w-[95%] h-fit bg-gray-lighter rounded-3xl">
                  {!sent ? (
                    <div>
                      <div className="px-6 py-2">
                        <p className="laptop:text-[20px] text-[16px]">
                          Personlig Informasjon
                        </p>
                      </div>
                      <div className="flex laptop:flex-row flex-col">
                        <div>
                          <div className="px-6 flex gap-[10px]">
                            <div className="w-[200px] min-w-[100px] py-2">
                              <Field
                                id="first_name"
                                label="Fornavn"
                                placeholder="Cogitron"
                                value={firstName}
                                setValue={setFirstName}
                                errorArray={errorArray}
                                type={"text"}
                              />
                            </div>

                            <div className="w-[200px] min-w-[100px] py-2">
                              <Field
                                id="last_name"
                                label="Etternavn"
                                placeholder="Cogito"
                                value={lastName}
                                setValue={setLastName}
                                errorArray={errorArray}
                                type={"text"}
                              />
                            </div>
                          </div>
                          <div className="px-6 gap-[10px] flex-col">
                            <div className="flex-1 py-2 max-w-[410px] min-w-[100px]">
                              <Field
                                id="email"
                                label="Epost"
                                placeholder="Cogitron@cogito-ntnu.no"
                                value={email}
                                setValue={setEmail}
                                errorArray={errorArray}
                                type={"text"}
                              />
                            </div>
                            <div className="flex-1 py-2 max-w-[410px] min-w-[100px]">
                              <Field
                                id="phone_number"
                                label="Telefon"
                                placeholder="000 00 000"
                                value={phone}
                                setValue={setPhone}
                                errorArray={errorArray}
                                type={"numbers"}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="laptop:w-[900px] laptop:min-w-[200px] max-w-[1000px] min-w-[100px] px-6 py-2">
                          <Field
                            id="about"
                            label="Om deg selv"
                            value={about}
                            setValue={setAbout}
                            type={"area"}
                          />
                        </div>
                      </div>
                      <div className="flex w-full phone:px-6 px-4 phone:py-6 py-4 laptop:text-[20px] text-[12px]">
                        <div className="flex justify-start w-full ">
                          <Button
                            text={"Send inn søknad"}
                            onClick={() => sendApplication()}
                            px={"6"}
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
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="tablet:h-[400px] h-[500px] w-full flex justify-center text-center items-center px-2">
                      <div>
                        <p className="font-medium tablet:text-[20px] text-[14px] tracking-wider leading-[30px]">
                          Takk for at du sendte inn søknad!
                        </p>
                        <p className="tablet:text-[16px] text-[14px]">
                          Oppmøte og datoer vil bli sendt til deg på
                          epost/telefon snarest mulig. Vi gleder oss til å møte
                          deg!
                        </p>
                      </div>
                    </div>
                  )}
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
                    <p className="text-[20px]">Semesterinfo - Vår 2024</p>
                    <div className="flex">
                      <div className="tracking-wider text-[16px] h-[280px]">
                        <p>
                          Vårsemesteret 2024 prøver vi i Cogito noe helt nytt!
                          Ingen direkte søknad til prosjekt!
                        </p>
                        <br />
                        <p>
                          Har du noen gang hatt lyst å lære hvordan man kan lage
                          en Sjakk AI eller noe annet? Dette og mer lærer vi
                          ilag av de dyktige kurslederene våre!
                        </p>
                        <br />
                        <p>
                          Vi starter av med en hel måned med progging, sosialt
                          og såklart AI! Dette gjennom kursing, sosialkvelder og
                          god mat. Senere i semesteret starter prosjektene.
                        </p>
                      </div>
                      <div className="flex justify-end w-full h-[280px]">
                        <div className="overflow-auto"></div>
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
      </motion.main>

      <Footer />
    </>
  );
};

export default Apply;

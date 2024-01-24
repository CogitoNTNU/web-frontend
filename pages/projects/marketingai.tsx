import Field from "../../components/Fields/Field";
import Footer from "../../components/Footer/MarketingAIFooter";
import { useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

// Images
import poster1 from "../../public/Projects/MarketingAI/poster.png";
import poster2 from "../../public/Projects/MarketingAI/soda.jpg";
import poster3 from "../../public/Projects/MarketingAI/bicycle.png";
import ErrorHandlingMarketingAI from "../../components/Errors/ErrorHandlingMarketingAI";

type ErrorObject = {
  error: string;
  statusCode: number;
};

const MarketingAI = () => {
  const [value, setValue] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [status, setStatus] = useState<ErrorObject>(null);

  const getGeneratedImage = async () => {
    setImageUrl("loading");
    const formData = new FormData();
    formData.append("prompt", value);
    formData.append("width", "1024");
    formData.append("height", "1024");

    await axios
      .post(`${process.env.endpoint}/api/projects/marketing-ai/`, formData)
      .then((res) => {
        setImageUrl(res.data.image_url);
      })
      .catch((err) => {
        let errorObject: ErrorObject = {
          error: err.message,
          statusCode: err.response.status,
        };
        console.log(errorObject);

        setStatus(errorObject);
        setImageUrl(null);
        console.error(err);
      });
  };

  return (
    <>
      <Head>
        <title>Marketing AI - Cogito NTNU</title>
      </Head>
      <div className="bg-black-default h-full overflow-hidden">
        {status && (
          <header className="tablet:h-[480px] h-[300px] w-full bg-red-default overflow-hidden flex justify-center items-center">
            <ErrorHandlingMarketingAI
              errorCode={status.statusCode}
              errorMessage={status.error}
              refetchClick={getGeneratedImage}
            />
          </header>
        )}
        {imageUrl === "" ? (
          <header className="tablet:h-[480px] h-[300px] w-full bg-red-default overflow-hidden">
            <div className="flex justify-start w-full h-full tablet:px-[6%] px-[2%] items-center relative tablet:-bottom-20 -bottom-20 ">
              <img
                className="pt-2 tablet:w-[280px] phone:w-[180px] w-[120px] relative z-[100]"
                src="/Logos/MarketingAILogo.png"
                alt="companylogo"
              />

              <div className="text-white drop-shadow-2xl z-[100]">
                <motion.p
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.0],
                  }}
                  className="tablet:w-[500px] text-gray-default font-semibold tablet:text-4xl tablet:tracking-[4px] phone:text-xl phone:block hidden text-[18px]"
                >
                  MARKETING AI
                </motion.p>
                <motion.p
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.0],
                  }}
                  className="absolute tablet:w-[500px] font-semibold tablet:text-4xl tablet:tracking-[4px] phone:text-xl phone:block hidden text-[18px] -top-[3px] -left-[3px]"
                >
                  MARKETING AI
                </motion.p>
                <motion.p
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.0],
                  }}
                  className="font-regular tablet:text-2xl phone:block hidden text-[11px]"
                >
                  Open Source Marketing Tool
                </motion.p>
              </div>
              <div className="absolute flex w-full justify-end desktop:right-[0.5%] right-[2%] tablet:top-[40px] top-[80px]">
                <div className="bg-yellow-default desktop:w-[600px] desktop:h-[600px] tablet:w-[480px] tablet:h-[480px] w-[200px] h-[200px] rounded-full border-white border-solid border-4 z-50">
                  <div className="flex justify-center w-full drop-shadow-md">
                    <motion.div
                      initial={{
                        y: 500,
                        scale: 1.1,
                      }}
                      animate={{
                        y: 0,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.0],
                      }}
                      className="absolute desktop:-top-[80px] laptop:top-[40px]"
                    >
                      <Image
                        className="desktop:w-[400px] tablet:w-[300px] w-[150px]"
                        src={poster2}
                        draggable={false}
                        alt="poster2"
                      />
                    </motion.div>
                    <motion.div
                      initial={{
                        x: 0,
                        y: 300,
                        scale: 1.1,
                        rotate: 0,
                      }}
                      animate={{
                        y: 0,
                        x: -50,
                        scale: 1,
                        rotate: -20,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: [0, 0.71, 0.2, 1.0],
                      }}
                      className="absolute desktop:pr-[300px] tablet:pr-[180px] desktop:pt-[80px] tablet:pt-[120px] pt-[60px] pr-[40px]"
                    >
                      <Image
                        className="desktop:w-[280px] tablet:w-[200px] w-[80px]"
                        src={poster1}
                        draggable={false}
                        alt="poster1"
                      />
                    </motion.div>
                    <motion.div
                      initial={{
                        x: 0,
                        y: 300,
                        scale: 1.1,
                        rotate: 0,
                      }}
                      animate={{
                        y: 0,
                        x: 50,
                        scale: 1,
                        rotate: 20,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.0],
                      }}
                      className="absolute desktop:pl-[300px] tablet:pl-[200px] desktop:pt-[120px] tablet:pt-[200px] pt-[100px] pl-[50px]"
                    >
                      <Image
                        className="desktop:w-[280px] tablet:w-[180px] w-[60px]"
                        draggable={false}
                        src={poster3}
                        alt="poster3"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              <motion.div className="absolute tablet:right-[22%] phone:right-[15%] right-[28%]">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  style={{ originX: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  className="z-30 absolute bg-yellow-default w-[1920px] tablet:h-[200px] h-[80px]"
                ></motion.div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  style={{ originX: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    delay: -2,
                    ease: "linear",
                  }}
                  className="z-30 absolute bg-yellow-default w-[1920px] tablet:h-[200px] h-[80px] "
                ></motion.div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  style={{ originX: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    delay: -4,
                    ease: "linear",
                  }}
                  className="z-30 absolute bg-yellow-default w-[1920px] tablet:h-[200px] h-[80px] "
                ></motion.div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  style={{ originX: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    delay: -6,
                    ease: "linear",
                  }}
                  className="z-30 absolute bg-yellow-default w-[1920px] tablet:h-[200px] h-[80px] "
                ></motion.div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  style={{ originX: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    delay: -8,
                    ease: "linear",
                  }}
                  className="z-30 absolute bg-yellow-default w-[1920px] tablet:h-[200px] h-[80px] "
                ></motion.div>
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  style={{ originX: 0 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    delay: -10,
                    ease: "linear",
                  }}
                  className="z-30 absolute bg-yellow-default w-[1920px] tablet:h-[200px] h-[80px]"
                ></motion.div>
              </motion.div>
            </div>
          </header>
        ) : (
          <header className="h-[480px] w-full bg-red-default overflow-hidden flex justify-center items-center">
            {imageUrl === "loading" ? (
              <div className="w-full h-full flex items-center justify-center">
                <ReactLoading
                  type={"spinningBubbles"}
                  height={"5%"}
                  width={"5%"}
                />
              </div>
            ) : (
              <>
                {/* Shows the image if everything is ok */}
                <img
                  className="object-cover tablet:w-[500px] w-[400px]"
                  src={imageUrl}
                ></img>
              </>
            )}
          </header>
        )}

        <main className="h-fit">
          <div className="flex justify-center pt-[2%]">
            <div className="flex flex-row align-middle z-50 gap-4 tablet:text-lg text-[12px] px-12 py-2 tablet:w-[700px] w-[600px]">
              <Field
                placeholder="Generate AI Images for Marketing..."
                value={value}
                setValue={setValue}
                onClick={getGeneratedImage}
                activeButton
                type={"text"}
              />
            </div>
          </div>

          <div className="text-center py-[2%]">
            <p className="tablet:text-2xl text-[20px] text-white">
              Step by Step:
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <div className="text-center">
              <img
                className="tablet:w-[200px] w-[100px] rounded-sm"
                src="/Logos/stepOne.png"
                alt="step one"
              />
              <p className="text-white tablet:text-xl text-[12px] tracking-wider">
                1. Prompt
              </p>
            </div>

            <div className="text-center">
              <img
                className="tablet:w-[204px] w-[104px] rounded-sm"
                src="/Logos/stepTwo.png"
                alt="step two"
              />
              <p className="text-white tablet:text-xl text-[12px] tracking-wider ">
                2. Enjoy
              </p>
            </div>
          </div>

          <div className="flex justify-center py-[4%]">
            <div className="w-[500px] h-[2px] bg-white"></div>
          </div>
        </main>
        <div className="h-full relative bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MarketingAI;

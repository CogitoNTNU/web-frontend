import Field from "../../components/Fields/Field";
import Footer from "../../components/Footer/MarketingAIFooter";
import { useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Head from "next/head";

const MarketingAI = () => {
    const [value, setValue] = useState("");
    const [imageUrl, setImageUrl] = useState<string>("");

    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            getGeneratedImage();
        }
    };

    const getGeneratedImage = async () => {
        setImageUrl("loading");
        const formData = new FormData();
        formData.append("prompt", value);
        formData.append("width", "1024");
        formData.append("height", "1024");

        await axios
            .post(
                `${process.env.endpoint}/api/projects/marketing-ai/`,
                formData
            )
            .then((res) => setImageUrl(res.data.image_url))
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Head>
                <title>Marketing AI - Cogito NTNU</title>
            </Head>
            <div className="bg-black-default h-full" onKeyDown={handleKeyPress}>
                {imageUrl === "" ? (
                    <header className="tablet:h-[450px] h-[300px] w-full bg-red-default overflow-hidden">
                        <div className="flex justify-start w-full h-full tablet:px-[6%] px-[2%] items-center relative tablet:-bottom-20 -bottom-20">
                            <img
                                className="pt-2 tablet:w-[250px] w-[150px]"
                                src="/Logos/MarketingAILogo.png"
                                alt="companylogo"
                            />
                            <div className="text-white drop-shadow-2xl">
                                <p className="tablet:w-[500px] font-semibold tablet:text-4xl tablet:tracking-[4px] text-xl">
                                    MARKETING AI
                                </p>
                                <p className="font-regular tablet:text-2xl text-base">
                                    Open Source Marketing Tool
                                </p>
                            </div>
                        </div>
                    </header>
                ) : (
                    <header className="h-[450px] w-full bg-red-default overflow-hidden flex justify-center items-center">
                        {imageUrl === "loading" ? (
                            <div className="w-full h-full flex items-center justify-center">
                                <ReactLoading
                                    type={"spinningBubbles"}
                                    height={"5%"}
                                    width={"5%"}
                                />
                            </div>
                        ) : (
                            <img
                                className="object-cover tablet:w-[500px] w-[400px]"
                                src={imageUrl}
                            ></img>
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
                <Footer />
            </div>
        </>
    );
};

export default MarketingAI;

import Link from "next/link";
import classNames from "classnames";
import { AiFillGithub } from "react-icons/ai";

const buttonClass = classNames(
    "flex",
    "items-center",
    "justify-center",
    "h-[100%]",
    "w-[90px]"
);

const Footer = () => {
    return (
        <>
            <footer className="flex flex-row w-full h-[120px] bg-purple items-center px-[4%] py-[4%] text-white">
                <Link href={`/`}>
                    <div className="flex flex-row items-center justify-center">
                        <img
                            className="pt-2 sm:w-[130px] w-[60px]"
                            src="/Logos/MarketingAILogo.png"
                            alt="companylogo"
                        />
                        <div className="w-[100px]">
                            <p className="sm:w-[150px] w-[80px] font-semibold sm:text-lg text-[8px]">
                                Marketing AI
                            </p>
                            <p className="font-regular sm:text-xs text-[8px]">
                                Copyright © 2023
                            </p>
                        </div>
                    </div>
                </Link>
                <div className="flex flex-row h-full w-full items-center justify-end text-sm">
                    <div className="text-right sm:w-[400px] w-[200px]">
                        <div className="flex align-middle justify-end sm:text-xl text-[10px] sm:gap-2 pb-1">
                            <AiFillGithub className="sm:text-3xl text-[16px]" />
                            <a
                                href="https://github.com/CogitoNTNU/MarketingAI"
                                className="font-bold"
                            >
                                Source Code
                            </a>
                        </div>
                        <span className="sm:text-xs text-[6px] leading-3">
                            Marketing AI uses chatbot-like AI models to generate
                            marketing images, making it a powerful tool for
                            creating visual content that aligns with marketing
                            goals.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

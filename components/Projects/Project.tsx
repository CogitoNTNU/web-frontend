import Image from "next/image";
import New from "../Notification/New";
import { motion } from "framer-motion";

// Images
import MarketingAILogo from "../../public/Projects/MarketingAILogo.png";
import Button from "../Buttons/Button";
import Icon from "../Icons/Icon";
import Link from "next/link";

interface Project {
    title?: string;
    image?: string;
    desc?: string;
}

const Project = ({ title, image, desc }: Project) => {
    return (
        <>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.4,
                    delay: 0.4,
                }}
                className="relative flex tablet:w-[600px] w-[350px] tablet:h-[120px] h-[110px] bg-white rounded-2xl z-50 group hover:h-[210px] transition-all"
            >
                <div className="absolute -top-4 -right-4">
                    <New />
                </div>
                <div className="cursor-default">
                    <Image
                        draggable={false}
                        src={MarketingAILogo}
                        alt={"Marketing AI Logo"}
                        className="tablet:w-[320px] w-[280px] absolute object-cover"
                    />
                    <div className="tablet:w-[300px] w-[240px] bg-red-default h-full transition-transform rounded-l-2xl text-white">
                        <div className="flex pt-[120px] pl-4 justify-start gap-2 group-hover:opacity-100 opacity-0 transition-all ease-in-out">
                            <div className="flex gap-2 items-center h-full">
                                <p className="text-[20px] font-bold">
                                    Prosjektledere
                                </p>
                                <Icon icon={"Users"} size="20px" />
                            </div>
                        </div>
                        <div className="text-[14px] text-medium pl-4 ">
                            <p>Kristoffer Nohr Olaisen</p>
                            <p>Sverre Nystad</p>
                        </div>
                    </div>
                </div>

                <div className="tablet:py-8 py-10 px-4">
                    <p className="tablet:block hidden text-[14px] cursor-default">
                        Marketing AI is a powerful <br />
                        marketing tool made to conquer all social platforms!
                    </p>
                    <p className="tablet:hidden block text-[13px] cursor-default">
                        Marketing done right!
                    </p>
                    <div className="absolute bottom-6 tablet:flex justify-center tablet:gap-2 group-hover:opacity-100 opacity-0 transition-all ease-in-out pl-2">
                        <div className="pt-1">
                            <Link
                                href={
                                    "https://cogito-ntnu.no/projects/marketingai"
                                }
                            >
                                <Button
                                    text={"Prøv Ut"}
                                    icon="Play"
                                    px={"4"}
                                    py={"2"}
                                    color={"blue"}
                                />
                            </Link>
                        </div>

                        <div className="pt-1">
                            <Link
                                href={
                                    "https://github.com/CogitoNTNU/MarketingAI"
                                }
                            >
                                <Button
                                    text={"Github"}
                                    icon="GithubFeather"
                                    px={"4"}
                                    py={"2"}
                                    color={"gray"}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.main>
        </>
    );
};

export default Project;

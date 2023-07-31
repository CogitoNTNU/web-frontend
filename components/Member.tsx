"use client";
import styles from "../styles/Member.module.css";
import tempImage from "../public/Team/Default.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Member = ({ name, title, imageURL, linkedinURL, mailURL }) => {
    const imageLoader = ({ src, width, quality }) => {
        return `http://127.0.0.1:8000${src}?w=${width}&q=${quality || 75}`;
    };
    return (
        <>
            <motion.div
                className={styles.main}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <div className={styles.gradient}>
                    <div className={styles.text}>
                        <a
                            style={{
                                fontWeight: "light",
                                fontSize: "20px",
                            }}
                        >
                            {name != null ? name : "Member"}
                        </a>
                        <br />
                        <a style={{ fontWeight: "500", fontSize: "16px" }}>
                            {title != null ? title : "Member"}
                        </a>
                    </div>
                    <div className={styles.icons}>
                        <div>
                            <a href={linkedinURL}>
                                <AiFillLinkedin
                                    className={styles.icon}
                                    style={{ fontSize: "50px" }}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={"mailto:" + mailURL}>
                                <AiFillMail
                                    className={styles.icon}
                                    style={{ fontSize: "50px" }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image
                        loader={imageLoader}
                        className={styles.imageImg}
                        src={imageURL != "null" ? imageURL : tempImage}
                        alt="image"
                        width={30}
                        height={40}
                    />
                </div>
            </motion.div>
        </>
    );
};

export default Member;

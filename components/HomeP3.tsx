"use client";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import stylesFooter from "../styles/Footer.module.css";
import bgbacks from "../public/HomePage/back.jpeg";
import {
    AiFillInstagram,
    AiFillFacebook,
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";
import { motion } from "framer-motion";

const HomeP3 = () => {
    return (
        <div className={styles.main}>
            <div className={styles.bgbacks}>
                <Image src={bgbacks} alt="bg" height={1000} width={1650} />
                <div className={styles.footer}>
                    <div className={stylesFooter.OrgCopy}>
                        <p>Cogito NTNU © 2023</p>
                    </div>
                    <div className={stylesFooter.OrgNr}>
                        <p>Org.Nr. 920 628 788</p>
                    </div>
                </div>
                <div className={stylesFooter.icons}>
                    <motion.div className={stylesFooter.ficon}>
                        <a href="https://www.facebook.com/CogitoNTNU">
                            <AiFillFacebook
                                style={{
                                    color: "white",
                                    fontSize: "3.5rem",
                                }}
                            />
                        </a>
                    </motion.div>
                    <motion.div className={stylesFooter.iicon}>
                        <a href="https://www.instagram.com/cogitontnu/">
                            <AiFillInstagram
                                style={{
                                    color: "white",
                                    fontSize: "3.5rem",
                                }}
                            />
                        </a>
                    </motion.div>
                    <motion.div className={stylesFooter.licon}>
                        <a href="https://www.linkedin.com/company/cogito-ntnu/">
                            <AiFillLinkedin
                                style={{
                                    color: "white",
                                    fontSize: "3.5rem",
                                }}
                            />
                        </a>
                    </motion.div>
                    <motion.div className={stylesFooter.gicon}>
                        <a href="https://github.com/CogitoNTNU">
                            <AiFillGithub
                                style={{
                                    color: "white",
                                    fontSize: "3.5rem",
                                }}
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeP3;

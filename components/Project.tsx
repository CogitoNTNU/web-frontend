import styles from "../styles/ProjectComponent.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiFillFileText, AiFillGithub, AiFillPlayCircle } from "react-icons/ai";

const Project = ({ title, image, desc }) => {
    const [clicked, setClicked] = useState(false);

    const toggle = () => {
        setClicked(!clicked);
    };

    const imageLoader = ({ src, width, quality }) => {
        return `http://16.171.144.138:8000${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className={styles.popup}
                style={{ display: clicked ? "" : "none" }}
            >
                <div className={styles.closeButton} onClick={() => toggle()}>
                    <p>x</p>
                </div>
            </motion.div>
            <div className={styles.main} onClick={() => toggle()}>
                <motion.div
                    className={styles.image}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className={styles.icons}>
                        <AiFillGithub
                            style={{
                                color: "#f1f2f6",
                                fontSize: "2rem",
                                backgroundColor: "#2f3542",
                                borderRadius: "25px",
                            }}
                            className={styles.iicons}
                        />
                        <AiFillFileText
                            style={{
                                color: "#70a1ff",
                                fontSize: "2rem",
                            }}
                            className={styles.iicons}
                        />
                        <AiFillPlayCircle
                            style={{
                                color: "#ff4757",
                                fontSize: "2rem",
                            }}
                            className={styles.iicons}
                        />
                    </div>
                    <Image
                        priority
                        loader={imageLoader}
                        className={styles.tempImg}
                        draggable="false"
                        height={20}
                        width={20}
                        src={image}
                        alt="temporary"
                    />
                    <div className={styles.projectText}>
                        <p>{title}</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Project;

import styles from "../styles/ProjectMarkable.module.css";
import tempImg from "../public/Test/experience.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectMarkable = ({ setValue, removeValue, title, image, desc }) => {
    const [clicked, setClicked] = useState(false);

    const toggle = () => {
        setClicked(!clicked);
        if (clicked) {
            removeValue();
        } else {
            setValue();
        }
    };

    const imageLoader = ({ src, width, quality }) => {
        return `http://127.0.0.1:8000${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <>
            <div
                className={styles.main}
                onClick={() => {
                    toggle();
                }}
            >
                <motion.div
                    className={styles.image}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className={styles.projectText}>
                        <p>{title}</p>
                    </div>
                    <div className={styles.popup}>
                        <aside className={styles.hoverpopup}>
                            <h2>{title}</h2>
                            <p>{desc}</p>
                        </aside>
                    </div>

                    <Image
                        loader={imageLoader}
                        style={{
                            borderStyle: clicked ? "solid" : "none",
                            borderColor: "#FF6348",
                            borderWidth: "medium",
                        }}
                        className={styles.tempImg}
                        draggable="false"
                        height={16}
                        width={16}
                        src={image}
                        alt="temporary"
                    />
                </motion.div>
            </div>
        </>
    );
};

export default ProjectMarkable;

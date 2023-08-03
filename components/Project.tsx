import styles from "../styles/ProjectComponent.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectMarkable = ({ title, image, desc }) => {
    const imageLoader = ({ src, width, quality }) => {
        return `http://127.0.0.1:8000${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <>
            <div className={styles.main}>
                <motion.div
                    className={styles.image}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
                        className={styles.tempImg}
                        draggable="false"
                        height={20}
                        width={20}
                        src={image}
                        alt="temporary"
                    />
                </motion.div>
            </div>
        </>
    );
};

export default ProjectMarkable;

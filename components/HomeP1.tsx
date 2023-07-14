import styles from "../styles/Home.module.css";
import Image from "next/image";
import Sun_Img from "../public/HomePage/Bg_sun.png";
import Stage_Img from "../public/HomePage/Bg_stage.png";
import Theatre_Img from "../public/HomePage/Bg_theatre.png";
import { useEffect, useState, useRef } from "react";

const HomeP1 = () => {
    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({
                x: event.clientX - window.innerWidth / 2,
                y: event.clientY - window.innerHeight / 2,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.sun}>
                    <Image
                        src={Sun_Img}
                        style={{
                            transform: `translateX(calc(-2.5% + ${
                                -mousePos.x * 0.04
                            }px)) translateY(calc(-5% + ${
                                -mousePos.y * 0.05
                            }px))`,
                        }}
                        height="1700"
                        width="1600"
                        alt="Sun"
                    />
                </div>
                <div className={styles.text_div}>
                    <p
                        className={styles.text}
                        style={{
                            transform: `translateX(calc(-2.5% + ${
                                -mousePos.x * 0.03
                            }px)) translateY(calc(-5% + ${
                                -mousePos.y * 0.06
                            }px))`,
                        }}
                    >
                        ØNSKER DU
                    </p>
                    <p
                        className={styles.text2}
                        style={{
                            transform: `translateX(calc(-2.5% + ${
                                -mousePos.x * 0.03
                            }px)) translateY(calc(-5% + ${
                                -mousePos.y * 0.06
                            }px))`,
                        }}
                    >
                        Å LÆRE OM <a style={{ color: "#1E90FF" }}>AI</a>?
                    </p>
                </div>
                <div className={styles.theatre}>
                    <Image
                        src={Theatre_Img}
                        alt="Theatre"
                        style={{
                            transform: `translateX(calc(-2.5% + ${
                                -mousePos.x * 0.025
                            }px)) translateY(calc(-5% + ${
                                -mousePos.y * 0.05
                            }px))`,
                        }}
                        height="1700"
                        width="1600"
                    />
                </div>
                <div className={styles.stage}>
                    <Image
                        src={Stage_Img}
                        alt="Stage"
                        style={{
                            transform: `translateX(calc(-2% + ${
                                -mousePos.x * 0.02
                            }px)) translateY(calc(-15% + 
                                ${-mousePos.y * 0.01}px))`,
                        }}
                        height="1700"
                        width="1600"
                    />
                </div>
            </div>
        </>
    );
};

export default HomeP1;

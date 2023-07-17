"use client";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import bgbacks from "../public/HomePage/back.jpeg";

import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import GoogleMapReact from "google-map-react";
import Footer from "./Footer";

const HomeP3 = () => {
    const defaultProps = {
        center: {
            lat: 63.41729,
            lng: 10.40666,
        },
        zoom: 17,
    };
    const Marker = (props) => {
        return (
            <div className="SuperAwesomePin">
                <FaMapMarkerAlt
                    style={{
                        color: "red",
                        fontSize: "40px",
                        bottom: "3vh",
                    }}
                />
            </div>
        );
    };

    return (
        <div className={styles.main}>
            <div className={styles.bgbacks}>
                <Image src={bgbacks} alt="bg" height={1000} width={1650} />
                <div className={styles.contact}>
                    <div className={styles.contactText}>
                        <div className={styles.contactTitle}>
                            <a>Kontakt Oss</a>
                        </div>
                        <div className={styles.contactDesc}>
                            <a>
                                Har du et spørsmål eller er du en bedrift som
                                ønsker å komme i kontakt med NTNU’s mest
                                engasjerte AI studenter?
                            </a>
                            <hr className={styles.brline} />
                            <a style={{ fontWeight: 700, fontSize: "24px" }}>
                                Epost
                            </a>
                            <br />
                            <motion.div
                                whileHover={{ scale: 1.05, x: 10 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <a
                                    style={{
                                        textDecorationLine: "underline",
                                        fontWeight: "400",
                                    }}
                                    href="mailto:styret@cogito-ntnu.no"
                                >
                                    styret@cogito-ntnu.no
                                </a>
                            </motion.div>
                            <br />
                            <a style={{ fontWeight: 700, fontSize: "24px" }}>
                                Adresse
                            </a>
                            <br />
                            <a
                                style={{
                                    fontWeight: "400",
                                }}
                            >
                                NTNU Gløshaugen, Gruva <br />
                                Sæm Selands vei 1 <br />
                                7034 Trondheim
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.map}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyCiECvwg5wcGgqX5ylm2Qh06nJSNYikr40",
                        }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        yesIWantToUseGoogleMapApiInternals
                    >
                        <Marker
                            lat={defaultProps.center.lat}
                            lng={defaultProps.center.lng}
                        />
                    </GoogleMapReact>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default HomeP3;

"use client";

import { motion } from "framer-motion";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import CogitoLogo from "../public/cogito_white.svg";

const links = [
    { href: "/", text: "Hjem" },
    { href: "/about", text: "Om oss" },
    { href: "/projects", text: "Prosjekter" },
    { href: "/team", text: "Medlemmer" },
];

const Navbar = () => (
    <>
        <motion.nav
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className={styles.navigation}
        >
            <div className={styles.setup}>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link href="/">
                        <Image
                            src={CogitoLogo}
                            height="90"
                            width="80"
                            alt="CogitoLogo"
                        />
                    </Link>
                </motion.div>

                <ul className={styles.links}>
                    {links.map((link) => (
                        <Link className={styles.link} href={link.href}>
                            {link.text}
                        </Link>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.button}
                    >
                        <p className={styles.buttonText}>Søk opptak</p>
                    </motion.button>
                </ul>
            </div>
        </motion.nav>
    </>
);

export default Navbar;

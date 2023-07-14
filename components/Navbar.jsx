"use client";

import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import CogitoLogo from "../public/cogito_white.svg";

const Navbar = () => {
    const links = [
        { href: "/", text: "Hjem" },
        { href: "/about", text: "Om oss" },
        { href: "/projects", text: "Prosjekter" },
        { href: "/team", text: "Medlemmer" },
    ];

    return (
        <nav className={styles.navigation}>
            <div className={styles.setup}>
                <Link href="/">
                    <Image
                        src={CogitoLogo}
                        height="90"
                        width="80"
                        alt="CogitoLogo"
                    />
                </Link>
                <ul className={styles.links}>
                    {links.map((link) => (
                        <Link className={styles.link} href={link.href}>

                            {link.text}
                        </Link>
                    ))}
                    <button className={styles.button}>
                        <p className={styles.buttonText}>Søk opptak</p>
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

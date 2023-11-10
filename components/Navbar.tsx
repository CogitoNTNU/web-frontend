"use client";

import { motion } from "framer-motion";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import CogitoLogo from "../public/cogito_white.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";

const Dot = () => {
    return (
        <>
            <div className="w-[20px]">
                <div className="w-2 h-2 rounded-xl bg-white"></div>
            </div>
        </>
    );
};

const Navbar = () => {
    const router = useRouter();
    const [onlyLogo, setOnlyLogo] = useState<boolean>(false);
    const [page, setPage] = useState<string>("");

    const navbarLinks = [
        {
            title: "Hjem",
            link: "/",
        },
        {
            title: "Om Oss",
            link: "/about",
        },
        // {
        //     title: "Prosjekter",
        //     link: "/projects",
        // },
        {
            title: "Medlemmer",
            link: "/team",
        },
    ];

    const links = { "/": "Hjem", "/about": "Om Oss", "/team": "Medlemmer" };

    function timeout(delay: number) {
        return new Promise((res) => setTimeout(res, delay));
    }

    const changeAndGo = async () => {
        router.push("/loading");
        await timeout(500);
        router.push("/");
    };

    useEffect(() => {
        if (router.pathname == "/") {
            changeAndGo();
        }
        setPage(links[router.pathname]);
    }, []);

    useEffect(() => {
        setOnlyLogo(false);
        if (
            router.pathname.includes("/projects") &&
            router.pathname.length > 10
        ) {
            setOnlyLogo(true);
        }
    });

    const scrollToTop = async () => {
        await timeout(100);
        if (router.pathname == "/") {
            document
                .getElementById("part-0")
                .scrollIntoView({ behavior: "smooth" });
        }
    };

    const buttonClass = classNames(
        "flex",
        "items-center",
        "justify-center",
        "h-full"
    );

    return (
        <>
            <nav className="flex flex-row w-full h-[120px] px-[4%] text-lg fixed z-50 text-white">
                <Link
                    onClick={() => {
                        setPage("Hjem");
                        scrollToTop();
                    }}
                    href={"/"}
                >
                    <div className="flex items-center h-full">
                        <img
                            className="sm:w-[90px] w-[60px]"
                            src="/cogito_white.svg"
                            alt="logo"
                        />
                    </div>
                </Link>
                {!onlyLogo && (
                    <div className="sm:visible sm:flex flex-row h-full w-full justify-end hidden gap-[60px]">
                        {navbarLinks.map((data) => (
                            <Link
                                onClick={() => setPage(data.title)}
                                key={data.title}
                                href={data.link}
                            >
                                <div className={buttonClass}>
                                    <div
                                        className="h-full items-center justify-center flex"
                                        style={{
                                            visibility:
                                                page == `${data.title}`
                                                    ? "visible"
                                                    : "hidden",
                                        }}
                                    >
                                        <Dot />
                                    </div>
                                    <span>{data.title}</span>
                                </div>
                            </Link>
                        ))}
                        <div className="flex items-center justify-center h-full">
                            <Link
                                onClick={() => setPage("Søk Opptak")}
                                href={"/apply"}
                            >
                                <button className="px-[40px] py-[10px] bg-pink-default rounded-3xl">
                                    <p className="font-medium">Søk Opptak</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;

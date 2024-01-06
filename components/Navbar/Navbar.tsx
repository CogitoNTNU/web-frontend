"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Hamburger from "hamburger-react";
import {
    motion,
    useScroll,
    useMotionValueEvent,
    AnimatePresence,
} from "framer-motion";
import Button from "../Buttons/Button";
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from "body-scroll-lock";

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
    const [hidden, setHidden] = useState<boolean>(false);
    const { scrollY } = useScroll();
    const [isOpen, setOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 100) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const navbarLinks = [
        {
            title: "Hjem",
            link: "/",
        },
        {
            title: "Om Oss",
            link: "/about",
        },
        {
            title: "Prosjekter",
            link: "/projects",
        },
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

    useEffect(() => {
        const targetElement = document.querySelector("body");
        if (isOpen) {
            disableBodyScroll(targetElement);
        } else {
            enableBodyScroll(targetElement);
        }
    }, [isOpen]);

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
            <motion.nav
                variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-row w-full h-[120px] px-[4%] text-lg fixed text-white z-[100]"
            >
                <Link
                    onClick={() => {
                        setPage("Hjem");
                        scrollToTop();
                    }}
                    href={"/"}
                >
                    <div className="flex items-center h-full">
                        <img
                            className="tablet:w-[90px] w-[80px]"
                            src="/cogito_white.svg"
                            alt="logo"
                        />
                    </div>
                </Link>
                {!onlyLogo && (
                    <div className="flex-row h-full w-full ">
                        <div className="laptop:flex flex-row h-full w-full justify-end hidden gap-[40px]">
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
                                    <Button
                                        text={"Søk Opptak"}
                                        px={"8"}
                                        py={"4"}
                                        color={"pink"}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="items-center justify-end h-full flex visible laptop:hidden">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                    </div>
                )}
            </motion.nav>
            <div className="w-full h-full overflow-hidden">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: -100 }}
                            transition={{
                                duration: 0.5,
                                delay: 0,
                                ease: [0, 0.71, 0.2, 1.0],
                            }}
                            animate={{ x: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute right-0 top-0 bg-blue-darker w-full h-full px-8 z-[90]"
                        >
                            <div className="flex flex-col justify-end text-end gap-4 pt-[120px]">
                                {navbarLinks.map((data) => (
                                    <Link
                                        onClick={() => setPage(data.title)}
                                        key={data.title}
                                        href={data.link}
                                    >
                                        <div className="text-white font-medium text-[20px]">
                                            <span
                                                onClick={() => setOpen(false)}
                                            >
                                                {data.title}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                                <div className="pt-[10px]">
                                    <Link
                                        onClick={() => setPage("Søk Opptak")}
                                        href={"/apply"}
                                    >
                                        <Button
                                            text={"Søk Opptak"}
                                            px={"8"}
                                            py={"4"}
                                            color={"pink"}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Navbar;

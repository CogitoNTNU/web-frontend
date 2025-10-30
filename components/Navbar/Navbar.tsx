"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Hamburger from "hamburger-react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import Button from "../Buttons/Button";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const containerVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
  exit: { opacity: 0 },
} as const;

interface NavbarProps {
  onlyLogo?: boolean;
  page: string;
}

const Navbar = ({ page, onlyLogo = false }: NavbarProps) => {
  const pathname = usePathname();
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const [isOpen, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  const navbarLinks = [
    {
      title: "Hjem",
      actual: "home",
      link: "/",
    },
    {
      title: "Om Oss",
      actual: "about",
      link: "/about",
    },
    {
      title: "Prosjekter",
      actual: "projects",
      link: "/projects",
    },
    {
      title: "Medlemmer",
      actual: "team",
      link: "/team",
    },
    {
      title: "Kalender",
      actual: "calendar",
      link: "/calendar",
    },
  ];

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    const bodyElement = document.body;

    if (!bodyElement) {
      return;
    }

    if (isOpen) {
      disableBodyScroll(bodyElement);
      return () => {
        enableBodyScroll(bodyElement);
      };
    }

    enableBodyScroll(bodyElement);

    return undefined;
  }, [isOpen]);

  const scrollToTop = async () => {
    await timeout(100);
    if (pathname == "/") {
      document.getElementById("part-0")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const burgerChangePage = () => {
    setOpen(false);
  };

  const buttonClass = classNames(
    "border-b-2",
    "border-white",
    "border-spacing-2",
    "py-[2px]",
    "rounded-sm"
  );

  const hoverClass = classNames(
    "group-hover:border-b-2",
    "transition-all",
    "border-white",
    "border-spacing-1",
    "rounded-sm"
  );

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex flex-row w-full h-[120px] tablet:px-20 px-6 text-lg fixed text-white z-100"
      >
        <Link
          onClick={async () => {
            await scrollToTop();
          }}
          href={"/"}
        >
          <div className="flex items-center h-full">
            <img
              className="tablet:w-[90px] w-20"
              src="/cogito_white.svg"
              alt="logo"
            />
          </div>
        </Link>
        {!onlyLogo && (
          <div className="flex-row h-full w-full ">
            <div className="laptop:flex flex-row h-full w-full justify-end hidden gap-10">
              {navbarLinks.map((data) => (
                <Link key={data.title} href={data.link}>
                  <div className="h-full flex justify-center items-center group">
                    <div
                      className={page !== data.actual ? hoverClass : undefined}
                    >
                      <span
                        className={
                          page == data.actual ? buttonClass : undefined
                        }
                      >
                        {data.title}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="flex items-center justify-center h-full">
                <Link href={"/apply"}>
                  <Button text={"Søk Opptak"} color={"pink"} />
                </Link>
              </div>
            </div>
            <div className="items-center justify-end h-full flex visible laptop:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        )}
      </motion.nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 bg-blue-darker w-full h-full px-24 z-90"
          >
            <div className="flex flex-col justify-end text-end gap-4 pt-[120px]">
              {navbarLinks.map((data) => (
                <motion.div key={data.title} variants={itemVariants}>
                  <Link onClick={() => burgerChangePage()} href={data.link}>
                    <div className="text-white font-medium text-[20px]">
                      <span
                        className={
                          page == data.actual ? buttonClass : undefined
                        }
                      >
                        {data.title}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
              <motion.div className="pt-2.5" variants={itemVariants}>
                <Link onClick={() => burgerChangePage()} href={"/apply"}>
                  <Button text={"Søk Opptak"} color={"pink"} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

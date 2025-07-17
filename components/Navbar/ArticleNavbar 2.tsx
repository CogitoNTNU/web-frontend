import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectNavbarProps {
  semester: string;
}
const ProjectNavbar = ({ semester }: ProjectNavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 2 }}
      className="flex h-36 justify-between px-40 bg-gradient-to-b from-black-dark/30 from-20% to-transparent items-center fixed z-[100] w-screen"
    >
      <Link href={"/projects"} className="w-36">
        <FaChevronLeft className="text-white text-4xl cursor-pointer" />
      </Link>
      <Link href={"/"} className="w-36 flex justify-center">
        <img className="w-[80px]" src="/cogito_white.svg" alt="logo" />
      </Link>
      <p className="text-2xl text-white cursor-default w-36">{semester}</p>
    </motion.nav>
  );
};

export default ProjectNavbar;

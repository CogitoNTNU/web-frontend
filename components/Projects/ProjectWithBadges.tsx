import Image from "next/image";
import Icon from "../Icons/Icon";
import Link from "next/link";
import { FaBookOpen, FaPlay, FaGamepad, FaBook } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

interface ProjectProps {
  name: string;
  url: string;
  github: string;
  playable?: boolean;
  hybrid?: boolean;
  playableUrl?: string;
  released: boolean;
  img: string;
}

const Project = ({
  name,
  url,
  img,
  github,
  playable = false,
  hybrid = false,
  playableUrl,
  released,
}: ProjectProps) => {
  return (
    <div className={`${released && "group"} relative`}>
      <div className="h-[20rem] w-[14rem] relative">
        {/* Badge indicators in corner */}
        {hybrid && released && (
          <div className="absolute -top-2 -right-2 z-[60] flex gap-1">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 shadow-lg border-2 border-white">
              <FaGamepad className="text-white text-sm" />
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-2 shadow-lg border-2 border-white">
              <FaBook className="text-white text-sm" />
            </div>
          </div>
        )}
        
        <div
          className={`${released ? "group-hover:bg-black-dark opacity-90 transition-all" : "bg-black-dark opacity-90"} h-full w-full  z-50 relative rounded-3xl`}
        >
          {released ? (
            <>
              <div className="absolute top-4 left-4 group-hover:opacity-100 opacity-0 transition-opacity">
                <Link href={github}>
                  <Icon icon="Github" size={"40px"} />
                </Link>
              </div>
              <div className="w-full h-full z-50 flex items-center justify-center">
                {hybrid ? (
                  // Elegant stacked option for hybrid projects
                  <Link
                    href={url}
                    className="flex-col items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity text-white space-y-3"
                  >
                    <div className="relative">
                      {/* Animated dual icon */}
                      <div className="flex items-center justify-center gap-2">
                        <FaBookOpen className="text-5xl animate-pulse" />
                        <HiSparkles className="text-2xl text-yellow-400" />
                        <FaPlay className="text-5xl animate-pulse animation-delay-150" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold">Utforsk Prosjektet</p>
                      <p className="text-xs opacity-75 mt-1">Les & Prøv ut</p>
                    </div>
                  </Link>
                ) : playable ? (
                  <Link
                    className="flex-col items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity text-white space-y-2"
                    href={url}
                  >
                    <FaPlay className="w-full text-6xl cursor-pointer" />
                    <p className="text-lg">Prøv ut selv</p>
                  </Link>
                ) : (
                  <Link
                    href={url}
                    className="flex-col items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity text-white space-y-2"
                  >
                    <FaBookOpen className="w-full text-6xl cursor-pointer text-white" />
                    <p className="text-lg">Les om her</p>
                  </Link>
                )}
              </div>
            </>
          ) : (
            <div className="w-full h-full z-50 flex items-center justify-center">
              <p className="text-white cursor-default text-lg">Kommer snart</p>
            </div>
          )}
        </div>
        <Image
          src={img}
          alt={name}
          draggable={false}
          fill
          className="object-cover object-center rounded-3xl z-40"
        />
      </div>
      <div className="pt-3">
        <p className="text-lg tracking-wider text-white cursor-default">
          {name}
        </p>
        {/* Small indicators below name */}
        {hybrid && (
          <div className="flex gap-2 mt-1">
            <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">
              📖 Artikkel
            </span>
            <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full">
              🎮 Interaktiv
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
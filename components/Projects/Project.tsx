import Image from "next/image";
import Icon from "../Icons/Icon";
import Link from "next/link";
import { FaBookOpen, FaPlay } from "react-icons/fa";

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
      <div className="h-80 w-56 relative">
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
                  // Clean split view for hybrid projects
                  <div className="group-hover:opacity-100 opacity-0 transition-opacity w-full h-full flex flex-col">
                    {/* Top half - Read */}
                    <Link
                      href={url}
                      className="flex-1 flex flex-col items-center justify-center text-white hover:bg-white/10 transition-colors border-b border-white/20"
                    >
                      <FaBookOpen className="text-4xl mb-2" />
                      <p className="text-sm font-medium">Les Artikkel</p>
                    </Link>

                    {/* Bottom half - Play */}
                    <Link
                      href={playableUrl || url}
                      className="flex-1 flex flex-col items-center justify-center text-white hover:bg-white/10 transition-colors"
                    >
                      <FaPlay className="text-4xl mb-2" />
                      <p className="text-sm font-medium">Prøv Demo</p>
                    </Link>
                  </div>
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

        {/* Corner indicator for hybrid projects */}
        {hybrid && released && (
          <div className="absolute top-2 right-2 z-60">
            <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-lg px-2 py-1 shadow-lg">
              <p className="text-[10px] font-bold text-white flex items-center gap-1">
                <FaBookOpen className="text-[8px]" />
                +
                <FaPlay className="text-[8px]" />
              </p>
            </div>
          </div>
        )}
      </div>
      <p className="pt-3 text-lg tracking-wider text-white cursor-default">
        {name}
      </p>
    </div>
  );
};

export default Project;

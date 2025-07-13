import Image from "next/image";
import Icon from "../Icons/Icon";
import Link from "next/link";
import { FaBookOpen, FaPlay } from "react-icons/fa";

interface ProjectProps {
  name: string;
  url: string;
  github: string;
  playable?: boolean;
  released: boolean;
  img: string;
}

const Project = ({
  name,
  url,
  img,
  github,
  playable = false,
  released,
}: ProjectProps) => {
  return (
    <div className={`${released && "group"}`}>
      <div className="h-[20rem] w-[14rem] relative">
        <div
          className={`${released ? "group-hover:bg-black-dark opacity-90 transition-all" : "bg-black-dark opacity-90"} h-full w-full  z-50 relative rounded-3xl`}
        >
          {released ? (
            <>
              {name !== "TV2 x Cogito" && (
                <div className="absolute top-4 left-4 group-hover:opacity-100 opacity-0 transition-opacity">
                  <Link href={github}>
                    <Icon icon="Github" size={"40px"} />
                  </Link>
                </div>
              )}
              <div className="w-full h-full z-50 flex items-center justify-center">
                {playable ? (
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
      <p className="pt-3 text-lg tracking-wider text-white cursor-default">
        {name}
      </p>
    </div>
  );
};

export default Project;

import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface ProjectFooterProps {
  name: string;
  description: string;
  LogoName: string;
  githubUrl: string;
}

const ProjectFooter: React.FC<ProjectFooterProps> = ({
  name,
  description,
  LogoName,
  githubUrl,
}) => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="flex flex-row w-full h-[120px] bg-purple items-center px-[4%] py-[4%] text-white">
        <Link href={`/`}>
          <div className="flex flex-row items-center justify-center">
            <img
              className="pt-2 tablet:w-[130px] w-[60px]"
              src={"/Logos/" + LogoName}
              alt="companylogo"
            />
            <div className="w-[100px]">
              <p className="tablet:w-[150px] w-[80px] font-semibold tablet:text-lg text-[8px]">
                {name}
              </p>
              <p className="font-regular tablet:text-xs text-[8px]">
                {"Copyright © " + year}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex flex-row h-full w-full items-center justify-end text-sm">
          <div className="text-right tablet:w-[400px] w-[200px]">
            <div className="flex align-middle justify-end tablet:text-xl text-[10px] tablet:gap-2 pb-1">
              <AiFillGithub className="tablet:text-3xl text-[16px]" />
              <a href={githubUrl} className="font-bold">
                Source Code
              </a>
            </div>
            <p className="tablet:text-xs text-[6px]">{description}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProjectFooter;

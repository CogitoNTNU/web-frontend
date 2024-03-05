"use client";

import { motion } from "framer-motion";
import Icon from "../Icons/Icon";
import Image from "next/image";
import { isSafari } from "react-device-detect";
// Images
import tempImage from "../../public/Team/Default.png";
import { useEffect } from "react";

interface Member {
  name: string;
  title: string;
  githubURL?: string;
  imageURL?: string;
  linkedinURL?: string;
  mailURL?: string;
}

const Member = ({
  name,
  title,
  imageURL,
  githubURL,
  linkedinURL,
  mailURL,
}: Member) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${process.env.endpoint}${src}?w=${width}&q=${quality || 75}`;
  };

  useEffect(() => {
    console.log(imageURL);
  }, [imageURL]);

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.0],
        }}
        className="text-gray-default"
      >
        {!isSafari ? (
          <div className="bg-gray-lighter w-[250px] h-[350px] rounded-3xl group overflow-hidden drop-shadow-lg ease-in-out">
            <div className="z-40 absolute w-full h-full bg-gradient-to-b from-transparent to-white from-60% to-90% group-hover:from-40% group-hover:to-80% transition-all flex flex-col justify-end">
              <div className="px-4 py-3 group-hover:-translate-y-2 transition-transform">
                <p className="tracking-wide">{name}</p>
                <p className="tracking-wider font-bold">{title}</p>
              </div>
              <div className="px-4 pb-4 hidden group-hover:flex gap-2 z-50">
                {linkedinURL && (
                  <a href={linkedinURL}>
                    <Icon icon={"Linkedin"} color="gray" />
                  </a>
                )}
                {githubURL && (
                  <a href={githubURL}>
                    <Icon icon={"Github"} color="gray" />
                  </a>
                )}
                {mailURL && (
                  <a href={`mailto:${mailURL}`}>
                    <Icon icon={"Mail"} color="gray" />
                  </a>
                )}
              </div>
            </div>
            <Image
              loader={imageLoader}
              className="object-cover w-full h-full rounded-3xl transition-transform transform group-hover:scale-105 ease-in"
              src={imageURL ? imageURL : tempImage}
              alt="image"
              width={30}
              height={40}
            />
          </div>
        ) : (
          <div className="w-fit h-fit bg-gray-default rounded-3xl">
            <div className="bg-gray-lighter w-[250px] h-[250px] rounded-t-3xl overflow-hidden">
              <div className="z-40 absolute w-full h-full justify-end"></div>
              <Image
                loader={imageLoader}
                className="object-cover w-full h-[265px]"
                src={imageURL ? imageURL : tempImage}
                alt="image"
                width={30}
                height={40}
              />
            </div>
            <div className="px-3 py-3 flex text-white h-full items-center">
              <p className="tracking-wide w-full text-[15px]">{name}</p>
              <p className="tracking-wider font-semibold flex justify-end text-[20px]">
                {title}
              </p>
            </div>

            <div className="px-4 pb-4 gap-4 justify-center flex">
              {linkedinURL && (
                <a href={linkedinURL} className="z-[60]">
                  <Icon icon={"Linkedin"} color="white" />
                </a>
              )}
              {githubURL && (
                <a href={githubURL} className="z-[60]">
                  <Icon icon={"Github"} color="white" />
                </a>
              )}
              {mailURL && (
                <a href={`mailto:${mailURL}`} className="z-[60]">
                  <Icon icon={"Mail"} color="white" />
                </a>
              )}
            </div>
          </div>
        )}
      </motion.main>
    </>
  );
};

export default Member;

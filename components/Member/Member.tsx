"use client";

import { motion } from "framer-motion";
import Icon from "../Icons/Icon";
import Image from "next/image";
import { isSafari } from "react-device-detect";
import { Member } from "../../lib/types";

type MemberCardProps = {
  member: Member;
};

const MemberCard = ({ member }: MemberCardProps) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${process.env.endpoint}${src}?w=${width}&q=${quality || 75}`;
  };

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
                <p className="tracking-wide">{member.name}</p>
                <p className="tracking-wider font-bold text-[14px]">
                  {member.title}
                </p>
              </div>
              <div className="px-4 pb-4 hidden group-hover:flex gap-2 z-50">
                {member.linkedIn && (
                  <a href={member.linkedIn}>
                    <Icon icon={"Linkedin"} color="gray" />
                  </a>
                )}
                {member.github && (
                  <a href={member.github}>
                    <Icon icon={"Github"} color="gray" />
                  </a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`}>
                    <Icon icon={"Mail"} color="gray" />
                  </a>
                )}
              </div>
            </div>
            <Image
              loader={member.image ? imageLoader : null}
              className="object-cover w-full h-full rounded-3xl transition-transform transform group-hover:scale-105 ease-in"
              src={member.image ? member.image : "/Team/NoImage.svg"}
              alt="image"
              width={30}
              height={40}
            />
          </div>
        ) : (
          <div className="w-[250px] h-fit min-h-[370px] bg-gray-default rounded-3xl">
            <div className="bg-gray-lighter w-[250px] h-[250px] rounded-t-3xl overflow-hidden">
              <div className="z-40 absolute w-full h-full justify-end"></div>
              <Image
                loader={member.image ? imageLoader : null}
                className="object-cover w-full h-[265px]"
                src={member.image ? member.image : "/Team/NoImage.svg"}
                alt="image"
                width={30}
                height={40}
              />
            </div>
            <div className="px-3 py-3 text-white h-full items-center">
              <p className="tracking-wide w-full text-[14px] break-before-all">
                {member.name}
              </p>
              <p className="tracking-wider font-medium  text-[12px]">
                {member.title}
              </p>
            </div>

            <div className="px-4 pb-4 gap-4 justify-center flex">
              {member.linkedIn && (
                <a href={member.linkedIn} className="z-[60]">
                  <Icon icon={"Linkedin"} color="white" />
                </a>
              )}
              {member.github && (
                <a href={member.github} className="z-[60]">
                  <Icon icon={"Github"} color="white" />
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`} className="z-[60]">
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

export default MemberCard;

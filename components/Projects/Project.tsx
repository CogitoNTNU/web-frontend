import Image from "next/image";
import New from "../Notification/New";
import { motion } from "framer-motion";

// Images
import Button from "../Buttons/Button";
import Icon from "../Icons/Icon";
import Link from "next/link";
import { ProjectType } from "../../types/types";

const Project = ({
  image,
  laptopDesc,
  phoneDesc,
  link,
  github,
  leaders,
  new: isNew = false,
}: ProjectType) => {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
        }}
        className="relative flex tablet:w-[600px] w-[350px] tablet:h-[120px] h-[110px] bg-white rounded-2xl z-50 group hover:h-[210px] transition-all"
      >
        {isNew && (
          <div className="absolute -top-4 -right-4">
            <New />
          </div>
        )}
        <div className="cursor-default">
          <Link href={link}>
            <Image
              draggable={false}
              src={image}
              alt={"Image Logo"}
              className="tablet:w-[320px] w-[280px] items-center flex absolute object-cover"
            />
          </Link>
          <div className="tablet:w-[300px] w-[240px] bg-red-default h-full transition-transform rounded-l-2xl text-white">
            <div className="flex pt-[120px] pl-4 justify-start gap-2 group-hover:opacity-100 opacity-0 transition-all ease-in-out">
              <div className="flex gap-2 items-center h-full">
                <p className="text-[20px] font-bold">Prosjektleder(e)</p>
                <Icon icon={"Users"} size="20px" />
              </div>
            </div>
            <div className="text-[14px] text-medium pl-4 ">
              {leaders.map((leader) => (
                <p key={leader}>{leader}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="tablet:py-8 py-10 px-4">
          <p className="tablet:block hidden text-[14px] cursor-default">
            {laptopDesc}
          </p>
          <p className="tablet:hidden block text-[13px] cursor-default">
            {phoneDesc}
          </p>
          <div className="absolute bottom-6 tablet:flex justify-center tablet:gap-2 group-hover:opacity-100 opacity-0 transition-all ease-in-out pl-2">
            <div className="pt-1">
              <Link href={link}>
                <Button
                  text={"Prøv Ut"}
                  icon="Play"
                  px={"4"}
                  py={"2"}
                  color={"blue"}
                />
              </Link>
            </div>

            <div className="pt-1">
              <Link href={github}>
                <Button
                  text={"Github"}
                  icon="GithubFeather"
                  px={"4"}
                  py={"2"}
                  color={"gray"}
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Project;

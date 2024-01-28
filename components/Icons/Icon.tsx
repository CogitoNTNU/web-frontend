import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

import {
  FiArrowRight,
  FiArrowLeft,
  FiInfo,
  FiPlay,
  FiGithub,
  FiUsers,
} from "react-icons/fi";

interface IconProps {
  icon: string;
  size?: string;
  color?: string;
}

const Icon = ({ icon, size = "40px", color }: IconProps) => {
  return (
    <>
      <div className="text-white" style={{ color: color, fontSize: size }}>
        {icon == "Instagram" && <AiFillInstagram />}
        {icon == "Facebook" && <AiFillFacebook />}
        {icon == "Linkedin" && <AiFillLinkedin />}
        {icon == "Github" && <AiFillGithub />}
        {icon == "Mail" && <AiFillMail />}

        {icon == "Play" && <FiPlay />}

        {icon == "Users" && <FiUsers />}

        {icon == "GithubFeather" && <FiGithub />}

        <div className="group-hover:translate-x-2 transition-transform ease-linear tablet:block hidden">
          {icon == "ArrowRight" && <FiArrowRight />}
        </div>
        <div className="group-hover:-translate-x-2 transition-transform ease-linear tablet:block hidden">
          {icon == "ArrowLeft" && <FiArrowLeft />}
        </div>
        <div className="group-hover:scale-105 transition-transform ease-linear tablet:block hidden">
          {icon == "Info" && <FiInfo />}
        </div>
      </div>
    </>
  );
};

export default Icon;

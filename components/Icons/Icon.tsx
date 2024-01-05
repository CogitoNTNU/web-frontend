import {
    AiFillInstagram,
    AiFillFacebook,
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail,
} from "react-icons/ai";

interface IconProps {
    icon: string;
    color?: string;
}

const Icon = ({ icon, color }: IconProps) => {
    return (
        <>
            <div className="text-white text-[40px]" style={{ color: color }}>
                {icon == "Instagram" && <AiFillInstagram />}
                {icon == "Facebook" && <AiFillFacebook />}
                {icon == "Linkedin" && <AiFillLinkedin />}
                {icon == "Github" && <AiFillGithub />}
                {icon == "Mail" && <AiFillMail />}
            </div>
        </>
    );
};

export default Icon;

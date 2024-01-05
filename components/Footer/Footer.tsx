import Icon from "../Icons/Icon";

const Footer = () => {
    return (
        <div className="flex h-full sm:py-[100px] py-[50px] justify-center items-center laptop:gap-[400px] tablet:gap-[250px] gap-[40px] laptop:px-[40px] px-[10px]">
            <div className="text-white">
                <div className="laptop:text-[20px] tablet:text-[18px] phone:text-[14px] text-[13px] font-bold">
                    <p>Cogito NTNU © 2023</p>
                </div>
                <div className="laptop:text-[18px] tablet:text-[16px] text-[12px]">
                    <p>Org.Nr. 920 628 788</p>
                </div>
            </div>

            <div className="flex align-middle h-full gap-1 justify-center">
                <a href="https://www.facebook.com/CogitoNTNU">
                    <Icon icon="Facebook" />
                </a>
                <a href="https://www.instagram.com/cogitontnu/">
                    <Icon icon="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/cogito-ntnu/">
                    <Icon icon="Linkedin" />
                </a>
                <a href="https://github.com/CogitoNTNU">
                    <Icon icon="Github" />
                </a>
            </div>
        </div>
    );
};

export default Footer;

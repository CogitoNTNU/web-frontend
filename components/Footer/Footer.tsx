import Icon from "../Icons/Icon";

const Footer = () => {
  return (
    <div className="flex h-36 justify-center items-center laptop:gap-[400px] tablet:gap-[250px] gap-[40px] px-[10px] ">
      <div className="text-white">
        <div className="laptop:text-[20px] tablet:text-[18px] phone:text-[14px] text-[12px] font-bold">
          <p>Cogito NTNU © {new Date().getFullYear()}</p>
        </div>
        <div className="laptop:text-[18px] tablet:text-[16px] text-[10px]">
          <p>Org.Nr. 920 628 788</p>
        </div>
      </div>

      <div className="flex align-middle h-full gap-1 justify-center items-center">
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

import Icon from "../Icons/Icon";

interface ButtonProps {
  text: string;
  textSize?: string;
  icon?: "ArrowRight" | "ArrowLeft" | "Info" | "GithubFeather" | "Play";
  iconPos?: "left" | "right";
  color: "pink" | "blue" | "gray";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  text,
  textSize,
  icon,
  iconPos = "right",
  color,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const buttonClasses = `
    ${!disabled ? "text-white" : "text-gray-lighter"}
    ${!disabled ? "hover:bg-blue-darker" : null}
    ${disabled ? "hover:text-black" : null}
    ${!disabled ? `bg-${color}-default` : "bg-gray-default"}
    ${!disabled ? "group" : null}
    phone:grow-0
    grow
    transition-all
    px-6
    py-4
    shadow-md
    rounded-3xl
  `;
  return (
    <>
      <button onClick={onClick} disabled={disabled} className={buttonClasses}>
        <div className="flex justify-center gap-2 items-center ">
          {icon && iconPos == "left" && <Icon size="24px" icon={icon} />}
          {icon == "GithubFeather" && (
            <p
              className="tablet:block hidden font-medium"
              style={{ fontSize: textSize }}
            >
              {text}
            </p>
          )}
          {icon == "Play" && (
            <p
              className="tablet:block hidden font-medium"
              style={{ fontSize: textSize }}
            >
              {text}
            </p>
          )}
          {icon !== "GithubFeather" && icon !== "Play" && (
            <p className="font-medium" style={{ fontSize: textSize }}>
              {text}
            </p>
          )}

          {icon && iconPos == "right" && <Icon size="24px" icon={icon} />}
        </div>
      </button>
    </>
  );
};

export default Button;

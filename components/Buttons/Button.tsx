import classNames from "classnames";
import Icon from "../Icons/Icon";

interface ButtonProps {
  text: string;
  textSize?: string;
  px: string;
  py: string;
  icon?: "ArrowRight" | "ArrowLeft" | "Info" | "GithubFeather" | "Play";
  iconPos?: "left" | "right";
  color: "pink" | "blue" | "gray";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  text,
  textSize,
  px,
  py,
  icon,
  iconPos = "right",
  color,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const buttonClasses = classNames(
    !disabled ? "text-white" : "text-gray-lighter",
    !disabled ? "hover:bg-blue-darker" : null,
    !disabled ? "hover:text-black" : null,
    !disabled ? `bg-${color}-default` : "bg-gray-default",
    !disabled ? "group" : null,
    "transition-all",

    `px-${px}`,
    `py-${py}`,
    "rounded-3xl"
  );
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

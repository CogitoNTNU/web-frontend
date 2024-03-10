import classNames from "classnames";
import { useEffect, useState } from "react";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  small?: boolean;
  currentClicked: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const RadioButton = ({
  text,
  disabled = false,
  small = false,
  currentClicked,
  onClick,
}: ButtonProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const buttonClasses = classNames(
    !disabled ? "text-white" : "text-gray",
    !disabled ? "hover:bg-blue-darker" : null,
    !disabled ? "hover:text-black" : null,
    clicked ? "bg-blue-dark" : "bg-gray-default",
    "transition-all",
    small ? "tablet:text-[14px] text-[10px]" : "tablet:text-[18px] text-[14px]",
    small ? "tablet:px-10 px-4" : "tablet:px-8 px-6",
    small ? "py-2" : "tablet:py-3 py-2",
    "rounded-3xl",
    "transition-all"
  );

  useEffect(() => {
    if (currentClicked == text) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [currentClicked, text]);

  return (
    <>
      <button onClick={onClick} className={buttonClasses}>
        <p className="font-medium">{text}</p>
      </button>
    </>
  );
};
export default RadioButton;

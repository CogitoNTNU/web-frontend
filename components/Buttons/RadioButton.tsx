import classNames from "classnames";
import { useEffect, useState } from "react";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  currentClicked: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const RadioButton = ({
  text,
  disabled = false,
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
    "text-[14px]",
    "tablet:text-[18px]",
    `tablet:px-8`,
    `tablet:py-3`,
    "px-6",
    "py-2",
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

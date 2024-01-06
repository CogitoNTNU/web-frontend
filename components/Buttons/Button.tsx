import classNames from "classnames";

interface ButtonProps {
    text: string;
    px: string;
    py: string;
    color: "pink" | "blue";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
    text,
    px,
    py,
    color,
    disabled = false,
    onClick,
}: ButtonProps) => {
    const buttonClasses = classNames(
        !disabled ? "text-white" : "text-gray",
        !disabled ? "hover:bg-blue-darker" : null,
        !disabled ? "hover:text-black" : null,
        "transition-all",
        `bg-${color}-default`,
        `px-${px}`,
        `py-${py}`,
        "rounded-3xl"
    );
    return (
        <>
            <button onClick={onClick} className={buttonClasses}>
                <p className="font-medium">{text}</p>
            </button>
        </>
    );
};

export default Button;

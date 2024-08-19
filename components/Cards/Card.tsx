import React from "react";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={
        "z-40 m-5 tablet:h-[500px] h-fit tablet:w-[500px] phone:w-[400px] bg-blue-darker rounded-[24px] p-6 " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Card;

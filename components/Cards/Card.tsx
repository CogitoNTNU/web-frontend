import React from 'react';

interface CardProps {
    children?: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={'z-40 m-[20px] w-[500px] h-fit bg-blue-darker rounded-[24px] p-[24px] ' + className}>
            {children}
        </div>
    );
};

export default Card;
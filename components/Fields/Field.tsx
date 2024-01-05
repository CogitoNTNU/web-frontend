import React from "react";
import { FiChevronRight } from "react-icons/fi";

interface FieldProps {
    label?: string;
    placeholder?: string;
    value: string;
    onClick: Function;
    setValue: Function;
    onChange?: (value: string) => void;
}

const Field = ({
    label,
    placeholder,
    value,
    onClick,
    setValue,
    onChange,
}: FieldProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="flex flex-row align-middle z-50 gap-4 tablet:text-lg text-[12px] px-12 py-2 tablet:w-[700px] w-[600px]">
            {label && <label className="px-4">{label}</label>}
            <input
                className="bg-white w-full tablet:h-[60px] h-[40px] outline-none border-none border-transparent rounded-md px-4"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
            <button
                onClick={() => onClick()}
                className="bg-white rounded-md tablet:px-6 px-4 group"
            >
                <FiChevronRight className="group-hover:translate-x-2 transition-transform delay-75" />
            </button>
        </div>
    );
};

export default Field;

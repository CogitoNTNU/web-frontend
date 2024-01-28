import React, { useCallback, useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

interface FieldProps {
  id?: string;
  label?: string;
  type: string;
  placeholder?: string;
  value: string;
  onClick?: () => void;
  setValue: (value: string) => void;
  activeButton?: boolean;
  errorArray?: Array<string>;
  onChange?: (value: string) => void;
}

const Field = ({
  id,
  label,
  type,
  placeholder,
  value,
  onClick,
  setValue,
  activeButton = false,
  errorArray = [],
  onChange,
}: FieldProps) => {
  /**
   * Different from handle change in number fields.
   * Adds the clicked character.
   * @param event for when new input is added in search or text field
   */
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    if (newValue.match(/[^0-9+]/g) && type == "numbers") {
      return;
    }
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onClick) {
      onClick();
    }
  };

  const [textRed, setTextRed] = useState<boolean>(false);

  const setError = useCallback(() => {
    if (errorArray !== null) {
      if (errorArray.includes(id)) {
        setTextRed(true);
      }
    }
  }, [errorArray, id]);

  useEffect(() => {
    setTextRed(false);
    setError();
  }, [errorArray, setError]);

  return (
    <>
      {label && (
        <label
          style={{ color: textRed ? "red" : "black" }}
          className="font-medium"
        >
          {label}
        </label>
      )}
      {type == "text" && (
        <input
          className="bg-white w-full tablet:h-[50px] h-[30px] outline-none border-none border-transparent rounded-md px-4"
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
      )}

      {type == "numbers" && (
        <input
          className="bg-white w-full tablet:h-[50px] h-[30px] outline-none border-none border-transparent rounded-md px-4"
          type="text"
          inputMode="numeric"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}

      {type == "area" && (
        <textarea
          className="bg-white w-full h-[225px] resize-none outline-none border-none border-transparent rounded-md px-4 py-4"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}

      {activeButton && (
        <button
          onClick={() => onClick()}
          className="bg-white rounded-md tablet:px-6 px-4 group"
        >
          <FiChevronRight className="group-hover:translate-x-2 transition-transform delay-75" />
        </button>
      )}
    </>
  );
};

export default Field;

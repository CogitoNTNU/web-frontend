import { useState } from "react";
import { motion } from "framer-motion";
import { MdLockOutline } from "react-icons/md";

const TestHideShow = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        id="password"
        type={showPassword ? "text" : "password"}
        className="w-full px-4 py-3 pr-16 rounded-xl border-2 border-gray-300 focus:border-blue-400 focus:outline-none text-lg"
      />
      <button
        id="toggleVisibility"
        onClick={toggleVisibility}
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        {showPassword ? "🙈" : "👁️"}
      </button>
    </div>
  );
};

export default TestHideShow;

import { useState } from "react";
import UserLogin from "../../pages/userLogin";
import UserRegister from "../../pages/userRegister";
import Button from "../Buttons/Button";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const LoginButton = ({
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-8 py-6 rounded-2xl w-80 text-black bg-white bg-blue-default hover:bg-gray-lighter font-medium text-2xl transition-colors transition-all duration-300 disabled:bg-gray-lighter disabled:cursor-not-allowed flex items-center justify-between ${className}`}
    >
      {children}
    </button>
  );
};

const LoginRegister = () => {
  const router = useRouter();

  function handleClickLogin() {
    router.push("/userLogin");
  }

  function handleClickRegister() {
    router.push("/userRegister");
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen w-full"
    >
      <div className="absolute top-40 left-20">
        <h1 className="text-8xl font-bold text-gray-200">Welcome!</h1>
        <div className="mt-8">
          <p className="text-5xl text-gray-300 leading-relaxed">
            Choose to either
            <br />
            register or log into
            <br />
            your account.
          </p>
        </div>
      </div>

      <div className="absolute top-1/2 right-60 transform -translate-y-1/2">
        <div className="flex flex-col gap-8 items-center">
          <LoginButton
            onClick={handleClickLogin}
            className="bg-white text-black text-2xl font-medium px-8 py-6 rounded-2xl w-80 hover:bg-gray-100 transition-colors flex items-center justify-between"
          >
            <span className="ml-12">Log in</span>
            <div className="bg-blue-400 text-white px-3 py-2 rounded-xl flex items-center justify-center w-12 h-10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </div>
          </LoginButton>

          <div className="flex items-center w-80">
            <div className="flex-1 border-t border-white ml-3"></div>
            <div className="text-center font-medium text-white text-2xl opacity-60 px-4">
              or
            </div>
            <div className="flex-1 border-t border-white mr-3"></div>
          </div>

          <button
            onClick={handleClickRegister}
            className="bg-transparent border-2 border-red-400 text-white text-2xl font-medium px-8 py-4 rounded-2xl w-80 hover:border-red-300 transition-colors flex items-center justify-between"
          >
            <span className="ml-12">Sign up</span>
            <div className="bg-red-400 text-white px-3 py-2 rounded-xl flex items-center justify-center w-12 h-8">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginRegister;

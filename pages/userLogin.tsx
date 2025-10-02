import router from "next/router";
import Button from "../components/Buttons/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdLockOutline } from "react-icons/md";



const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

    return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative h-screen w-full">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
          <div className="w-80">
            <h1 className="text-4xl font-bold text-white mb-12">Log in</h1>
            <label htmlFor="feide" className="block text-white text-lg mb-2">Feide</label>
            <input 
              id="feide" 
              name="feide" 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-400 focus:outline-none text-lg"
            />
          </div>
      
          <div className="flex items-center w-80">
            <div className="flex-1 border-t border-white ml-3"></div>
              <div className="text-center font-medium text-white text-2xl opacity-60 px-4">or</div>
            <div className="flex-1 border-t border-white mr-3"></div>
          </div>
      
          <div className="w-80">
            <label htmlFor="email" className="block text-white text-lg mb-2">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-400 focus:outline-none text-lg"
            />
          </div>
      
          <div className="w-80 relative">
            <label htmlFor="password" className="block text-white text-lg mb-2 ">Password</label>
            <input 
              id="password" 
              name="password" 
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-400 focus:outline-none text-lg "
            
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              // className="absolute right-0 mt-3 text-sm text-gray-500 hover:text-gray-600 focus:outline-none"
              className="absolute right-0 top-12 text-sm text-gray-500 hover:text-gray-600 focus:outline-none flex items-center gap-1"
              >
                {showPassword ? "Hide" : "Show"} <MdLockOutline />
            </button>
          </div>

          <div className="w-80 flex items-center gap-2">
            <label htmlFor="remember_me" className="text-white text-lg order-1">Remember me</label>
            <input
              id="remember_me" 
              name="remember_me" 
              type="checkbox"
              className="h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
      
          <button 
            type="submit"
            className="bg-blue-400 text-white text-2xl font-medium px-8 py-4 rounded-2xl w-80 hover:bg-blue-500 transition-colors flex items-center justify-center mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};


export default UserLogin;
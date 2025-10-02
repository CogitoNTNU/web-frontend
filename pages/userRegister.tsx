import { motion } from "framer-motion";
import Button from "../components/Buttons/Button";
import { link } from 'fs';
import Link from "next/link";

const UserRegister = () => {
  
  function link() {
    const back: string = window.location.href.includes("localhost") 
      ? "http://localhost:3000/loginPage" 
      : "https://yourdomain.com/loginPage";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen w-full"
    >
      <div className="absolute top-8 left-8">
        <Link href={"/loginPage"}>
          <button 
            type="button"
            className="flex items-center gap-3 text-white text-lg hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
            </svg>
            Back
          </button>
        </Link>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
          <div className="w-80">
            <h1 className="text-4xl font-bold text-white mb-12">Register your account</h1>
            <label htmlFor="first-name" className="block text-white text-lg mb-2">First Name</label>
            <input 
              id="first-name"
              name="first-name" 
              type="text"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-400 focus:outline-none text-lg"
            />
          </div>

          <div className="w-80">
            <label htmlFor="last-name" className="block text-white text-lg mb-2">Last Name</label>
            <input 
              id="last-name"
              name="last-name" 
              type="text"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-400 focus:outline-none text-lg"
            />
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

          <div className="w-80">
            <label htmlFor="password" className="block text-white text-lg mb-2">Password</label>
            <input 
              id="password"
              name="password" 
              type="password"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-400 focus:outline-none text-lg"
            />
          </div>

          <button 
            type="submit"
            className="bg-blue-400 text-white text-2xl font-medium px-8 py-4 rounded-2xl w-80 hover:bg-blue-500 transition-colors flex items-center justify-center mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default UserRegister;
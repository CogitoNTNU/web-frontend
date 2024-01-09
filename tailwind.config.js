/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors: {
        red: {
          default: "#981E14",
        },
        pink: {
          default: "#ff4757"
        },
        yellow: {
          default: "#F5C343",
          darker: "#9B9B9B",
        },
        black: {
          default: "#1E1E1E"
        },
        blue:{
          default: "#1E90FF",
          dark: "#13395B",
          darker: "#0E304F"
        },
        gray: {
          default: "#2F3542",
          light: "#F1F2F6",
          lighter: "#CED6E0"
        }
      },
      screens: {
        'phone': "480px",
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
    
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
    
        'desktop': '1200px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  
  safelist: [
    'bg-pink-default',
    'bg-blue-default',
    'px-8',
    'px-12',
    'text-3xl',
  ],
  plugins: [],
}
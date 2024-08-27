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
          light: "#FF4757",
        },
        pink: {
          default: "#ff4757",
        },
        yellow: {
          default: "#F5C343",
          darker: "#9B9B9B",
        },
        black: {
          default: "#1E1E1E",
          dark:"#000000"
        },
        blue: {
          light: "#30b3ec",
          default: "#1E90FF",
          dark: "#13395B",
          darker: "#0E304F",
          darkest: "#092D4D"
        },
        gray: {
          darker: "#202124",
          default: "#2F3542",
          light: "#F1F2F6",
          lighter: "#CED6E0",
        },
      },
      screens: {
        phone: "480px",
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        smallLaptop: "820px",

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1200px",
        // => @media (min-width: 1280px) { ... }
      },
      keyframes: {
        gradientshift: {
          '0%, 100%': { size: '100%' },
          '50%': { size: '120%' },
        }
      },
      animation: {
        gradientshift: 'gradientshift 3s ease-in-out infinite',
      },
    },
  },

  safelist: [
    "bg-pink-default",
    "bg-blue-default",
    "bg-gray-default",
    "px-8",
    "px-12",
    "text-3xl",
  ],
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ],
};

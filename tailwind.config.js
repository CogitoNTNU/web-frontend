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
      },
    },
  },
  plugins: [],
}
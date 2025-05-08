/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softpink: "#E58AB2",
        white: "#FFFFFF",
        charcoal: "#101820",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
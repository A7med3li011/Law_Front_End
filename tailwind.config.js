/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#04275D",
        secondary: "#F7B21B",
        light: "#B9B8B8",
      },
      keyframes: {
        underline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        underline: "underline 2s ease forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

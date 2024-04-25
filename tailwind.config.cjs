const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
    },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      "2lg": "1216px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#E07B67",
        "dark-10": "#121214",
        "dark-20": "#17171A",
        "dark-30": "#202024",
        "dark-40": "#252529",
        "dark-50": "#AFABB6",
        "dark-60": "#FFFFFF",
      },
      fontSize: {},
      spacing: {},
      maxWidth: {},
      maxHeight: {},
      minWidth: {},
      zIndex: {},
      opacity: {},
      transitionProperty: {},
      borderWidth: {},
      boxShadow: {},
      dropShadow: {},
      keyframes: {
        rotating: {},
      },
      animation: {},
    },
  },
  plugins: [],
};

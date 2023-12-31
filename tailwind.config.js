// tailwind.config.js
const {nextui} = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
    primaryColor:"#F31260",
    accentColor:"#00BAF8",
    accentLightBg:"#E2F7FE",
    primaryLightBg:"#FDEAF0",
    blueAccent:"#0760FB",
    greenAccent:"#0BA229",
    grayBg : "#E5E5E5"
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],

}


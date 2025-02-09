// tailwind.config.js
const customStyles = require('./customStyles')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita el modo oscuro
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts}"
  ],
  theme: {
    extend: {
      colors: customStyles.colors,
      fontSize: customStyles.fontSize,
      fontFamily: customStyles.fontFamily,
      fontWeight: customStyles.fontWeight,
      boxShadow: customStyles.customShadow
    },
  },
  plugins: [],
}


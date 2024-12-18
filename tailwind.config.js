/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
          handwrite: ["Parisienne",'sans-serif'],
          monosans: ["Roboto Mono", "monospace"],
          outfit: ["Outfit",'mono'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}


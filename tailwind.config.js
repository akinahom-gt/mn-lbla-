/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens:{
      'xs': '480px',
      'sm': '640px',
      'md': '760px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        "poppins": "Poppins, sans-serif ",
        "pacifico": "Pacifico, cursive ",
      }
    },
    
    
  },
  plugins: [],
}


const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors:{
        //
        'theme' : '#f49247',
        'secondary': '#40bee7',
        'third': '#fff55f',
        'grey': '#504c21',
        'blue': '#46b1a1'
      },

    },
  },
  plugins: [],
}

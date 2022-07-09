const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ["Raleway", ...defaultTheme.fontFamily.sans],
      'serif': ["Playfair Display", ...defaultTheme.fontFamily.serif],
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "300px",
      // => @media (min-width: 576px) { ... }

      md: "641px",
      // => @media (min-width: 960px) { ... }

      lg: "1200px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        ptSans: ['"PT Sans"', ...defaultTheme.fontFamily.sans],
        merriweather: ['"Merriweather"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
 
};

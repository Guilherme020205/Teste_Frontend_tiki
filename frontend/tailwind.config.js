/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        palette: {
          base: "#240031",
          shade: "#26093A",
          pink: "#FC2BEE",
          purple: "#8F0DFF",
          white: "#ffffff"
        },
      },
    },
  },
  plugins: [],
};

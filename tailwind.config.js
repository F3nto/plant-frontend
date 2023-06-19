/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        body : "Mulish"
      },
      colors:{
        primary : "#FF5900",
        secondary : {
          100 : "#D86223",
          200 : "#FFA06C",
          300 : "#9A3804",
          400 : "#5D2E15"
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        body : "Quicksand"
      },
      colors:{
        primary : "#02EEB7",
        secondary : {
          100 : "#30C2A0",
          200 : "#26AB8C",
          300 : "#077A6C",
          400 : "#005D4F"
        },
        back : "rgba(0,0,0,0.54)"
      },
       keyframes: {
        "spin-slow": {
          "0%" : {
            transform: "rotateY(40deg)"
          },
          "50%" :{
            transform: "rotateY(0deg)"
          },
          "100%" : {
            transform: "rotateY(40deg)"
          }
        },
      },
      animation: {
        "spin-slow": "spin-slow 4s linear infinite",
      },
    },
  },
  plugins: [],
}


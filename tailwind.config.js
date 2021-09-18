module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: 'Ibarra Real Nova',
      sans: 'Montserrat'
    },
    colors:{
      primary: "#FAFAFA",
      secondary:{
        lightgray: "#3A4750",
        darkgray:"#303841",
        red:"#F24D5D",
        lightred:"#FF6E7C"
      }
    },
    boxShadow: {
      "2xl": '0 -20px 75px -12px rgba(0, 0, 0, 0.15)',
      "3xl": '0 25px 50px 0px rgba(0, 0, 0, 0.25)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'redness':"url('/src/static/Color-palette/Red.png')"
      }
    },
    colors:{
        primary: "#FAFAFA",
        secondary:{
          lightgray: "#3A4750",
          darkgray:"#303841",
          red:"#F24D5D"
        }
      },
      screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      serif: 'Ibarra Real Nova',
      sans: 'Montserrat'
    },
    boxShadow: {
      '2xl': '0 -20px 70px -12px rgba(0, 0, 0, 0.15)',
      'xl': '0 0px 50px -5px rgba(0,0,0,0.4)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

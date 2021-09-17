module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'redness':"url('/src/static/Color-palette/Red.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

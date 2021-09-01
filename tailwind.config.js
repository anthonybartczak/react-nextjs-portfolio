const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'abel': ['"abel"', 'cursive']
      },
      colors: {
        rose: colors.rose,
        teal: colors.teal,
        indigo: colors.indigo,
        coolGray: colors.coolGray,
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

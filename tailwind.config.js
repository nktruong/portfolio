const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        coolgray: colors.coolGray,
        gray: colors.trueGray,
        red: colors.red,
        cyan: colors.cyan,
        green: colors.green,
        fuchsia: colors.fuchsia,
        yellow: colors.amber,
        blue: colors.blue
      },
      keyframes: {
          'fade-in-down': {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(-10px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
              },
          }
      },
      animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
    },
  },
  plugins: [],
}

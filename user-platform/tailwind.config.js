// user-platform/tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A56DB',
        secondary: '#FF6B35',
        dark: '#333333',
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Open Sans', ...fontFamily.sans],
        montserrat: ['Montserrat', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
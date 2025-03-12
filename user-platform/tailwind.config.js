// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E63946',
        secondary: '#2A9D8F',
        dark: '#333333',
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Open Sans', ...fontFamily.sans],
        montserrat: ['Montserrat', ...fontFamily.sans],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
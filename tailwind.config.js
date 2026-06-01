/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lawn-green': '#4ade80',
        'lawn-dark': '#166534',
      }
    },
  },
  plugins: [],
}
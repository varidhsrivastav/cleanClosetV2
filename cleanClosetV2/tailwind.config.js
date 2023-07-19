/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      colors: {
        'heroPagebg': '#E9F5F3',
        'rrrpage': '#5DADAB',
        'ngoback' : '#E4E0DD'
      },
      height: {
        '70': '70vh',
      },
      maxWidth: {
        '100px': '100px',
      },
      maxHight: {
        '100px': '100px'
      }
    },
  },
  plugins: [],
}
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
        'rrrpage': '#246359',
        'ngoback' : '#E4E0DD',
        "dark-purple": "#5DADAB",
        "orageBack": "#e1a692",
        "orangePrimary": "#FF7468",
        "darkgrey":"#2F2F2F",
        "light-white": "rgba(255,255,255,0.17)",
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
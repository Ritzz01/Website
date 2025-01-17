/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
        'header-bg': 'rgb(255, 254, 242)',
      },
      fontFamily: {
        'suisse-medium': ['Suisse Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
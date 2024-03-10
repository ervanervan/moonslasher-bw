/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cl-black': "#000201",
        'cl-navy': "#080A1E",
        'cl-white': "#FFFFFF",
        'cl-gray': "#8A8AAA",
        'cl-red': "#E24640",
      },

      fontFamily: {
        'outfit': ["Outfit", "sans-serif"],
        'mochiyPopOne': ["Mochiy Pop One", "sans-serif"],
      }
    },
  },
  plugins: [],
}


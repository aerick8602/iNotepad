
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fav: ['Zeyada', 'cursive'],
        glory: ['Glory'],
        dosis: ['Dosis', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

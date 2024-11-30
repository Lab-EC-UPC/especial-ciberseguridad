/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chat': "url('https://neom.scene7.com/is/image/neom/food-accel-c02-pattern?wid=1920&hei=1080')",
      },
    },
  },
  plugins: [],
}


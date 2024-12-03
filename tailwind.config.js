/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'black': '#000000',
        'grey': '#6b7280',
        'grey-light': '#dbd8d4',
        'wallpaper': '#efeae2',
        'green': '#00a884',
        'green-light': '#59CE72',
        'green-dark': '#215C54',
        'green-chat-box': '#E0F6CA',
      },
      backgroundImage: {
        'chat': "url('https://neom.scene7.com/is/image/neom/food-accel-c02-pattern?wid=1920&hei=1080')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.0s ease-in-out',
      },
    },
  },
  plugins: [],
}


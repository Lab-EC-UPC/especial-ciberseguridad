/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Agdasima', 'sans-serif'],
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
      colors : {
        'black': '#000000',
        'grey': '#6b7280',
        'grey-light': '#dbd8d4',
        'wallpaper': '#e2dbd3',
        'green': '#00a884',
        'green-light': '#35867E',
        'green-dark': '#215C54',
        'green-chat-box': '#E0F6CA',
      },
      backgroundImage: {
        'chat': "url('https://i.imgur.com/24aAqXh.png')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        leftToRightAndBack: {
          '0%': { transform: 'translateX(-5%)' },
          '50%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(-5%)' },
        },
        fromLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fromRight: {
          '0%': { transform: 'translateX(50%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.0s ease-in-out',
        'fade-in-fast': 'fadeIn 0.2s ease-in-out',
        'left-to-right': 'leftToRightAndBack 2.0s ease-in-out infinite',
        'from-left': 'fromLeft 0.5s ease-in-out',
        'from-right': 'fromRight 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}


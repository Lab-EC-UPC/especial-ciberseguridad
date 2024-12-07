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
        'chat': "url('https://raw.githubusercontent.com/Lab-EC-UPC/assets/refs/heads/main/especial-ciberseguridad/chat-bg.webp')",
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
      },
      animation: {
        'fade-in': 'fadeIn 1.0s ease-in-out',
        'left-to-right': 'leftToRightAndBack 2.0s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


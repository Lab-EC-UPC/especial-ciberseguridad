import {nextui} from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|modal|popover|menu|divider|button|ripple|spinner).js"
  ],
  theme: {
    fontSize: {
      // 'xs': '0.75rem',
      // sm: '0.8rem',
      // base: '1rem',
      // lg : '1.125rem',
      // xl: '1.25rem',
      // '2xl': '1.563rem',
      // '3xl': '1.953rem',
      // '4xl': '2.441rem',
      // '5xl': '3.052rem',
      xs: '16px',
      sm: '16px',
      md: '18px',
      base: '18px',
      lg : '20px',
      xl: '22px',
      '2xl': '26px',
      '3xl': '32px',
      '4xl': '38px',
      '5xl': '50px',
    },
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
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.0s ease-in-out',
        'fade-in-fast': 'fadeIn 0.2s ease-in-out',
        'left-to-right': 'leftToRightAndBack 2.0s ease-in-out infinite',
        'from-left': 'fromLeft 0.5s ease-in-out',
        'from-right': 'fromRight 0.5s ease-in-out',
        'scale-loop': 'scaleUpDown 1.0s ease-in-out infinite',
      },
    },
  },
  plugins: [nextui()],
}

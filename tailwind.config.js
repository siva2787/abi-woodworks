/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Theme palette
        light: {
          bg: '#F7F5F0',
          secondaryBg: '#EAE5DC',
          card: '#FFFEFA',
          text: '#211E1A',
          subtext: '#706A61',
          wood: '#8B603D',
          walnut: '#39271E',
          accent: '#C69A6A',
          border: '#DED7CD',
        },
        // Dark Theme palette
        dark: {
          bg: '#151412',
          secondaryBg: '#201E1B',
          card: '#292520',
          text: '#F6F0E7',
          subtext: '#B9AEA0',
          accent: '#C89A68',
          border: '#3C352D',
        },
        // Dynamic custom theme CSS variables map
        brand: {
          gold: '#C89A68',
          wood: '#8B603D',
          walnut: '#39271E',
          cream: '#F7F5F0',
          darkBg: '#151412',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Noto Sans Tamil', 'Cinzel', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Noto Sans Tamil', 'Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '26.875rem', // 430px
        'md': '48rem',     // 768px
        'lg': '64rem',     // 1024px
        'xl': '80rem',     // 1280px
        '2xl': '100rem',   // 1600px
        '3xl': '120rem',   // 1920px
      },
    },
  },
  plugins: [],
} 
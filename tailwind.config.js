/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A5568',
        secondary: '#718096',
        accent: '#F6AD55',
      },
      fontFamily: {
        sans: ['Futura', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
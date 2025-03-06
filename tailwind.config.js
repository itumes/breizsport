/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#1e3a8a',
        },
        secondary: {
          main: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
  important: true,
} 
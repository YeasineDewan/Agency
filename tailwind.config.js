/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DD0303', // Deep red
        secondary: '#FA812F', // Orange
        accent: '#FAB12F', // Golden yellow
        light: '#FEF3E2', // Light cream
      },
    },
  },
  plugins: [],
}

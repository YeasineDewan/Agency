/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B5828C',
        secondary: '#E5989B',
        accent: '#FFB4A2',
        light: '#FFCDB2',
      },
    },
  },
  plugins: [],
}

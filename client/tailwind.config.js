/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'clr-bg-black': '#000000',
        'light-black': '#0E0E0F',
        accent: '#8282C7',
        'selection-bg': '#252529',
      },
      fontFamily: {
        body: ['outfit-regular'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'clr-bg-black': '#000000',
      },
      fontFamily: {
        'body': [ 'outfit-regular' ]
      }
    },
  },
  plugins: [],
}

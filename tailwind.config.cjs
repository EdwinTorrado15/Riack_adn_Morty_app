/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'app': 'rgb(32, 35, 41)',
        'character': 'rgb(60 62 68)',
        'naranja': 'rgb(255 152 0)'
      },
    },
  },
  plugins: [],
}

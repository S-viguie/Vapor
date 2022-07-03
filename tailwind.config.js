/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Rojo-Dark": "#3D0000",
        "Rojo-Medio": "#950101",
        "Rojo-Claro": "#FF0000"
      }
    },
    fontFamily: {
      "Barlow": ['Barlow', 'sans-serif']
    }
  },
  plugins: [],
}

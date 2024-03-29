/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Rojo-Dark": "#370d0d",
        "Rojo-Medio": "#950101",
        "Rojo-Claro": "#FF0000",
        "Oro": "#CCA738"
      }
    },
    fontFamily: {
      "Barlow": ['Barlow', 'sans-serif']
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#1D1A25",
          "200":"#eff0f3",
          "300": "#283447"
        },
        secondary: "#ff8e3c"
      },
      fontFamily: {
        body: ['"Poppins"', '"Nunito"', '"Changa"']
      },
      spacing: {
        'tik': '99%',
      }
    },
  },
  plugins: [],
}
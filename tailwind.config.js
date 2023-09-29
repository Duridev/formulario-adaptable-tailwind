/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "cody-saludando": "url('../assets/cody-saludando.jpg')"
      },
      fontFamily: {
        "martian": "'Martian Mono', monoespacio"
      }
    },
  },
  plugins: [],
}


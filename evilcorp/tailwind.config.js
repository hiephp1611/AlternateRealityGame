/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evildark: "#1E231E"
      }
    },
    fontFamily: {
      goldman: ['Goldman'],
      kanit: ['Kanit'],
      sharetechmono: ['Share Tech Mono'],
      gugi: ['Gugi'],
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        brandPrimary: '#4434DF',
        brandGrandient1: '#D7026E',
        brandGrandient2: '#7739DF',
      },
      theme: {
        container: {
          center: true,
        },
      },
    },
  },
  plugins: [],
}


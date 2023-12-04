/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'primary': '#575770',
        'secondary': '#F7F7F8',
        'terciary': '#B4B4C5',
        'content': '#48485C99',
        'content2': '#D466F8'
      },
    },
    fontSize: {
      'xs': '8px',
      'sm': '12px',
      'md': '16px',
      'lg': '20px',
      'xl': '24px',
      '2xl': '32px'
    }
  },
  plugins: [],
}


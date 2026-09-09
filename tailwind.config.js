/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mobywatel: {
          primary: '#007BFF',
          'primary-dark': '#0056B3',
          secondary: '#6C757D',
          success: '#28A745',
          danger: '#DC3545',
          warning: '#FFC107',
          info: '#17A2B8',
          light: '#F8F9FA',
          dark: '#212529',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

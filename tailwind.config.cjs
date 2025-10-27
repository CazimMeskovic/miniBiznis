/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.06)',
        accent: '#6EE7B7'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
}

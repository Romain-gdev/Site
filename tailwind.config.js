/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    'tailwindcss',
    'postcss',
    'autoprefixer'
  ],
}

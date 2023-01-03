/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
     backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'smolle': '340px',
      'large': '550px',
      'mdwh':'400px,400px',
      'wh':'200px,200px',
    }
  },
  plugins: [],
}

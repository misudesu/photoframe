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
    }
  },
  plugins: [],
}

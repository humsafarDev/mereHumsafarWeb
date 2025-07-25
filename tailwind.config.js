/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#edf2f4',  // white
        secondary: '#d90429', // red
        //  secondarydark: '#4d0218'
         secondarydark: '#FF5469'
      },
    },
  },
  plugins: [],
}

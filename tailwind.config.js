/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-4': '#0F0F0F',
        'dark-3': '#232D3F',
        'dark-2': '#005B41',
        'dark-1': '#008170',
      }
      
    },
  plugins: [],
 }
}

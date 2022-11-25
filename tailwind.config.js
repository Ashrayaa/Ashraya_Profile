/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'onepurple': '#B92020',
        'twopurple' : '#F33737',
        'litepurple' : '#B92020',  
      },
    },
  },
  plugins: [],
};

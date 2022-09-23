/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
     colors:{
        'ocean':'#16c0b0',
        'leaf':'#84cf6a',
        'mist':'#d8d8d8',
        'midnight':'#39495c',
        'cloud':'#ffffff'
      },
      screens:{
        'sm':'660px',
        'md':'860px',
        'lg':'1060px',
        'xl':'1260px',
        '2xl':'1460'
      },
      extend:{

      }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend:{
      // Color Scheme
      colors: {
        espresso: '#412419',
        firebrick: '#BA342C',
        gamboge: '#EAA000',
        oatmilk: '#FFF6E7',
        obscuro: '#2C2C2E'
      },
      fontFamily: {
        DM_Serif_Text: ['DM Serif Text'],
      }
    }
  },
  plugins: [],
  darkMode: "class",
}

/* 
Color Pallete:
  Crash Site:
    Color     -  Hex Code   -  Tailwind
    Red    >  #BA342C    >  firebrick
    Yellow >  #EAA000    >  gamboge
    Cream  >  #FFF6E7    >  oatmilk
    Brown  >  #412419    >  espresso
    Black  >  #2C2C2E    >  obscuro
*/
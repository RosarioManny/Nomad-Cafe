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
        // vv Crash Site Colors
        sunburst: '#EEC643',
        aqua: '#97DBFF',
        frost: '#EEF0F2',
        royal: '#0D21A1',
        midnight: '#011638',
        // vv Dark Mode
        glacier: '#EAF6FF',
        skyline: '#009FFD',
        charcoal: '#444140',
        tangerine: '#FFA400',
        onyx: '#1E1E24', 
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
    Yellow    >  #EEC643    >  sunburst
    Dark Blue >  #011638    >  midnight
    Blue      >  #0D21A1    >  royal
    Black     >  #141414    >  obsidian
    White     >  #EEF0F2    >  frost
  Dark Mode:
    Color     -  Hex Code   -  Tailwind
    White     >  #EAF6FF    >  glacier 
    Baby Blue >  #009FFD    >  skyline
    Grey      >  #444140    >  charcoal
    Orange    >  #FFA400    >  tangerine
    Mat Black >  #1E1E24    >  onyx
*/
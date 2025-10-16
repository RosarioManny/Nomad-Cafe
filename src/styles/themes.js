/* 
Color Pallete:
    Color    -  Hex Code   -  Tailwind
    Red    >  #BA342C    >  firebrick
    Yellow >  #EAA000    >  gamboge
    Cream  >  #FFF6E7    >  oatmilk
    Brown  >  #412419    >  espresso
    Black  >  #2C2C2E    >  obscuro
*/
export const theme  = {
  text: {
    heading: "text-3xl md:text-5xl",
    firstLetter: "text-2xl md:text-4xl",
    subheading: "text-2xl md:text-3xl",
    menuHeading: "text-lg md:text-2xl",
    body: "text-base md:text-xl ",
    advisoryText: "text-sm italic md:text-md",
    underline: "underline underline-offset-4",
  },
  layout: {
    default: "flex justify-center m-4 place-items-center",
    text: "text-center",
    hr: "w-2/3 h-[5px] my-4 rounded",
    para_spacing: "my-10",
    column: "flex flex-col align-center items-center",
    row: "flex justify-center",
    footer: {
      section: "text-center my-4",
      }
    },
  color: {
    text: {
      default: "text-espresso",
      primary: "text-firebrick",
      secondary: "text-gamboge",
      nav: "text-oatmilk"
    },
    background: {
      primary: "bg-firebrick",
      secondary: "bg-oatmilk",
      accent: "bg-gamboge"
    }
  },
  animation: {
    hover: {
      underline: "absolute left-0 -bottom-2 w-0 h-1 bg-gamboge transition-all duration-300 group-hover:w-full origin-left"
    },
  }
}
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
    body: "text-md ",
    heading: "text-5xl",
    subheading: "texl-2xl underline underline-offset-4",
    firstLetter: "text-3xl"
  },
  layout: {
    default: "flex justify-center m-4 items-center",
    text: "text-center",
    card: "",
    nav: "",
    hr: "w-2/3 h-1 my-4 rounded",
    footer: {
      section: "text-center my-4",
    } 
    },
  color: {
    text: {
      default: "text-espresso",
      primary: "text-firebrick",
      secondary: "text-gamboge",
    },
    background: {
      primary: "bg-firebrick",
      secondary: "bg-oatmilk",
      accent: "bg-gamboge"
    }
  },
  hover: {
    text: "",
    container: "",
    button: "",
    img: ""
  }
}
import Header from "./partials/_header";
import { theme } from "../styles/themes";
import { useResponsive } from "../utils/responsoveProvider";
// import { AnimatePresence, motion } from "framer-motion";
import ScrollToAnchor from "../utils/scrollToAnchor";
import menuItems from "../database/menuItems";
import { getBagels, getSandwiches, getSides, getSignatureDishes, getTravelerSandwich} from "../utils/getMenuItemCategory";
const BreakfastMenu = () => {
  const isMobile = useResponsive();
  
  const bagels = getBagels()
  console.log("BAGELS >>", bagels)
  const sandwiches = getSandwiches()
  console.log("SANDWICHES >>", sandwiches)
  const sides = getSides()
  console.log("SIDES >>", sides)
  const signatureDishes = getSignatureDishes()
  console.log("SIGNATURES >>", signatureDishes)
  const travelerSandwich = getTravelerSandwich()
  console.log("TRAVELERS >>", travelerSandwich)
  const travelerTitle = travelerSandwich.category
  console.log(travelerTitle)
  const travelerOptions = travelerSandwich.options[0]
  console.log(travelerOptions)
  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={"/products/green_traveler.jpg"}
        tag={"/icons-logos/Nomad-White-Breakfast.webp"}
      />
      {/* Mini Nav */}
      <section className={`${theme.layout.column}`}>
        <div className={`${theme.layout.row} space-x-10`}>
          <p>
            Foods
          </p>
          <p>
            Drinks
          </p>
          <p>
            Sweets
          </p>
        </div>
        <a href="">
          Download Menus
        </a>
      </section>

      {/* Menu Items */}
      <section className={`${isMobile ? "" : "m-2 flex flex-col align-center items-center"}`}>
        {/* Bagels */}
          <h2 className={`${theme.text.subheading} ${theme.color.text.primary}`}> {bagels.category} - (All Vegan) </h2>
          <ul className="flex align-center items-center">
            {bagels.variants.map((variant, i )=> (
              <li className="flex align-center w-min mx-2"key={i}>
                {variant}
              </li>
            ))}
          </ul>
          <h2 className="text-lg">Add-Ons</h2>
          {bagels.addOns.map((addOn, i) => (
            <p key={i}> {addOn.name} - ${addOn.price} </p>
          ))}
          <hr className={`${theme.layout.hr} ${theme.color.background.primary}`}/>
          {/* Traveler */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center">
              <h2 className={`${theme.text.subheading} ${theme.color.text.primary}`}>{travelerSandwich.category}</h2>
              <p>{travelerSandwich.description}</p>
            </div>
            {Object.entries(travelerOptions).map(([category, options]) => (
              <div key={category} className="option-category">

                {options.price ? (
                  <div className="flex space-x-2 items-center">
                    <h3 className={`${theme.color.text.secondary} ${theme.text.underline}`}>{category}</h3>
                    <p className="text-xs"> (${options.price} each) </p>
                  </div>
                ) : (
                  <h3  className={`${theme.color.text.secondary} ${theme.text.underline}`}>{category}</h3>
                )}
              
                <div className="base-options">
                  <ul className="flex flex-wrap items-center h-max">
                    {options.base.map((item, index) => (
                      <li className="mx-[4px] " key={`${category}-base-${index}`}>{item} |</li>
                    ))}
                  </ul> 
                </div>

                {options.premium && (
                  <div className="w-max ">
                    <p >+${options.premium.price} {options.premium.name}  </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Signature Dishes */}
          <div>

          </div>
      </section>
    </>
  );
};

export default BreakfastMenu;
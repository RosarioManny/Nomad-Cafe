import Header from "./partials/_header";
import { theme } from "../styles/themes";
import { useResponsive } from "../utils/responsoveProvider";
import ScrollToAnchor from "../utils/scrollToAnchor";
import { getBagels, getSandwiches, getSides, getSignatureDishes, getTravelerSandwich} from "../utils/getMenuItemCategory";
import  MenuNav  from "./partials/_menuNav";

const BreakfastMenu = () => {
  const isMobile = useResponsive();
  
  const bagels = getBagels()

  const sandwiches = getSandwiches()
  const sandwichAddOns = [ 
    { name: "Bacon", price: 3 },
    { name: "Avocado", price: 2.5 },
    
  ]

  const sides = getSides()
  
  const signatureDishes = getSignatureDishes()

  const travelerSandwich = getTravelerSandwich()
  const travelerTitle = travelerSandwich.category
  const travelerOptions = travelerSandwich.options[0]


  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={"/products/Cheddarsmash_4.jpg.jpg"}
        tag={"/icons-logos/Nomad-White-Breakfast.webp"}
      />
      {/* Mini Nav */}
      <MenuNav />
      <div className="flex justify-center "> 
        <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
      </div>
      
      {/* Menu Items */}
      <section className={`${isMobile ? "" : "m-2 flex flex-col align-center items-center"}`}>
        {/* Bagels */}
          <h2 className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} ${theme.layout.text}`}> {bagels.category} - (All Vegan) </h2>
          <ul className="flex align-center items-center">
            {bagels.variants.map((variant, i )=> (
              <li className="flex align-center w-min mx-2"key={i}>
                {variant}
              </li>
            ))}
          </ul>
          <h2 className="text-lg">Add-Ons</h2>
          {bagels.addOns.map((addOn, i) => (
            <p key={i}> {addOn.name} - {addOn.price} </p>
          ))}
            <hr className={`${theme.layout.hr} ${theme.color.background.primary}`}/>

          {/* Traveler */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center">
              <h2 className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} ${theme.layout.text}`}>{travelerSandwich.category}</h2>
              <p>{travelerSandwich.description}</p>
            </div>
            {Object.entries(travelerOptions).map(([category, options]) => (
              <div key={category} className="option-category">

                {options.price ? (
                  <div className="flex space-x-2 items-center">
                    <h3 className={`${theme.color.text.secondary} ${theme.text.underline}`}>{category}</h3>
                    <p className="text-xs"> ({options.price} each) </p>
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
                    <p >+{options.premium.price} {options.premium.name}  </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>

          {/* Signature Dishes */}
          <section>
          <h2 className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} ${theme.layout.text}`}>{signatureDishes.category}</h2>
            {signatureDishes.items.map((dish, i) => (
              <div key={i} className="m-2 ">
                  <h1 className={`${theme.color.text.primary}`}>{dish.name} | {dish.price}</h1>
                <p> {dish.description}</p>
                {dish.modifiers ? (
                  <div>
                    <p>Add-ons:</p>
                    {dish.modifiers.map((mods, i ) => (
                      <div key={i}>
                        <p>{mods.name} + {mods.price}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )
                }
              </div>
            ))}
          </section>
            <hr className={`${theme.layout.hr} ${theme.color.background.primary}`}/>

          {/* Sandwiches  */}
          <section>
            <h2 className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} ${theme.layout.text}`}>{sandwiches.category}</h2>
            {sandwiches.items.map((dish, i) => (
              <div key={i} className="m-2 ">
                <h1 className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading}`} >{dish.name} - {dish.price}</h1>
                <p> {dish.description}</p>
              </div>
            ))}
            <p> Add-Ons: </p>
            {sandwichAddOns.map((item, i) => (
              <p>
                {item.name} - {item.price}
              </p>
            ))}
          </section>

            <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
          {/* Sides  */}
          <section>
          <h2 className={`${theme.text.subheading} ${theme.color.text.primary} ${theme.layout.text}`}>{sides.category}</h2>
            {sides.items.map((dish, i) => (
              <div key={i} className="">
                  <h1>{dish.name} - {dish.price}</h1>            
                <p> {dish.description}</p>
              </div>
            ))}
          </section>

      </section>
    </>
  );
};

export default BreakfastMenu;
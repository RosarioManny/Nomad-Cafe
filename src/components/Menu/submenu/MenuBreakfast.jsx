
import { theme } from "../../../styles/themes";
import { useResponsive } from "../../../utils/responsoveProvider";
import ScrollToAnchor from "../../../utils/scrollToAnchor";
import { getBagels, getSandwiches, getSides, getSignatureDishes, getTravelerSandwich} from "../../../utils/getMenuItemCategory";


export const MenuBreakfast = () => {
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
      {/* Menu Items */}
      <section className={`flex flex-col items-center  ${theme.color.text.default}`}>
        {/* Bagels */}
          <h2 className={`
            ${theme.color.text.primary} 
            ${theme.text.underline} 
            ${theme.text.subheading} 
            ${theme.layout.text}`}> 
            {bagels.category} - (All Vegan)
          </h2>
          <ul className="flex items-center">
            {bagels.variants.map((variant, i )=> (
              <li 
              className={`
                flex flex-col items-center mx-2

                ${isMobile ? `${theme.text.body}` : "space-x-10 bg-blue-500"} 
                `} 
              key={i}>
                {variant} 
              </li>
            ))}
          </ul>
          <h2 className={`${theme.color.text.secondary}`}>Add-Ons</h2>
          {bagels.addOns.map((addOn, i) => (
            <p key={i}> {addOn.name} - {addOn.price} </p>
          ))}
            <hr className={` ${theme.layout.hr}  ${theme.color.background.primary}`}/>

          {/* Traveler */}
          <div className="flex flex-col w-full">
            {/* Traveler title + description */}
            <div className="flex flex-col items-center">
              <h2 className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading} 
                ${theme.layout.text}`}>
                  {travelerSandwich.category}
              </h2>
              <p>{travelerSandwich.description}</p>
            </div>
            {/* Traveler Ingredients */}
            {Object.entries(travelerOptions).map(([category, options]) => (
              <div key={category} className="flex flex-col items-center">
                {/* Paid Add-ons */}
                {options.price ? (
                  <div className="flex space-x-2 items-center">
                    <h3 className={`
                      ${theme.color.text.secondary} 
                      ${theme.text.underline}
                      ${theme.text.menuHeading}
                      `}>
                        {category}
                    </h3>
                    <p className="text-xs"> (+{options.price} each) </p>
                  </div>
                ) : (
                  // Non-paid add-ons
                  <h3  className={`
                    ${theme.color.text.secondary} 
                    ${theme.text.underline}
                    ${theme.text.menuHeading}
                    
                    `}>
                      {category}
                  </h3>
                )}
              
                <div className="base-options">
                  <ul className="flex flex-wrap justify-center text-center">
                    {options.base.map((item, index) => (
                      <li className="mx-[4px] " key={`${category}-base-${index}`}>{item} </li>
                    ))}
                  </ul> 
                </div>

                {options.premium && (
                  <div className="w-max ">
                    <p>+{options.premium.price} {options.premium.name}  </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <hr className={`${theme.layout.hr}  ${theme.color.background.accent}`}/>

          {/* Signature Dishes */}
          <section>
          <h2 className={`
            ${theme.color.text.primary} 
            ${theme.text.underline} 
            ${theme.text.subheading} 
            ${theme.layout.text}`}>
              {signatureDishes.category}
          </h2>
            {signatureDishes.items.map((dish, i) => (
              <div key={i} className="m-2 ">
                <h1 className={`
                  ${theme.color.text.primary}
                  ${theme.text.underline} 
                  ${theme.text.menuHeading} 
                  `}>
                    {dish.name} - {dish.price}
                </h1>
                <p> {dish.description}</p>
                {dish.modifiers ? (
                  <div>
                    <p className={`${theme.color.text.secondary}`}>Add-ons:</p>
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
            <h2 className={`
              ${theme.color.text.primary} 
              ${theme.text.underline} 
              ${theme.text.subheading} 
              ${theme.layout.text}`}>
              {sandwiches.category}
            </h2>
            {sandwiches.items.map((dish, i) => (
              <div key={i} className="m-2">
                <h1 className={`
                  ${theme.color.text.primary} 
                  ${theme.text.underline}
                  ${theme.text.menuHeading}`}>
                    {dish.name} - {dish.price}
                </h1>
                <p> {dish.description}</p>
              </div>
            ))}
            <div className="flex gap-[5px]">
            <p className={`${theme.color.text.secondary}`}> Add-Ons: </p>
              {sandwichAddOns.map((item, i) => (
                <div className="flex" key={i}>
                  <h3> {item.name} -</h3>
                  <p className={`${theme.color.text.primary}`}>{item.price} </p>
                </div>
              ))}
            </div>
          </section>

            <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
          {/* Sides  */}
          <section className="w-full">
            <h2 className={`
              ${theme.text.subheading} 
              ${theme.color.text.secondary} 
              ${theme.layout.text}`}>
                {sides.category}
            </h2>
            {sides.items.map((dish, i) => (
              <section key={i} className="flex justify-between border-b border-gamboge m-2 p-2">
                <h3 className={`
                  ${theme.color.text.primary} 
                  ${theme.text.body}
                  `}>
                    {dish.name} 
                </h3>            
                <p className={`${theme.color.text.default} text-right`}> {dish.price}</p>
              </section>
            ))}
          </section>
      </section>
    </>
  );
};

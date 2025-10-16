import { theme } from "../../../styles/themes";
import ScrollToAnchor from "../../../utils/scrollToAnchor";
import { getBagels, getSandwiches, getSides, getSignatureDishes, getTravelerSandwich} from "../../../utils/getMenuItemCategory";

export const MenuBreakfast = () => {
  const bagels = getBagels()
  const sandwiches = getSandwiches()
  const sandwichAddOns = [ 
    { name: "Bacon", price: 3 },
    { name: "Avocado", price: 2.5 },
  ]
  const sides = getSides()
  const signatureDishes = getSignatureDishes()
  const travelerSandwich = getTravelerSandwich()
  const travelerOptions = travelerSandwich.options[0]

  return (
    <>
      <ScrollToAnchor/>
      {/* Skip link for screen readers */}
      <a 
        href="#breakfast-menu" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
      >
        Skip to breakfast menu
      </a>

      {/* Menu Items */}
      <section 
        id="breakfast-menu"
        className={`flex flex-col items-start mx-auto px-4 sm:px-6 max-w-6xl w-full ${theme.color.text.default}`}
        aria-labelledby="breakfast-menu-heading"
        role="region"
      >
        <h1 id="breakfast-menu-heading" className="sr-only">Breakfast Menu</h1>
        
        {/* Bagels */}
        <section 
          className="w-full mb-8"
          aria-labelledby="bagels-heading"
        >
          <h2 
            id="bagels-heading"
            className={`
              ${theme.color.text.primary} 
              ${theme.text.underline} 
              ${theme.text.subheading} 
              ${theme.layout.text} text-left mb-4
            `}
          > 
            {bagels.category} - (All Vegan)
          </h2>
          
          <ul 
            className="flex flex-wrap gap-3 md:gap-6 my-4"
            aria-label="Bagel varieties"
          >
            {bagels.variants.map((variant, i) => (
              <li 
                className={`${theme.text.body}`} 
                key={i}
              >
                {variant}
              </li>
            ))}
          </ul>
          
          <h3 className={`${theme.color.text.secondary} text-left mb-2`}>Add-Ons</h3>
          <ul 
            className="space-y-1"
            aria-label="Bagel add-ons"
          >
            {bagels.addOns.map((addOn, i) => (
              <li key={i} className="text-left">
                {addOn.name} - ${addOn.price}
              </li>
            ))}
          </ul>
        </section>

        <hr 
          className={`${theme.layout.hr} ${theme.color.background.primary} w-full my-6`}
          aria-hidden="true"
        />

        {/* Traveler */}
        <section 
          className="w-full mb-8"
          aria-labelledby="traveler-heading"
        >
          <div className="flex flex-col">
            <h2 
              id="traveler-heading"
              className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading} 
                ${theme.layout.text} text-left mb-2
              `}
            >
              {travelerSandwich.category}
            </h2>
            <p className="text-left mb-4">{travelerSandwich.description}</p>
          </div>
          
          {/* Traveler Ingredients */}
          <div role="list">
            {Object.entries(travelerOptions).map(([category, options]) => (
              <div 
                key={category} 
                className="flex flex-col items-start mb-6"
                role="listitem"
              >
                {options.price ? (
                  <div className="flex flex-col items-start mb-2">
                    <h3 
                      className={`
                        ${theme.color.text.secondary} 
                        ${theme.text.underline}
                        ${theme.text.menuHeading} text-left
                      `}
                    >
                      {category}
                    </h3>
                    <p className="text-xs text-left"> (+${options.price} each) </p>
                  </div>
                ) : (
                  <h3 className={`
                    ${theme.color.text.secondary} 
                    ${theme.text.underline}
                    ${theme.text.menuHeading} text-left mb-2
                  `}>
                    {category} 
                  </h3>
                )}
              
                <div className="base-options w-full">
                  <ul 
                    className="flex flex-wrap gap-2 md:gap-4"
                    aria-label={`${category} options`}
                  >
                    {options.base.map((item, index) => (
                      <li 
                        className="text-left" 
                        key={`${category}-base-${index}`}
                      >
                        {item} 
                      </li>
                    ))}
                  </ul> 
                </div>

                {options.premium && (
                  <div className="w-full text-left mt-2">
                    <p>
                      +${options.premium.price} {options.premium.name}  
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr 
          className={`${theme.layout.hr} ${theme.color.background.accent} w-full my-6`}
          aria-hidden="true"
        />

        {/* Signature Dishes */}
        <section 
          className="w-full mb-8"
          aria-labelledby="signature-dishes-heading"
        >
          <h2 
            id="signature-dishes-heading"
            className={`
              ${theme.color.text.primary} 
              ${theme.text.underline} 
              ${theme.text.subheading} 
              ${theme.layout.text} text-left mb-4
            `}
          >
            {signatureDishes.category}
          </h2>
          
          <div className="space-y-6">
            {signatureDishes.items.map((dish, i) => (
              <div 
                key={i} 
                className="text-left"
                role="article"
                aria-labelledby={`dish-${i}`}
              >
                <h3 
                  id={`dish-${i}`}
                  className={`
                    ${theme.color.text.primary}
                    ${theme.text.underline} 
                    ${theme.text.menuHeading} mb-1
                  `}
                >
                  {dish.name} - ${dish.price}
                </h3>
                <p className="mb-2"> {dish.description}</p>
                {dish.modifiers && (
                  <div>
                    <p className={`${theme.color.text.secondary} mb-1`}>Add-ons:</p>
                    <ul className="space-y-1">
                      {dish.modifiers.map((mods, i) => (
                        <li key={i}>
                          {mods.name} + ${mods.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr 
          className={`${theme.layout.hr} ${theme.color.background.primary} w-full my-6`}
          aria-hidden="true"
        />

        {/* Sandwiches */}
        <section 
          className="w-full mb-8"
          aria-labelledby="sandwiches-heading"
        >
          <h2 
            id="sandwiches-heading"
            className={`
              ${theme.color.text.primary} 
              ${theme.text.underline} 
              ${theme.text.subheading} 
              ${theme.layout.text} text-left mb-4
            `}
          >
            {sandwiches.category}
          </h2>
          
          <div className="space-y-6 mb-4">
            {sandwiches.items.map((dish, i) => (
              <div 
                key={i} 
                className="text-left"
                role="article"
                aria-labelledby={`sandwich-${i}`}
              >
                <h3 
                  id={`sandwich-${i}`}
                  className={`
                    ${theme.color.text.primary} 
                    ${theme.text.underline}
                    ${theme.text.menuHeading} mb-1
                  `}
                >
                  {dish.name} - ${dish.price}
                </h3>
                <p> {dish.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-left">
            <p className={`${theme.color.text.secondary} mb-2`}>Add-Ons:</p>
            <ul 
              className="flex flex-wrap gap-4"
              aria-label="Sandwich add-ons"
            >
              {sandwichAddOns.map((item, i) => (
                <li 
                  className="flex gap-1" 
                  key={i}
                >
                  <span>{item.name} -</span>
                  <span className={`${theme.color.text.primary}`}>${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr 
          className={`${theme.layout.hr} ${theme.color.background.accent} w-full my-6`}
          aria-hidden="true"
        />

        {/* Sides */}
        <section 
          className="w-full"
          aria-labelledby="sides-heading"
        >
          <h2 
            id="sides-heading"
            className={`
              ${theme.text.subheading} 
              ${theme.color.text.secondary} 
              ${theme.layout.text} text-left mb-4
            `}
          >
            {sides.category}
          </h2>
          
          <div 
            className="space-y-2"
            role="list"
            aria-label="Side dishes"
          >
            {sides.items.map((dish, i) => (
              <div 
                key={i} 
                className="flex justify-between items-center border-b border-gamboge py-3"
                role="listitem"
              >
                <h3 className={`
                  ${theme.color.text.primary} 
                  ${theme.text.body}
                `}>
                  {dish.name} 
                </h3>            
                <p className={`${theme.color.text.default}`}>${dish.price}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};
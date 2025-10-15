
import { theme } from "../../../styles/themes";
import { useResponsive } from "../../../utils/responsoveProvider";
import ScrollToAnchor from "../../../utils/scrollToAnchor";

import { hotDrinks, icedDrinks, drinkExtras, signatureLattes} from "../../../utils/getBeverageItems";


export const MenuBeverages = () => {
  const isMobile = useResponsive();
  const signatures = signatureLattes()
  const icedBevs = icedDrinks()
  const hotBevs = hotDrinks()
  const hotBevsItems = hotBevs.items
  const bevExtras = drinkExtras()
  
  return (
    <>
      <ScrollToAnchor/>
      {/* Menu Items */}
      <section className={`${isMobile ? "" : "m-2 text-center"}`}>
        {/* Signature Beverages */}
        <div>
          <h2 className={`
            ${theme.color.text.primary} 
            ${theme.text.underline} 
            ${theme.text.subheading} 
            ${theme.layout.text}`}>
              {signatures.category}
          </h2>
          <ul className="flex space-x-4 justify-center">
            <li key="1"> Sm - {signatures.prices.Sm} </li>
            <li key="2"> Md - {signatures.prices.Md}</li>
            <li key="3"> Lg - {signatures.prices.Lg} </li>
          </ul>
          <p className="italic text-xs flex justify-center">
            (Available hot or iced +50<span>&cent;</span>)
          </p>
        </div>
        <section className="flex flex-col divide-y-2 divide-gamboge items-center m-2">
          {signatures.flavors.map((flavor, i) => (
            <div key={i} className="flex flex-col w-3/4 items-center py-2 mb-2 ">
              <h1 className={`
                ${theme.color.text.primary}
                ${theme.text.menuHeading} 
                ${theme.text.underline}
                `}>
                  {flavor.name}
              </h1>
              <p className={`${theme.color.text.default} text-right`}> {flavor.description} </p>
            </div>
          ))}
        </section>
          
        <div className="flex justify-center "> 
          <hr className={`${theme.layout.hr} ${theme.color.background.primary}`}/>
        </div>

        {/* Hot Beverages */}
        <section>
          <div className="my-2 flex flex-col items-center">
            <h2 className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading} 
                `}>
                  {hotBevs.category}
              </h2>
              <ul className="flex space-x-4 justify-center">
                {Object.entries(hotBevs.sizes).map(([size, price]) => (
                  <li key={size}>{size} - {price}</li>
                ))}
              </ul>
              <p className={`${theme.text.advisoryText} flex justify-center`}>
                (Alternate Milks +50<span>&cent;</span>)
              </p>
          </div>
          <div className="flex flex-col items-center m-2 divide-y-2 divide-gamboge ">
            {hotBevsItems.map((item, i) => (
              <div key={i} className="flex flex-col w-3/4 items-center py-2 mb-2">
                <h2 className={`
                  ${theme.color.text.primary}
                  ${theme.text.underline}
                  ${theme.text.menuHeading}
                  `}>
                  {item.name}
                </h2>
                <ul className="flex space-x-4 justify-center">
                {/* VV Uses || {} to fall back to an empty object if item.sizes is falsy. Works even if item.sizes is missing. */}
                  {Object.entries(item.sizes || item.price || {}).map(([size, price]) => (
                    <li key={`${i}-${size}`}>
                      {size} - ${price}
                    </li>
                  ))}
                </ul>
                {/* Render tea varieties if they exist */}
                {item.varieties && (
                  <div className="text-sm mt-1 text-center">
                    <span className="font-semibold">Tea Flavors: </span>
                    <p>  
                      {item.varieties}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center "> 
          <hr className={`${theme.layout.hr} ${theme.color.background.primary}`}/>
        </div>
        {/* Iced Beverages */}
        <section>
          <div className="my-2 flex flex-col items-center">
            <h2 className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading} 
                `}>
                  {icedBevs.category}
            </h2>
            <ul className="flex space-x-4 justify-center">
              {Object.entries(icedBevs.sizes).map(([size, ounces]) => (
                <li key={size}>{size} - {ounces}</li>
              ))}
            </ul>
            <p className="italic text-xs flex justify-center">
              (Alternate Milks +50<span>&cent;</span>)
            </p>
          </div>
          <div className="flex flex-col items-center m-2 divide-y-2 divide-gamboge">
            {icedBevs.items.map((item, i) => (
              <div key={i} className="flex flex-col w-3/4 items-center py-2 mb-2">
                <h2 className={`
                  ${theme.color.text.primary}
                  ${theme.text.underline}
                  ${theme.text.menuHeading}
                  `}>
                  {item.name}
                </h2>
                <ul className="flex space-x-4 justify-center">
                {/* VV Uses || {} to fall back to an empty object if item.sizes is falsy. Works even if item.sizes is missing. */}
                  {Object.entries(item.sizes || item.price || {}).map(([size, price]) => (
                    <li key={`${i}-${size}`}>
                      {size} - ${price}
                    </li>
                  ))}
                </ul>
                {/* Render tea varieties if they exist */}
                {item.varieties && (
                  <div className="text-sm mt-1 text-center">
                    <span className="font-semibold">Tea Flavors: </span>
                    <p>  
                      {item.varieties}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center "> 
          <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
        </div>
        {/* Beverage Extras */}
        <section>
          <div className="my-2 flex flex-col items-center">
            <h2 className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading}
                `}>
              {bevExtras.category}
            </h2>
          </div>
          <div className="my-2 ">
            {bevExtras.items.map((item, i) => (
              <div key={i} className="my-2 flex flex-col items-center">
                {/* Name + Price (always shown) */}
                <h3 className={`
                  ${theme.color.text.primary}
                  ${theme.text.body}
                  flex 
                  `}>
                  <span className="mx-[4px]">{item.name} - </span>
                  <span> +{item.price.toFixed(2)}</span>
                </h3>

                {/* Description (if exists) */}
                {item.description && (
                  <p className="text-sm italic ">
                    {item.description} 
                  </p>
                )}

                {/* Varieties (if exists) */}
                {item.varieties && (
                  <div className={`${theme.text.advisoryText} flex flex-col items-center`}>
                    <span className="font-semibold">Flavors: </span>
                    <ul className={`${theme.text.body} text-center flex grid grid-cols-3 md:grid-cols-4`}>
                      {item.varieties.map((flavor, i) => (
                        <li className="m-2 h-min ">
                          {flavor}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};


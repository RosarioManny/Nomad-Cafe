import { theme } from "../../../styles/themes";
import ScrollToAnchor from "../../../utils/scrollToAnchor";
import { signatureLattes, icedDrinks, hotDrinks, drinkExtras, bottledDrinks } from "../../../utils/Menu/Menu_Items/getBeverageItems";
export const MenuBeverages = () => {
  const signatures = signatureLattes()
  const icedBevs = icedDrinks()
  const hotBevs = hotDrinks()
  const hotBevsItems = hotBevs.items
  const bevExtras = drinkExtras()
  const bottled = bottledDrinks()
  
  return (
    <>
      <ScrollToAnchor/>
      {/* Skip link for screen readers */}
      <a 
        href="#beverages-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
      >
        Skip to beverages menu
      </a>

      {/* Menu Items */}
      <section 
        id="beverages-content"
        className={`flex flex-col items-start mx-auto px-4  md:max-w-[60%] max-w-[90%] w-full ${theme.color.text.default}`}
        aria-labelledby="beverages-heading"
        role="region"
      >
        <div className="w-full max-w-3xl mx-auto px-4 mb-6">
          <p className="
            text-espresso/80 italic
            mt-4 px-4 py-1 shadow-sm
            w-fit
            bg-oatmilk 
            border-l-firebrick border-l-2 
            rounded-r-lg 
          ">
            Don't forget to drop by to see our seasonal specials! New items rotate regularly.
          </p>
        </div>
        <h1 id="beverages-heading" className="sr-only">Beverages Menu</h1>
        
        {/* Signature Beverages */}
        <section 
          className="w-full mb-8"
          aria-labelledby="signature-heading"
        >
          <div className="mb-6 flex flex-col items-center ">
            <h2 
              id="signature-heading"
              className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading} 
                ${theme.layout.text} mb-3 text-left
              `}
            >
              {signatures.category}
            </h2>
            <ul 
              className="flex space-x-6 mb-2"
              aria-label="Signature drink sizes and prices"
            >
              {Object.entries(signatures.prices).map(([size, price]) => (
                <li key={size}>
                  <span className="font-semibold">{size}</span> - ${price}
                </li>
              ))}
            </ul>
            <p 
              className="italic text-sm text-left"
              role="note"
              aria-label="Additional options"
            >
              (Available hot or iced +50<span aria-label="cents">&cent;</span>)
            </p>
          </div>
          
          <div 
            className="space-y-6"
            role="list"
            aria-label="Signature latte flavors"
          >
            {signatures.flavors.map((flavor, i) => (
              <div 
                key={i} 
                className="py-4 border-b-2 border-gamboge last:border-b-0"
                role="listitem"
              >
                <h3 
                  className={`
                    ${theme.color.text.primary}
                    ${theme.text.menuHeading} 
                    ${theme.text.underline}
                    mb-2 text-left
                  `}
                >
                  {flavor.name}
                </h3>
                <p className={`${theme.color.text.default} text-left`}>{flavor.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr 
          className={`${theme.layout.hr} ${theme.color.background.primary} w-full my-6`}
          aria-hidden="true"
        />

        {/* Hot Beverages */}
        <section 
          className="w-full mb-8 "
          aria-labelledby="hot-beverages-heading"
        >
          <div className="mb- flex flex-col items-center ">
            <h2 
              id="hot-beverages-heading"
              className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading} 
                mb-3 text-left
              `}
            >
              {hotBevs.category}
            </h2>
            <ul 
              className="flex space-x-6 mb-2"
              aria-label="Hot drink sizes and prices"
            >
              {Object.entries(hotBevs.sizes).map(([size, price]) => (
                <li key={size}>
                  <span className="font-semibold">{size}</span> - ${price}
                </li>
              ))}
            </ul>
            <p 
              className={`${theme.text.advisoryText} text-left`}
              role="note"
            >
              (Alternate Milks +50<span aria-label="cents">&cent;</span>)
            </p>
          </div>
          
          <div 
            className="space-y-6"
            role="list"
            aria-label="Hot beverage items"
          >
            {hotBevsItems.map((item, i) => (
              <div 
                key={i} 
                className="py-4 border-b-2 border-gamboge last:border-b-0"
                role="listitem"
              >
                <h3 
                  className={`
                    ${theme.color.text.primary}
                    ${theme.text.underline}
                    ${theme.text.menuHeading}
                    mb-2 text-left
                  `}
                >
                  {item.name}
                </h3>
                <ul 
                  className="flex space-x-6 mb-2"
                  aria-label={`${item.name} sizes`}
                >
                  {Object.entries(item.sizes || item.price || {}).map(([size, price]) => (
                    <li key={`${i}-${size}`}>
                      <span className="font-semibold">{size}</span> - ${price}
                    </li>
                  ))}
                </ul>
                {/* Render tea varieties if they exist */}
                {item.varieties && (
                  <div className="text-sm mt-3 text-left">
                    <span className="font-semibold">Tea Flavors: </span>
                    <p>{item.varieties}</p>
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

        {/* Iced Beverages */}
        <section 
          className="w-full mb-8"
          aria-labelledby="iced-beverages-heading"
        >
          <div className="mb-6 flex flex-col items-center ">
            <h2 
              id="iced-beverages-heading"
              className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading} 
                mb-3 text-left
              `}
            >
              {icedBevs.category}
            </h2>
            <ul 
              className="flex space-x-6 mb-2"
              aria-label="Iced drink sizes"
            >
              {Object.entries(icedBevs.sizes).map(([size, ounces]) => (
                <li key={size}>
                  <span className="font-semibold">{size}</span> - {ounces}
                </li>
              ))}
            </ul>
            <p 
              className="italic text-sm text-left"
              role="note"
            >
              (Alternate Milks +50<span aria-label="cents">&cent;</span>)
            </p>
          </div>
          
          <div 
            className="space-y-6"
            role="list"
            aria-label="Iced beverage items"
          >
            {icedBevs.items.map((item, i) => (
              <div 
                key={i} 
                className="py-4 border-b-2 border-gamboge last:border-b-0"
                role="listitem"
              >
                <h3 
                  className={`
                    ${theme.color.text.primary}
                    ${theme.text.underline}
                    ${theme.text.menuHeading}
                    mb-2 text-left
                  `}
                >
                  {item.name}
                </h3>
                <ul 
                  className="flex space-x-6 mb-2"
                  aria-label={`${item.name} sizes`}
                >
                  {Object.entries(item.sizes || item.price || {}).map(([size, price]) => (
                    <li key={`${i}-${size}`}>
                      <span className="font-semibold">{size}</span> - ${price}
                    </li>
                  ))}
                </ul>
                {/* Render tea varieties if they exist */}
                {item.varieties && (
                  <div className="text-sm mt-3 text-left">
                    <span className="font-semibold">Tea Flavors: </span>
                    <p>{item.varieties}</p>
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

        {/* Bottled Drinks */}
        <section 
          className="w-full mb-8"
          aria-labelledby="bottled-drinks-heading"
        >
          <div className="mb-6 flex flex-col items-center ">
            <h2 
              id="bottled-drinks-heading"
              className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading} text-left
              `}
            >
              {bottled.category}
            </h2>
          </div>
          
          <div 
            className="space-y-4"
            role="list"
            aria-label="Bottled drinks"
          >
            {bottled.items.map((item, i) => (
              <div 
                key={i} 
                className="py-3 border-b border-gamboge last:border-b-0"
                role="listitem"
              >
                <h3 
                  className={`
                    ${theme.color.text.primary}
                    ${theme.text.menuHeading}
                    mb-1 text-left
                  `}
                >
                  {item.name} - ${item.price}
                </h3>
                
                {/* Varieties (if exists) */}
                {item.varieties && (
                  <div className="text-sm mt-2 text-left">
                    <span className="font-semibold">Varieties: </span>
                    <ul 
                      className="flex flex-wrap gap-2 mt-1"
                      aria-label={`${item.name} varieties`}
                    >
                      {item.varieties.map((variety, varietyIndex) => (
                        <li 
                          key={varietyIndex}
                          className="bg-oatmilk px-2 py-1 rounded text-xs"
                        >
                          {variety}
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
          className={`${theme.layout.hr} ${theme.color.background.accent} w-full my-6`}
          aria-hidden="true"
        />

        {/* Beverage Extras */}
        <section 
          className="w-full"
          aria-labelledby="extras-heading"
        >
          <div className="mb-6 flex flex-col items-center ">
            <h2 
              id="extras-heading"
              className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading} text-left
              `}
            >
              {bevExtras.category}
            </h2>
          </div>
          
          <div 
            className="space-y-6"
            role="list"
            aria-label="Beverage extras"
          >
            {bevExtras.items.map((item, i) => (
              <div 
                key={i} 
                className="text-left"
                role="listitem"
              >
                {/* Name + Price */}
                <h3 
                  className={`
                    ${theme.color.text.primary}
                    ${theme.text.body}
                    mb-2
                  `}
                >
                  {item.name} - +${item.price.toFixed(2)}
                </h3>

                {/* Description (if exists) */}
                {item.description && (
                  <p className="text-sm italic mb-3">
                    {item.description} 
                  </p>
                )}

                {/* Varieties (if exists) */}
                {item.varieties && (
                  <div >
                    <span className="font-semibold">Flavors: </span>
                    <ul 
                      className={`text-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2`}
                      aria-label={`${item.name} flavor options`}
                    >
                      {item.varieties.map((flavor, flavorIndex) => (
                        <li 
                          key={flavorIndex}
                          className="bg-oatmilk border-gamboge border px-3 py-1 rounded"
                        >
                          {flavor}
                        </li>
                      ))}
                    </ul>
                    <p 
                      role="note"
                      aria-label="Seasonal item indicator"
                      className=" 
                        text-sm text-espresso/80 italic
                        mt-4 px-4 py-1 shadow-sm
                        w-fit
                        bg-oatmilk 
                        border-l-firebrick border-l-2 
                        rounded-r-lg 
                    ">
                      * = Seasonal / Temporary
                    </p>
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
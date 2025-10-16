import { theme } from "../../../styles/themes";
import { gelatoSweets } from "../../../utils/getSweetsItems";

export const MenuGelatos = () => {
  const gelato = gelatoSweets();

  return (
    <>
      {/* Skip link for screen readers */}
      <a 
        href="#gelato-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
      >
        Skip to gelato menu content
      </a>

      <section 
        id="gelato-content"
        className="mb-8 flex flex-col items-center mx-auto px-4 max-w-4xl w-full"
        aria-labelledby="gelato-heading"
      >
        <h2 
          id="gelato-heading"
          className={`
            ${theme.color.text.primary} 
            ${theme.text.underline} 
            ${theme.text.subheading}
            text-center m-4
          `}
        >
          {gelato.category}
        </h2>
        
        {/* Scoop Sizes */}
        <div 
          className="w-full grid gap-6 md:gap-8"
          role="list"
          aria-label="Gelato sizes and prices"
        >
          {gelato.items.map((item, i) => (
            <div 
              key={`${gelato.category}-${item.name}-${i}`}
              className="flex flex-col items-center py-4 border-b-2 border-gamboge last:border-b-0"
              role="listitem"
            >
              <h3 
                className={`
                  text-center
                  ${theme.text.underline} 
                  ${theme.text.menuHeading} 
                  ${theme.color.text.primary}
                  mb-4
                `}
              >
                {item.name}
              </h3>
              
              <ul 
                className="flex flex-wrap justify-center gap-6 md:gap-10 my-2"
                aria-label={`${item.name} prices`}
              >
                {Object.entries(item.price).map(([size, price], index) => (
                  <li 
                    key={`${item.name}-${size}-${index}`}
                    className="flex flex-col items-center text-center"
                  >
                    <span 
                      className="font-semibold text-lg"
                      aria-label={`Size: ${size}`}
                    >
                      {size}
                    </span>
                    <span 
                      className={`${theme.color.text.primary} font-bold text-lg`}
                      aria-label={`Price: $${price}`}
                    >
                      ${price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Optional Flavor List Section - Uncomment if you have flavors */}
      <section 
        className="mt-8 w-full" 
        aria-labelledby="flavors-heading"
        role="region"
      >
        <h3 
          id="flavors-heading" 
          className={`${theme.text.menuHeading} ${theme.color.text.secondary} text-center mb-4`}
        >
          Previous Flavors
        </h3>
        
        {/* Advisory Text - Made more accessible */}
        <div 
          className=" p-4 mb-6"
          role="note"
          aria-label="Important information about permanent flavors"
        >
          <p className={`${theme.text.advisoryText} text-espresso m-0`}>
            <strong className="font-semibold">Note:</strong> Vanilla Miso and Chocolate Hazelnut are permanent flavors. 
            There will always be at least 1 vegan option available.
          </p>
        </div>

        {/* Flavor List */}
        <div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6" 
          role="list" 
          aria-label="Previous gelato flavors"
        >
          {gelato.gelatoFlavors?.map((flavor, index) => (
            <span 
              key={`flavor-${index}`}
              className="
                bg-oatmilk px-4 py-2 rounded-lg text-espresso 
                border border-gamboge shadow-sm
                transition-all duration-200 hover:shadow-md hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
              "
              role="listitem"
              tabIndex={0}
              aria-label={`Flavor: ${flavor}`}
            >
              {flavor}
            </span>
          ))}
        </div>

        {/* Rotation Notice */}
        <p 
          className="
            text-center text-espresso/80 italic
            mt-4 mx-3 px-4 py-1 shadow-sm
            w-fit
            bg-oatmilk 
            border-l-firebrick border-l-2 
            rounded-r-lg "
          aria-label="Flavor rotation information"
        >
          Flavors rotate weekly - ask about today's selections!
        </p>
      </section>
      </section>
    </>
  );
};
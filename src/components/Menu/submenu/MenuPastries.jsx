import { theme } from "../../../styles/themes";
import ScrollToAnchor from "../../../utils/scrollToAnchor";
import { pastrySweets } from "../../../utils/getSweetsItems";

export const MenuPastries = () => {
  const pastries = pastrySweets();

  return (
    <>
      <ScrollToAnchor />
      {/* Skip link for screen readers */}
      <a 
        href="#pastries-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
      >
        Skip to pastries menu
      </a>

      {/* Menu Items */}
      <section 
        id="pastries-content"
        className={`flex flex-col items-start mx-auto px-4 sm:px-6 max-w-[60%] w-full`}
        aria-labelledby="pastries-heading"
        role="region"
      >
        <h1 id="pastries-heading" className="sr-only">Pastries Menu</h1>

        {/* Pastries Section */}
        <section 
          className="w-full mb-8"
          aria-labelledby="pastries-category-heading"
        >
          <div className="mb-6 text-left">
            <h2 
              id="pastries-category-heading"
              className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading}
                text-left mb-2
              `}
            >
              {pastries.category}
            </h2>
            <p 
              className={`${theme.text.advisoryText}
              text-center text-espresso/80 italic
              mt-4  px-4 py-1 shadow-sm
              w-fit
              bg-oatmilk 
              border-l-firebrick border-l-2 
              rounded-r-lg `}
              role="note"
              aria-label="Availability notice"
            >
              All pastries are 'first-come, first-serve' and may sell out
            </p>
          </div>

          <div 
            className="w-full space-y-4"
            role="list"
            aria-label="Pastry items"
          >
            {pastries.items.map((item, index) => (
              <div 
                key={index} 
                className="py-4 border-b-2 border-gamboge last:border-b-0"
                role="listitem"
              >
                <div className="flex justify-between items-baseline">
                  <h3 
                    className={`
                      ${theme.color.text.primary} 
                      ${theme.text.menuHeading}
                      text-left
                    `}
                    id={`pastry-${index}`}
                  >
                    {item.name}
                  </h3>
                  <span 
                    className={`${theme.color.text.default} text-right font-semibold`}
                    aria-labelledby={`pastry-${index}`}
                  >
                    {item.price}
                  </span>
                </div>
                {/* Description (if exists) */}
                {item.description && (
                  <p 
                    className={`
                      ${theme.color.text.default} 
                      text-sm italic mt-2 pl-1
                      text-left
                    `}
                    aria-describedby={`pastry-${index}`}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};
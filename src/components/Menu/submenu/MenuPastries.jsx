import { theme } from "../../../styles/themes";
import ScrollToAnchor from "../../../utils/scrollToAnchor";
import { pastrySweets } from "../../../utils/Menu/Menu_Items/getSweetsItems";
import { useEffect } from "react";

export const MenuPastries = () => {
  const pastries = pastrySweets();
  // console.log(pastries)
  useEffect(() => {
    pastries.items.forEach(element => {
      if (element.varients) {
        console.log("Has Varients", element)
      } else {
        console.log("No Varients", element)
      }
    });
  })

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
        className={`flex flex-col items-start mx-auto px-4 sm:px-6 md:max-w-[60%] max-w-[90%] w-full`}
        aria-labelledby="pastries-heading"
        role="region"
      >
        <h1 id="pastries-heading" className="sr-only">Pastries Menu</h1>

        {/* Pastries Section */}
        <section 
          className="w-full mb-8"
          aria-labelledby="pastries-category-heading"
        >
          <div className="mb-6 flex flex-col  items-center">
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
            <div className="mr-auto">
              <p 
                className={`
                  ${theme.text.advisoryText}
                  text-espresso/80 italic
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
                    ${item.price}
                  </span>
                </div>
                {/* Description (if exists) */}
                <ul className="text-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
                  {item.varieties && item.varieties.map((varient, i) => (
                    <li
                    className={`
                      ${theme.color.text.default} ${theme.color.background.secondary} ${theme.color.text.default}
                      text-sm
                      gap-2
                      p-2 rounded-lg 
                      border border-gamboge
                      focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
                      `}
                      aria-describedby={`pastry-${i}`}
                      >
                      {varient}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};
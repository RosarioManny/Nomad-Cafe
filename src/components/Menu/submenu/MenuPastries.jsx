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
            <div 
              className="
                h-32
                flex items-center justify-between
                rounded-lg 
                
                p-4 max-w-md mx-auto mt-4 
                gap-4" 
              role="region" 
              aria-label="Too Good To Go Reminder"
            >
              <div className="text-left flex-1">
                <p className="text-espresso">Help us reduce waste and rescue a bag today!</p>
                <p className="text-espresso/50 text-sm mt-1">Bags contain unsold items from the day. </p>
              </div>
              
              <a 
                className="
                  flex-shrink-0
                  flex items-center justify-center
                  bg-oatmilk hover:bg-gamboge/40
                  text-gamboge 
                  rounded-lg 
                  transition-colors duration-200 
                  border border-gamboge 
                  focus:outline-none focus:ring-2 focus:ring-gamboge focus:ring-offset-2
                  p-3
                  w-auto h-24 md:h-28"
                href="https://www.toogoodtogo.com/en-us/find/newyork/nomadcafeandeatery/bakedgoods/236600"
                aria-label="Visit Too Good To Go to rescue a bag"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  className="h-full w-auto object-contain"  
                  alt="Too Good To Go logo"  
                  src="/icons-logos/TGTG_logo_green_RGB.png"
                />
              </a>
            </div>
        </section>
      </section>
    </>
  );
};
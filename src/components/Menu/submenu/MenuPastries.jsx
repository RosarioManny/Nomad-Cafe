import { theme } from "../../../styles/themes";
import ScrollToAnchor from "../../../utils/scrollToAnchor";
import { pastrySweets } from "../../../utils/Menu/Menu_Items/getSweetsItems";
import { Pill, AdvisoryNote } from "../components/menu_components";

export const MenuPastries = () => {
  const pastries = pastrySweets()

  return (
    <>
      <ScrollToAnchor />

      <a
        href="#pastries-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
      >
        Skip to pastries menu
      </a>

      <section
        id="pastries-content"
        className={`flex flex-col items-start mx-auto px-4 sm:px-6 md:max-w-[60%] max-w-[90%] w-full`}
        aria-labelledby="pastries-heading"
        role="region"
      >
        <h1 id="pastries-heading" className="sr-only">Pastries Menu</h1>

        <section
          className="w-full mb-8"
          aria-labelledby="pastries-category-heading"
        >
          <div className="mb-6 flex flex-col items-center">
            <h2
              id="pastries-category-heading"
              className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} text-left mb-2`}
            >
              {pastries.category}
            </h2>
            <div className="mr-auto">
              <AdvisoryNote ariaLabel="Availability notice">
                All pastries are 'first-come, first-serve' and may sell out
              </AdvisoryNote>
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
                {/* Name + Price */}
                <div className="flex justify-between items-baseline mb-2">
                  <h3
                    id={`pastry-${index}`}
                    className={`${theme.color.text.primary} ${theme.text.menuHeading} text-left`}
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

                {/* Varieties — selectable options get bordered pills */}
                {item.varieties && (
                  <ul
                    className="flex flex-wrap gap-2 mt-2"
                    aria-label={`${item.name} varieties`}
                  >
                    {item.varieties.map((variety, i) => (
                      <Pill key={i}>{variety}</Pill>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Too Good To Go */}
          <div
            className="h-32 flex items-center justify-between rounded-lg p-4 max-w-md mx-auto mt-4 gap-4"
            role="region"
            aria-label="Too Good To Go reminder"
          >
            <div className="text-left flex-1">
              <p className="text-espresso">Help us reduce waste and rescue a bag today!</p>
              <p className="text-espresso/50 text-sm mt-1">Bags contain unsold items from the day.</p>
            </div>

            <a
              href="https://www.toogoodtogo.com/en-us/find/newyork/nomadcafeandeatery/bakedgoods/236600"
              className="
                flex-shrink-0 flex items-center justify-center
                bg-oatmilk hover:bg-gamboge/40
                text-gamboge rounded-lg
                transition-colors duration-200
                border border-gamboge
                focus:outline-none focus:ring-2 focus:ring-gamboge focus:ring-offset-2
                p-3 w-auto h-24 md:h-28"
              aria-label="Visit Too Good To Go to rescue a bag from Nomad Cafe"
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
  )
}
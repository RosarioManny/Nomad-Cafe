import { theme } from "../../../styles/themes";
import { gelatoSweets } from "../../../utils/Menu/Menu_Items/getSweetsItems";
import { Pill, AdvisoryNote } from "../components/menu_components";

export const MenuGelatos = () => {
  const gelato = gelatoSweets()

  return (
    <>
      
      <a
        href="#gelato-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
      >
        Skip to gelato menu content
      </a>

      <section
        id="gelato-content"
        className="mb-8 flex flex-col items-center mx-auto px-4 md:max-w-[60%] max-w-[90%] w-full"
        aria-labelledby="gelato-heading"
      >
        <h2
          id="gelato-heading"
          className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} text-center m-4`}
        >
          {gelato.category}
        </h2>

        <AdvisoryNote ariaLabel="Flavor rotation information">
          Note: All flavors rotate. Drop by to see what we have!
        </AdvisoryNote>

        {/* Scoop Sizes — informational, plain layout */}
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
                className={`text-center ${theme.text.underline} ${theme.text.menuHeading} ${theme.color.text.primary} mb-4`}
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
                    <span className="font-semibold text-lg" aria-label={`Size: ${size}`}>
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

        {/* Previous Flavors */}
        <section
          className="mt-8 w-full"
          aria-labelledby="flavors-heading"
        >
          <h3
            id="flavors-heading"
            className={`${theme.text.menuHeading} ${theme.color.text.secondary} text-center mb-4`}
          >
            Previous Flavors
          </h3>

          <AdvisoryNote ariaLabel="Vegan availability information">
            <strong className={theme.color.text.primary}>Note:</strong> A vegan option is always available.
          </AdvisoryNote>

          {/* Flavors — selectable/choosable, get bordered pills */}
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2 items-stretch"
            role="list"
            aria-label="Previous gelato flavors"
          >
            {gelato.gelatoFlavors?.map((flavor, index) => (
              <Pill className="text-center items-center flex justify-center h-full min-h-[3rem]" key={`flavor-${index}`}>{flavor}</Pill>
            ))}
          </ul>

          <AdvisoryNote ariaLabel="Flavor key">
            (v) = Vegan | * = Permanent
          </AdvisoryNote>
        </section>
      </section>
    </>
  )
}
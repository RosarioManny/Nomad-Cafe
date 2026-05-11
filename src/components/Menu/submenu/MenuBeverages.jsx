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

  const SizePills = ({ sizes, ariaLabel }) => (
    <ul
      className="flex flex-wrap gap-2 mb-2"
      aria-label={ariaLabel}
    >
      {Object.entries(sizes).map(([size, price]) => (
        <li
          key={size}
          className="bg-oatmilk px-3 py-1 rounded text-sm"
        >
          <span className="font-semibold">{size}</span> — {typeof price === 'number' ? `$${price}` : price}
        </li>
      ))}
    </ul>
  )

  const VarietyChips = ({ label, items, ariaLabel }) => (
    <div className="mt-2">
      <p className="text-sm font-semibold mb-1">{label}</p>
      <ul
        className="flex flex-wrap gap-2"
        aria-label={ariaLabel}
      >
        {items.map((variant, i) => (
          <li
            key={i}
            className="border border-gamboge border-1 bg-oatmilk px-2 py-1 rounded text-xs"
          >
            {variant}
          </li>
        ))}
      </ul>
    </div>
  )

  const AdvisoryNote = ({ children }) => (
    <p
      className="italic text-sm text-left"
      role="note"
    >
      {children}
    </p>
  )

  return (
    <>
      <ScrollToAnchor />

      <a
        href="#beverages-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
      >
        Skip to beverages menu
      </a>

      <section
        id="beverages-content"
        className={`flex flex-col items-start mx-auto px-4 md:max-w-[60%] max-w-[90%] w-full ${theme.color.text.default}`}
        aria-labelledby="beverages-heading"
        role="region"
      >
        <div className="max-w-3xl mb-6">
          <p className="
            text-espresso/80 italic
            mt-4 px-4 py-1 shadow-sm w-fit
            bg-oatmilk border-l-firebrick border-l-2 rounded-r-lg
          ">
            Don't forget to drop by to see our seasonal specials! New items rotate regularly.
          </p>
        </div>

        <h1 id="beverages-heading" className="sr-only">Beverages Menu</h1>

        {/* Signature Lattes */}
        <section
          className="w-full mb-8"
          aria-labelledby="signature-heading"
        >
          <div className="mb-6 flex flex-col items-center">
            <h2
              id="signature-heading"
              className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} ${theme.layout.text} mb-3 text-left`}
            >
              {signatures.category}
            </h2>
            <SizePills sizes={signatures.prices} ariaLabel="Signature latte sizes and prices" />
            <AdvisoryNote>
              (Available hot or iced +50<span aria-label="cents">&cent;</span>)
            </AdvisoryNote>
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
                <h3 className={`${theme.color.text.primary} ${theme.text.menuHeading} ${theme.text.underline} mb-2 text-left`}>
                  {flavor.name}
                </h3>
                <p className={`${theme.color.text.default} text-left`}>{flavor.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className={`${theme.layout.hr} ${theme.color.background.primary} w-full my-6`} aria-hidden="true" />

        {/* Hot Beverages */}
        <section
          className="w-full mb-8"
          aria-labelledby="hot-beverages-heading"
        >
          <div className="mb-6 flex flex-col items-center">
            <h2
              id="hot-beverages-heading"
              className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} mb-3 text-left`}
            >
              {hotBevs.category}
            </h2>
            <SizePills sizes={hotBevs.sizes} ariaLabel="Hot drink sizes and prices" />
            <AdvisoryNote>
              (Alternate Milks +50<span aria-label="cents">&cent;</span>)
            </AdvisoryNote>
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
                <h3 className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.menuHeading} mb-2 text-left`}>
                  {item.name}
                </h3>
                <SizePills
                  sizes={item.sizes || item.price || {}}
                  ariaLabel={`${item.name} sizes and prices`}
                />
                {item.varieties && (
                  <VarietyChips
                    label="Tea Flavors"
                    items={item.varieties}
                    ariaLabel={`${item.name} tea flavor options`}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className={`${theme.layout.hr} ${theme.color.background.primary} w-full my-6`} aria-hidden="true" />

        {/* Iced Beverages */}
        <section
          className="w-full mb-8"
          aria-labelledby="iced-beverages-heading"
        >
          <div className="mb-6 flex flex-col items-center">
            <h2
              id="iced-beverages-heading"
              className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} mb-3 text-left`}
            >
              {icedBevs.category}
            </h2>
            <SizePills sizes={icedBevs.sizes} ariaLabel="Iced drink sizes" />
            <AdvisoryNote>
              (Alternate Milks +50<span aria-label="cents">&cent;</span>)
            </AdvisoryNote>
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
                <h3 className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.menuHeading} mb-2 text-left`}>
                  {item.name}
                </h3>
                <SizePills
                  sizes={item.sizes || item.price || {}}
                  ariaLabel={`${item.name} sizes and prices`}
                />
                {item.varieties && (
                  <VarietyChips
                    label="Tea Flavors"
                    items={item.varieties}
                    ariaLabel={`${item.name} tea flavor options`}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className={`${theme.layout.hr} ${theme.color.background.primary} w-full my-6`} aria-hidden="true" />

        {/* Bottled Drinks */}
        <section
          className="w-full mb-8"
          aria-labelledby="bottled-drinks-heading"
        >
          <div className="mb-6 flex flex-col items-center">
            <h2
              id="bottled-drinks-heading"
              className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} text-left`}
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
                <div className="flex justify-between items-center gap-3 mb-1">
                  <h3 className={`${theme.color.text.primary} ${theme.text.menuHeading} text-left`}>
                    {item.name}
                  </h3>
                  <span className="bg-oatmilk px-3 py-1 rounded text-sm font-semibold">
                    ${item.price}
                  </span>
                </div>
                {item.varieties && (
                  <VarietyChips
                    label="Varieties"
                    items={item.varieties}
                    ariaLabel={`${item.name} varieties`}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className={`${theme.layout.hr} ${theme.color.background.accent} w-full my-6`} aria-hidden="true" />

        {/* Beverage Extras */}
        <section
          className="w-full"
          aria-labelledby="extras-heading"
        >
          <div className="mb-6 flex flex-col items-center">
            <h2
              id="extras-heading"
              className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} text-left`}
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
                className="text-left border-b border-gamboge last:border-b-0"
                role="listitem"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className={`${theme.color.text.primary} ${theme.text.body}`}>
                    {item.name}
                  </h3>
                  <span className="bg-oatmilk px-3 py-1 rounded text-sm font-semibold">
                    +${item.price.toFixed(2)}
                  </span>
                </div>

                {item.description && (
                  <p className="text-sm italic mb-3">{item.description}</p>
                )}

                {item.varieties && (
                  <>
                    <VarietyChips
                      label="Flavors"
                      items={item.varieties}
                      ariaLabel={`${item.name} flavor options`}
                    />
                    <p
                      role="note"
                      className="text-sm text-espresso/80 italic mt-4 px-4 py-1 shadow-sm w-fit bg-oatmilk border-l-firebrick border-l-2 rounded-r-lg"
                    >
                      * = Seasonal / Temporary
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
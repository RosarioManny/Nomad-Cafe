import { theme } from "../../../styles/themes";
import ScrollToAnchor from "../../../utils/scrollToAnchor";
import { getBagels, getSandwiches, getSides, getTravelerSandwich, getSignatureDishes } from "../../../utils/Menu/Menu_Items/getMenuItemCategory";

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

  const PricePill = ({ price }) => (
    <span className="bg-oatmilk border border-espresso px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">
      ${price}
    </span>
  )

  const Pill = ({ children }) => (
    <li className="border border-gamboge bg-oatmilk px-3 py-1 rounded text-sm">
      {children}
    </li>
  )

  const AdvisoryNote = ({ children, ariaLabel }) => (
    <p
      className="text-espresso/80 italic my-4 px-4 py-1 shadow-sm w-fit bg-oatmilk border-l-espresso border-l-2 rounded-r-lg"
      aria-label={ariaLabel}
    >
      {children}
    </p>
  )

  const ItemRow = ({ id, name, price }) => (
    <div className="flex items-center justify-between gap-4 mb-3">
      <h3
        id={id}
        className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.menuHeading}`}
      >
        {name}
      </h3>
      <PricePill price={price} />
    </div>
  )

  return (
    <>
      <ScrollToAnchor />

      <a
        href="#breakfast-menu-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
      >
        Skip to breakfast menu
      </a>

      <section
        id="breakfast-menu"
        className={`flex flex-col items-start mx-auto px-4 sm:px-6 max-w-3xl w-full ${theme.color.text.default}`}
        aria-labelledby="breakfast-menu-heading"
        role="region"
      >
        <h1 id="breakfast-menu-heading" className="sr-only">Breakfast Menu</h1>

        <AdvisoryNote ariaLabel="Vegan and Gluten-Free indicator">
          (v) = Vegan | GF = Gluten Free
        </AdvisoryNote>

        {/* Bagels */}
        <section
          className="w-full mb-8"
          aria-labelledby="bagels-heading"
        >
          <div className="flex items-center justify-between gap-4 mb-2">
            <h2
              id="bagels-heading"
              className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} ${theme.layout.text} text-left`}
            >
              {bagels.category}
            </h2>
            <PricePill price={bagels.price} />
          </div>

          <p className="text-left mb-4 text-sm">{bagels.description}</p>

          <ul
            className="flex flex-wrap justify-left gap-2 my-4"
            aria-label="Bagel varieties"
          >
            {bagels.variants.map((variant, i) => (
              <Pill key={i}>{variant}</Pill>
            ))}
          </ul>

          <p className={`${theme.color.text.secondary} text-left mb-2 text-sm font-semibold`}>
            Add-Ons
          </p>
          <ul
            className="flex flex-wrap gap-2"
            aria-label="Bagel add-ons"
          >
            {bagels.addOns.map((addOn, i) => (
              <Pill key={i}>{addOn.name} +${addOn.price}</Pill>
            ))}
          </ul>
        </section>

        <hr className={`${theme.layout.hr} ${theme.color.background.primary} w-full my-6`} aria-hidden="true" />

        {/* Traveler Sandwich */}
        <section
          className="w-full mb-8"
          aria-labelledby="traveler-heading"
        >
            <div className="flex items-center justify-between gap-4 mb-2">
            <h2
              id="bagels-heading"
              className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} ${theme.layout.text} text-left`}
            >
              {travelerSandwich.category}
            </h2>
            <PricePill price={travelerSandwich.price} />
          </div>

          <p className="text-left mb-6 text-sm">{travelerSandwich.description}</p>

          <div role="list">
            {Object.entries(travelerOptions).map(([category, options]) => (
              <div
                key={category}
                className="flex flex-col items-start my-4"
                role="listitem"
              >
                <div className="flex items-baseline justify-between w-full gap-2 mb-6 ">
                  <h3 className={`${theme.color.text.secondary} ${theme.text.underline} ${theme.text.menuHeading} text-left`}>
                    {category}
                  </h3>
                  {options.price && (
                    <PricePill price={`+${options.price} each`} />
                  )}
                </div>

                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${category} options`}
                >
                  {options.base.map((item, index) => (
                    <Pill key={`${category}-base-${index}`}>{item}</Pill>
                  ))}
                </ul>

              
              </div>
            ))}
          </div>
        </section>

        <hr className={`${theme.layout.hr} ${theme.color.background.accent} w-full my-6`} aria-hidden="true" />

        {/* Signature Dishes */}
        <section
          className="w-full mb-8"
          aria-labelledby="signature-dishes-heading"
        >
          <h2
            id="signature-dishes-heading"
            className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} ${theme.layout.text} text-left mb-4`}
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
                <ItemRow id={`dish-${i}`} name={dish.name} price={dish.price} />
                <p className="mb-2">{dish.description}</p>
                {dish.modifiers && (
                  <div>
                    <p className={`${theme.color.text.secondary} text-sm font-semibold mb-1`}>
                      Add-ons
                    </p>
                    <ul
                      className="flex flex-wrap gap-2"
                      aria-label={`${dish.name} add-ons`}
                    >
                      {dish.modifiers.map((mod, i) => (
                        <Pill key={i}>{mod.name} +${mod.price}</Pill>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className={`${theme.layout.hr} ${theme.color.background.primary} w-full my-6`} aria-hidden="true" />

        {/* Sandwiches */}
        <section
          className="w-full mb-8"
          aria-labelledby="sandwiches-heading"
        >
          <h2
            id="sandwiches-heading"
            className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} ${theme.layout.text} text-left mb-4`}
          >
            {sandwiches.category}
          </h2>

          <AdvisoryNote ariaLabel="Sandwich substitution information">
            GF bread or avocado substitutions available (additional charge)
          </AdvisoryNote>

          <div className="space-y-6 mb-6">
            {sandwiches.items.map((dish, i) => (
              <div
                key={i}
                className="text-left"
                role="article"
                aria-labelledby={`sandwich-${i}`}
              >
                <ItemRow id={`sandwich-${i}`} name={dish.name} price={dish.price} />
                <p>{dish.description}</p>
              </div>
            ))}
          </div>

          <p className={`${theme.color.text.secondary} text-sm font-semibold mb-2`}>
            Add-Ons
          </p>
          <ul
            className="flex flex-wrap gap-2"
            aria-label="Sandwich add-ons"
          >
            {sandwichAddOns.map((item, i) => (
              <Pill key={i}>{item.name} +${item.price}</Pill>
            ))}
          </ul>
        </section>

        <hr className={`${theme.layout.hr} ${theme.color.background.accent} w-full my-6`} aria-hidden="true" />

        {/* Sides */}
        <section
          className="w-full"
          aria-labelledby="sides-heading"
        >
          <h2
            id="sides-heading"
            className={`${theme.text.subheading} ${theme.color.text.secondary} ${theme.layout.text} text-left mb-4`}
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
                <h3 className={`${theme.color.text.primary} ${theme.text.body}`}>
                  {dish.name}
                </h3>
                <PricePill price={dish.price} />
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
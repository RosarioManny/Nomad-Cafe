import { theme } from "../../../styles/themes";
import { gelatoSweets } from "../../../utils/Menu/Menu_Items/getSweetsItems";
import { Pill, AdvisoryNote } from "../components/menu_components";
import { useState } from "react";

const FEATURED_FLAVORS = [
  "*Chocolate Hazelnut",
  "*Vanilla Miso",
  "Strawberry",
  "Creme Brulee",
  "Cold Brew",
  "Fruity Pebbles",
];

function FlavorList({ flavors, featured = FEATURED_FLAVORS }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? flavors : flavors.filter((f) => featured.includes(f));
  const hiddenCount = flavors.length - shown.length;
  const toggleClass = `${theme.color.text.primary} block mx-auto mt-3 text-sm underline underline-offset-2`;

  return (
    <div className="mt-2">
      <ul
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 items-stretch"
        role="list"
        aria-label="Gelato flavors"
      >
        {shown.map((flavor, index) => (
          <Pill
            className="text-center items-center flex justify-center h-full min-h-[3rem]"
            key={`flavor-${flavor}-${index}`}
          >
            {flavor}
          </Pill>
        ))}
      </ul>

      {(hiddenCount > 0 || expanded) && (
        <button type="button" onClick={() => setExpanded(!expanded)} className={toggleClass}>
          {expanded ? "Show fewer" : `Show ${hiddenCount} more flavors`}
        </button>
      )}
    </div>
  );
}

function ScoopSizes({ items, category }) {
  return (
    <div className="w-full grid gap-6 md:gap-8" role="list" aria-label="Gelato sizes and prices">
      {items.map((item, i) => (
        <div
          key={`${category}-${item.name}-${i}`}
          className="flex flex-col w-full items-center py-4 border-b-2 border-gamboge last:border-b-0"
          role="listitem"
        >
          <h3 className={`text-center ${theme.text.underline} ${theme.text.menuHeading} ${theme.color.text.primary} mb-4`}>
            {item.name}
          </h3>
          <ul className="grid grid-cols-2 gap-2 md:gap-4" aria-label={`${item.name} prices`}>
            {Object.entries(item.price).map(([size, price], index) => (
              <li
                key={`${item.name}-${size}-${index}`}
                className={`${theme.color.text.default} ${theme.text.body} flex gap-2 justify-between font-bold border-l border-l-[3px] border-l-firebrick bg-oatmilk px-3 py-1 rounded`}
              >
                <span aria-label={`Size: ${size}`}>{size} -</span>
                <span aria-label={`Price: $${price}`}>${price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export const MenuGelatos = () => {
  const gelato = gelatoSweets();

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
        className="mb-8 flex flex-col items-center mx-auto px-4 md:max-w-[60%] w-full"
        aria-labelledby="gelato-heading"
      >
        <h2 id="gelato-heading" className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.subheading} text-center m-4`}>
          {gelato.category}
        </h2>

        <AdvisoryNote ariaLabel="Flavor rotation information">
          Note: All flavors rotate. Drop by to see what we have!
        </AdvisoryNote>

        <ScoopSizes items={gelato.items} category={gelato.category} />

        <section className="mt-8 w-full" aria-labelledby="flavors-heading">
          <h3 id="flavors-heading" className={`${theme.text.subheading} ${theme.color.text.default} underline text-center mb-4`}>
            Previous Flavors
          </h3>

          <AdvisoryNote ariaLabel="Vegan availability information">
            <strong className={theme.color.text.primary}>Note:</strong> A vegan option is always available.
          </AdvisoryNote>

          <FlavorList flavors={gelato.gelatoFlavors} />

          <AdvisoryNote ariaLabel="Flavor key">
            (v) = Vegan | * = Permanent
          </AdvisoryNote>
        </section>
      </section>
    </>
  );
};
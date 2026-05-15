import { theme } from "../../../styles/themes"

// Pill — for options, variants, and modifiers
export const Pill = ({ className, children }) => (
  <li className={`border border-gamboge bg-oatmilk px-3 py-1 rounded text-sm ${className || ''}`}>
    {children}
  </li>
)

// PricePill — for standalone prices
export const PricePill = ({ price }) => (
  <span className={`px-3 py-1 rounded text- font-semibold whitespace-nowrap`}>
    {price}
  </span>
)

// SizePills — for size/price pairs displayed as a pill row
export const SizePills = ({ sizes, ariaLabel }) => (
  <ul
    className="flex flex-wrap gap-2 mb-2"
    aria-label={ariaLabel}
  >
    {Object.entries(sizes).map(([size, price]) => (
      <li
        key={size}
        className="border border-gamboge bg-oatmilk px-3 py-1 rounded text-sm"
      >
        <span className="font-semibold">{size}</span> — {typeof price === 'number' ? `$${price}` : price}
      </li>
    ))}
  </ul>
)

// VarietyChips — for flavor/variety chip lists with a label
export const VarietyChips = ({ label, items, ariaLabel }) => (
  <div className="mt-2">
    <p className="text-sm font-semibold mb-1">{label}</p>
    <ul
      className="flex flex-wrap gap-2"
      aria-label={ariaLabel}
    >
      {items.map((variant, i) => (
        <li
          key={i}
          className="border border-gamboge bg-oatmilk px-2 py-1 rounded text-xs"
        >
          {variant}
        </li>
      ))}
    </ul>
  </div>
)

// AdvisoryNote — callout style for substitutions, seasonal notes, indicators
export const AdvisoryNote = ({ children, ariaLabel }) => (
  <p
    className="text-espresso/80 italic my-4 px-4 py-1 shadow-sm w-fit bg-oatmilk border-l-espresso border-l-2 rounded-r-lg"
    aria-label={ariaLabel}
    role="note"
  >
    {children}
  </p>
)

// ItemRow — name + price pill in a justified row, for menu items with descriptions
export const ItemRow = ({ id, name, price }) => (
  <div className="flex items-center justify-between gap-4 mb-1">
    <h2
      id={id}
      className={`${theme.color.text.primary} ${theme.text.underline} ${theme.text.menuHeading}`}
    >
      {name}
    </h2>
    <p className={`${theme.color.text.primary} font-black`}>
      ${price}
    </p>
  </div>
)
import Header from "./partials/_header";
import { theme } from "../styles/themes";
import { useResponsive } from "../utils/responsoveProvider";
import ScrollToAnchor from "../utils/scrollToAnchor";
import  MenuNav  from "./partials/_menuNav";
import { pastrySweets, gelatoSweets } from "../utils/getSweetsItems";

const MenuSweets = () => {
  const isMobile = useResponsive();
  const pastries = pastrySweets()
  const gelato = gelatoSweets()
  console.log("GEL>>", gelato)
  console.log("PAS>>",pastries)
  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={"/products/Nomad-Danishes-Full.jpg"}
        tag={"/icons-logos/Nomad-White-Sweets.webp"}
      />
      {/* Mini Nav */}
      <MenuNav />
      <div className="flex justify-center "> 
        <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
      </div>
      {/* Menu Items */}
      <section className={`${isMobile ? "" : "m-2 flex flex-col align-center items-center"}`}>
        {/* Pastries Section */}
        <section>
          <div className="mb-6">
            <h2 className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading}
                flex justify-center
                `}>
              {pastries.category}
            </h2>
          </div>

          <div className="grid gap-3">
            {pastries.items.map((item, index) => (
              <div key={index} className="border-b border-gamboge pb-2">
              
                <div className="flex justify-between items-baseline">
                  <h3 className={`
                    ${theme.color.text.primary} 
                    ${theme.text.menuHeading}
                    font-medium
                    `}>
                    {item.name}
                  </h3>
                  <span className={`${theme.color.text.default} text-right`}>
                    {item.price}
                  </span>
                </div>
                {/* Description (if exists) */}
                {item.description && (
                  <p className={`
                    ${theme.color.text.default} 
                    text-sm italic mt-1 pl-1
                    `}>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className={`${theme.layout.hr}  ${theme.color.background.primary}`}/>

        {/* Gelato Section */}
        <section className="mb-8">
          <h2 className={`
            ${theme.color.text.primary} 
            ${theme.text.underline} 
            ${theme.text.subheading}
            flex justify-center m-4
          `}>
            {gelato.category}
          </h2>
          {/* Scoop Sizes */}
          <div className="flex flex-col items-center mb-2">
            <h3 className={`
              ${theme.color.text.primary}
              ${theme.text.menuHeading}
              font-medium
            `}>
              Scoops
            </h3>
            <div className="flex space-x-4">
              {Object.entries(gelato.price).map(([size, price]) => (
                <div key={size} className="text-right">
                  <span className="block ${theme.color.text.secondary} text-sm">{size}</span>
                  <span className="block font-medium">${price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Optional Flavor List */}
        </section>
      </section>
    </>
  );
};

export default MenuSweets;
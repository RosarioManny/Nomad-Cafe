import Header from "./partials/_header";
import { theme } from "../styles/themes";
import { useResponsive } from "../utils/responsoveProvider";
import ScrollToAnchor from "../utils/scrollToAnchor";
import  MenuNav  from "./partials/_menuNav";
import { pastrySweets, gelatoSweets } from "../utils/getSweetsItems";
import { li } from "framer-motion/client";

const MenuSweets = () => {
  const isMobile = useResponsive();
  const pastries = pastrySweets()
  const gelato = gelatoSweets()
  console.log("GEL>>", gelato.items)
  console.log("PAS>>",pastries)
  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={"/products/Nomad-Danishes-Adjusted.webp"}
        tag={"/icons-logos/Nomad-White-Sweets.webp"}
      />
      {/* Mini Nav */}
      <MenuNav />
      <div className="flex justify-center "> 
        <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
      </div>
      {/* Menu Items */}
      <section className={`flex flex-col align-center items-center`}>

        {/* Pastries Section */}
        <section className="items-center flex flex-col justify-center">
          <div className=" mb-6">
            <h2 className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading}
                flex justify-center
                `}>
              {pastries.category}
            </h2>
            <p className={`${theme.text.advisoryText} flex justify-center`}>
              (All pastries are 'first-come, first-serve' and may sell out)
            </p>
          </div>

          <div className="w-3/4 grid divide-y-2 divide-gamboge gap-3">
            {pastries.items.map((item, index) => (
              <div key={index} className="py-4">
              
                <div className="flex justify-between items-baseline">
                  <h3 className={`
                    ${theme.color.text.primary} 
                    ${theme.text.menuHeading}
                    
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
        <section className="mb-8 flex flex-col">
          <h2 className={`
            ${theme.color.text.primary} 
            ${theme.text.underline} 
            ${theme.text.subheading}
            flex justify-center m-4
          `}>
            {gelato.category}
          </h2>
          {/* Scoop Sizes */}
          <div className="w-max grid divide-y-2 divide-gamboge gap-3">
            {gelato.items.map((item, i ) => (
              <div key={`${gelato.category}-${item}-${i}`} className="flex flex-col items-center py-2">
                <span className={`
                  flex justify-center items-baseline items-center 
                  ${theme.text.underline} 
                  ${theme.text.menuHeading} 
                  ${theme.color.text.primary}`}>
                    {item.name}
                  </span>
                <ul className="flex text-center gap-x-10 my-6">
                {Object.entries(item.price).map(([size, price]) => (
                  <li>
                    <h3>
                      {size}
                    </h3>
                    <span>
                      {price}
                    </span>
                  </li>
                ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Optional Flavor List */}
        </section>
      </section>
    </>
  );
};

export default MenuSweets;
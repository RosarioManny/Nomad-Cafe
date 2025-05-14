import Header from "./partials/_header";
import { theme } from "../styles/themes";
import { useResponsive } from "../utils/responsoveProvider";
import ScrollToAnchor from "../utils/scrollToAnchor";
import  MenuNav  from "./partials/_menuNav";
import { hotDrinks, icedDrinks, drinkExtras, signatureLattes} from "../utils/getBeverageItems";
import { div, li, p } from "framer-motion/client";

const MenuBeverages = () => {
  const isMobile = useResponsive();
  
  const signatures = signatureLattes()
  // console.log("Sigs >>", signatures)
  
  const icedBevs = icedDrinks()
  console.log("Ice >>", icedBevs)
  
  const hotBevs = hotDrinks()
  const hotBevsItems = hotBevs.items
  console.log("Hot >>", hotBevsItems)
  
  const bevExtras = drinkExtras()
  console.log("Extras >>", bevExtras)
  
  
  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={"/products/Capuccino_heart.jpg"}
        tag={"/icons-logos/Nomad-White-Beverages.webp"}
      />
      {/* Mini Nav */}
        <MenuNav />
      <div className="flex justify-center "> 
        <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
      </div>

      {/* Menu Items */}
      <section className={`${isMobile ? "" : "m-2 text-center"}`}>
        {/* Signature Beverages */}
          <h2 className={`
            ${theme.color.text.primary} 
            ${theme.text.underline} 
            ${theme.text.subheading} 
            ${theme.layout.text}`}>
              {signatures.category}
          </h2>
        <section className=" m-2 grid-cols-2 grid">
          {signatures.flavors.map((flavor, i) => (
            <div key={i} className="m-2 text-center">
              <h1 className={`
                ${theme.color.text.secondary}
                ${theme.text.underline} 
                ${theme.text.menuHeading} 
                `}>
                  {flavor.name}
              </h1>
              <p> {flavor.description} </p>
            </div>
          ))}
        </section>
        <div className="flex justify-center "> 
          <hr className={`${theme.layout.hr} ${theme.color.background.primary}`}/>
        </div>
        {/* Hot Beverages */}
        <section>
          <div className="mb-8">
            <h2 className={`
                ${theme.color.text.primary} 
                ${theme.text.underline} 
                ${theme.text.subheading} 
                
                `}>
                  {hotBevs.category}
              </h2>
              <ul className="flex space-x-4 justify-center">
                <li key="1"> Sm - {hotBevs.sizes.Small} </li>
                <li key="2"> Md - {hotBevs.sizes.Medium}</li>
                <li key="3"> Lg - {hotBevs.sizes.Large} </li>
              </ul>
          </div>
            {hotBevsItems.map((item, i) => (
              <div className="my-2">
                <h2 className={`
                  ${theme.color.text.primary}
                  `}>
                  {item.name}
                </h2>
                {item.price.Single ? 
                (
                <ul className="flex space-x-4 justify-center">
                  <li key={i}> Single - {item.price.Single} </li>
                  <li key={i}> Double - {item.price.Double}</li>
                </ul>
                ) : (
                <ul className="flex space-x-4 justify-center">
                  <li key={i}> Sm - {item.price.Small} </li>
                  <li key={i}> Md - {item.price.Medium}</li>
                  <li key={i}> Lg - {item.price.Large} </li>
                </ul>
                )}
                {item.selection && (
                    <ul className=" grid grid-cols-2 list-none">
                      {item.selection.map((selectionItem, idx) => (
                        <li key={idx}>{selectionItem}</li>
                      ))}
                    </ul>
                )}
                {item.teaVarieties && (
                  <div>
                    <h3 className="text-sm mt-1">Choices: </h3>
                    <p> {item.teaVarieties}</p>
                  </div>
                )}
              </div>
            ))}
        </section>
        <div className="flex justify-center "> 
          <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
        </div>
        {/* Iced Beverages */}
        <section>

        </section>
        <div className="flex justify-center "> 
          <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
        </div>
        {/* Beverage Extras */}
        <section>

        </section>
      </section>
    </>
  );
};

export default MenuBeverages;
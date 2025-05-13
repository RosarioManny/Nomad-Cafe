import Header from "./partials/_header";
import { theme } from "../styles/themes";
import { useResponsive } from "../utils/responsoveProvider";
import ScrollToAnchor from "../utils/scrollToAnchor";
import  MenuNav  from "./partials/_menuNav";
import { hotDrinks, icedDrinks, drinkExtras, signatureLattes} from "../utils/getBeverageItems";

const MenuBeverages = () => {
  const isMobile = useResponsive();
  
  const signatures = signatureLattes()
  console.log("Sigs >>", signatures)
  
  const icedBevs = icedDrinks()
  console.log("Ice >>", icedBevs)
  
  const hotBevs = hotDrinks()
  console.log("Hot >>", hotBevs )
  
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
      <section className={`${isMobile ? "" : "m-2 flex flex-col align-center items-center"}`}>
        {/* Signature Beverages */}
        <section className="w-full m-2 flex flex-col items-center">
        <h2 className={`
            ${theme.color.text.primary} 
            ${theme.text.underline} 
            ${theme.text.subheading} 
            ${theme.layout.text}`}>
              {signatures.category}
          </h2>
            {signatures.flavors.map((flavor, i) => (
              <div key={i} className="m-2 text-center">
                <h1 className={`
                  ${theme.color.text.secondary}
                  ${theme.text.underline} 
                  ${theme.text.menuHeading} 
                  `}>
                    {flavor.name}
                </h1>
                <p> {flavor.description}</p>
              </div>
            ))}
        </section>
        {/* Hot Beverages */}
        <section>

        </section>
        {/* Iced Beverages */}
        <section>

        </section>
        {/* Beverage Extras */}
        <section>

        </section>
      </section>
    </>
  );
};

export default MenuBeverages;
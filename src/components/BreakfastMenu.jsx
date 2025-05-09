import Header from "./partials/_header";
import { theme } from "../styles/themes";
import { useResponsive } from "../utils/responsoveProvider";
// import { AnimatePresence, motion } from "framer-motion";
import ScrollToAnchor from "../utils/scrollToAnchor";
import menuItems from "../database/menuItems";
import { getBagels, getSandwiches, getSides, getSignatureDishes, getTravelerSandwich} from "../utils/getMenuItemCategory";
const BreakfastMenu = () => {
  const isMobile = useResponsive();
  
  const bagels = getBagels()
  console.log(bagels)
  const sandwiches = getSandwiches()
  const sides = getSides()
  const signatureDishes = getSignatureDishes()
  const travelerSandwich = getTravelerSandwich()

    
  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={"/products/green_traveler.jpg"}
        tag={"/icons-logos/Nomad-White-Breakfast.webp"}
      />
      {/* Mini Nav */}
      <section className={`${theme.layout.column}`}>
        <div className={`${theme.layout.row} space-x-10`}>
          <p>
            Foods
          </p>
          <p>
            Drinks
          </p>
          <p>
            Sweets
          </p>
        </div>
        <a href="">
          Download Menus
        </a>
      </section>
        <h1>
          Breakfast
        </h1>
      <section className={`${isMobile ? "" : "flex flex-col align-center items-center"}`}>
      
    </section>
    </>
  );
};

export default BreakfastMenu;
import Header from "./partials/_header";
import { useState } from 'react';
import { theme } from "../styles/themes";
import { useResponsive } from "../utils/responsoveProvider";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToAnchor from "../utils/scrollToAnchor";

const BreakfastMenu = () => {
  const isMobile = useResponsive();
  const Bagels = [ "Plain", "Everything", "Whole Wheat", "Sesame", "Cinnamon Raisin"]
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
          <h1>
            Foods
          </h1>
          <h1>
            Drinks
          </h1>
          <h1>
            Sweets
          </h1>
        </div>
        <a href="">
          Download Menus
        </a>
      </section>
        <h1>
          Breakfast
        </h1>
      <section className={`grid grid-cols-2`}>
        <div  className={`${theme.layout.column} space-x-10`}> 
          <div className={`${theme.layout.row}`}>
          <h2>Bagels - All are Vegan (v)</h2>
          <p> - 2.75</p>
          </div>
          <ul className="grid grid-cols-2">
          {Bagels.map((flavor, i) => (
            <li
            key={i}
            >
              {flavor}
            </li>
          ))}
          </ul> 

        </div>
      </section>
    </>
  );
};

export default BreakfastMenu;
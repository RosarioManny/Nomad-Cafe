import Header from "../partials/_header";
import { useEffect, useState } from 'react';
import { theme } from "../../styles/themes";
import { MenuBreakfast, MenuBeverages, MenuPastries } from './submenu/index'
import ScrollToAnchor from "../../utils/scrollToAnchor";
import { MenuGelatos } from "./submenu/MenuGelatos";

const Menu = () => {
  const [category, setCategory] = useState('breakfast')

  // useEffect(() => {
  //   console.log(category)
  // }, [category])

  const handleKeyDown = (event, newCategory) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setCategory(newCategory);
    }
  }

  const menuCategories = [
    { id: 'breakfast', label: 'Breakfast', Component: MenuBreakfast },
    { id: 'drinks', label: 'Drinks', Component: MenuBeverages },
    { id: 'sweets', label: 'Sweets', Component: MenuPastries },
    { id: 'gelato', label: 'Gelato', Component: MenuGelatos }
  ]

  const ActiveComponent = menuCategories.find(cat => cat.id === category)?.Component
  
  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={"/products/green_traveler.webp"}
        tag={"/icons-logos/Nomad-White-Cafe.webp"}
        img_alt="Nomad Cafe's signature Traveler sandwich"
      />
      
      {/* Skip link for screen readers */}
      <a 
        href="#menu-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded shadow-lg"
      >
        Skip to menu content
      </a>

      <nav 
        className="sticky top-5 z-10 mx-4 my-8"
        aria-label="Menu categories"
      >
        <div className="
          bg-oatmilk shadow-lg rounded-xl 
          max-w-6xl mx-auto
          px-4 py-3
          flex flex-col sm:flex-row sm:items-center sm:justify-between
          gap-4
        ">
          {/* Menu Category Buttons */}
          <ul 
            className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full sm:w-auto"
            role="tablist"
            aria-label="Select menu category"
          >
            {menuCategories.map((menuCat) => (
              <li key={menuCat.id}>
                <button 
                  onClick={() => setCategory(menuCat.id)}
                  onKeyDown={(e) => handleKeyDown(e, menuCat.id)}
                  className={`
                    px-4 py-2 rounded-lg transition-all duration-300 ease-in-out 
                    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
                    whitespace-nowrap
                    ${category === menuCat.id 
                      ? 'bg-amber-400 text-espresso shadow-md' 
                      : 'bg-amber-100 text-espresso hover:bg-amber-200 hover:shadow-sm'
                    }
                  `}
                  role="tab"
                  aria-selected={category === menuCat.id}
                  aria-controls={`${menuCat.id}-menu`}
                  id={`${menuCat.id}-tab`}
                >
                  {menuCat.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Download Link */}
          <div className="flex justify-center sm:justify-end">
            <a 
              className="
                italic text-sm px-3 py-2 
                text-espresso hover:text-firebrick 
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded
                whitespace-nowrap
              " 
              href="/NomadCafe-Site/public/products/Large-Menu.jpg" 
              download="Nomad-Cafe-Menu.jpg"
              aria-label="Download full menu as image"
            >
              Download Full Menu
            </a>
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <main id="menu-content">
        {menuCategories.map((menuCat) => (
          <div 
            key={menuCat.id}
            role="tabpanel"
            id={`${menuCat.id}-menu`}
            aria-labelledby={`${menuCat.id}-tab`}
            hidden={category !== menuCat.id}
          >
            {category === menuCat.id && <menuCat.Component />}
          </div>
        ))}
      </main>
    </>
  );
};

export default Menu;
import Header from "../partials/_header";
import { useEffect, useState } from 'react';
import { theme } from "../../styles/themes";
import { useResponsive } from "../../utils/responsoveProvider";
import { AnimatePresence, motion } from "framer-motion";
import { MenuBreakfast, MenuBeverages, MenuSweets} from './submenu/index'
import ScrollToAnchor from "../../utils/scrollToAnchor";
import { p } from "framer-motion/client";

const Menu = () => {
  const isMobile = useResponsive();
  const [category, setCategory] = useState('breakfast')
  // const [hoveredItem, setHoveredItem] = useState(null);

  // useEffect(()=> {
  //   const handleChange = () => {
      
  //   }
  // }, [category])  
  const menuCategories = [
    {
      id: 'breakfast',
      title: '/icons-logos/Nomad-White-Breakfast.webp',
      image: '/products/Simple-Traveler.webp',
      alt: 'Breakfast and Sandwich Menu',
      link: '/menu/breakfast'
    },
    {
      id: 'pastries',
      title: '/icons-logos/Nomad-White-Sweets.webp',
      image: '/products/Nomad-Danishes-Adjusted.webp',
      alt: 'Fresh Pastries and Baked Goods',
      link: '/menu/sweets'
    },
    {
      id: 'beverages',
      title: '/icons-logos/Nomad-White-Beverages.webp',
      image: '/products/Latte-Many-petals-art.webp',
      alt: 'Coffee and Drink Menu',
      link: '/menu/beverages'
    }
  ];

  useEffect(() => {
    console.log(category)
  }, [category])
  
  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={"/products/green_traveler.webp"}
        tag={"/icons-logos/Nomad-White-Cafe.webp"}
      />
      <ul className="flex justify-between mx-7 bg-amber-50 p-4 rounded-xl my-8">
  <li>
    <button 
      onClick={() => setCategory('breakfast')}
      className={`px-6 py-2 rounded-lg transition-color duration-500 ease-in-out ${
        category === 'breakfast' ? 'bg-amber-400 text-gray-900' : 'bg-amber-100 text-gray-700 hover:bg-amber-200'
      }`}
    >
      Breakfast
    </button>
  </li>
  <li>
    <button 
      onClick={() => setCategory('drinks')}
      className={`px-6 py-2 rounded-lg transition-color duration-500 ease-in-out ${
        category === 'drinks' ? 'bg-amber-400 text-gray-900' : 'bg-amber-100 text-gray-700 hover:bg-amber-200'
      }`}
    >
      Drinks
    </button>
  </li>
  <li>
    <button 
      onClick={() => setCategory('sweets')}
      className={`px-6 py-2 rounded-lg transition-color duration-500 ease-in-out ${
        category === 'sweets' ? 'bg-amber-400 text-gray-900' : 'bg-amber-100 text-gray-700 hover:bg-amber-200'
      }`}
    >
      Sweets
    </button>
  </li>
  <a className="italic text-sm m-2" href="/NomadCafe-Site/public/products/Large-Menu.jpg" download="Large-Menu.jpg">
    (Download Menus)
  </a>
</ul>
      {category === 'breakfast' && (
        <MenuBreakfast />
      )}
      {category === 'drinks' && (
        <MenuBeverages />
      )}
      {category === 'sweets' && (
        <MenuSweets />
      )}
    </>
  );
};

export default Menu;
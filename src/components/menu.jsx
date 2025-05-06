import Header from "./partials/_header";
import { useState } from 'react';
import { theme } from "../styles/themes";
import { useResponsive } from "../utils/responsoveProvider";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToAnchor from "../utils/scrollToAnchor";

const Menu = () => {
  const isMobile = useResponsive();
  const [hoveredItem, setHoveredItem] = useState(null);

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
      image: '/products/Nomad-Danishes-Full.jpg',
      alt: 'Fresh Pastries and Baked Goods',
      link: '/menu/pastries'
    },
    {
      id: 'beverages',
      title: '/icons-logos/Nomad-White-Beverages.webp',
      image: '/products/Latte-Many-petals-art.jpg',
      alt: 'Coffee and Drink Menu',
      link: '/menu/beverages'
    }
  ];

  return (
    <>
      <ScrollToAnchor/>
      <Header
        id="Header"
        img={"/products/green_traveler.jpg"}
        tag={"/icons-logos/Nomad-White-Breakfast.webp"}
      />
      
      <div className="flex flex-col items-center">
        {/* Desktop View - Grid Layout */}
        {isMobile ? (
          <div className={`grid grid-cols-3 gap-8 w-4/5 ${theme.layout.para_spacing}`}>
            {menuCategories.map((category) => (
              <motion.div
                key={category.id}
                className="relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setHoveredItem(category.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <a href={category.link}>
                  <AnimatePresence>
                    {hoveredItem === category.id && (
                      <motion.div
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.h2 
                          initial={{ y: 34 }}
                          animate={{ y: 0 }}
                          exit={{ y: 34 }}
                        >
                          <img src={category.title} alt={category.id} />
                        </motion.h2>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-96 object-cover rounded-2xl border-4 border-gamboge"
                    loading="lazy"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Mobile View - Carousel Style */
          <div className={`flex overflow-x-auto w-full p-4 space-x-4 ${theme.layout.para_spacing}`}>
            {menuCategories.map((category) => (
              <div key={category.id} className="flex-shrink-0 w-3/4">
                <a href={category.link}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.alt}
                      className="w-full h-64 object-cover rounded-2xl border-4 border-firebrick"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h2 className="text-oatmilk text-3xl font-bold">
                        <img src={category.title} alt={category.id} />
                      </h2>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
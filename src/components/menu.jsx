import Header from "./partials/_header"
import { useState } from 'react'
import { theme } from "../styles/themes"
import { useResponsive } from "../utils/responsoveProvider"
import { AnimatePresence, motion } from "framer-motion"
import ScrollToAnchor from "../utils/scrollToAnchor"

const Menu = () => {
  const isMobile = useResponsive();
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <ScrollToAnchor/>
      <Header
      id="Header"
      img={"/products/green_traveler.jpg"}
      tag={"/public/icons-logos/Nomad-White-Breakfast.webp"}
      />
      <div className="flex justify-center items-center">
        <div  className={`
          ${isMobile ? "" : "w-2/3"} 
          relative flex h-xl overflow-hidden align-center items-center rounded`}>
          {/* Mobile View */}
          {!isMobile ? (
            <>
              <a 
                href="/products/Large-Menu.jpg"
                className="absolute inset-0 z-10 flex items-center"
              >
                <span className="absolute bg-black rounded-2xl opacity-50 h-full w-full" />
                <h1 className="z-10 flex justify-center w-full text-oatmilk text-5xl absolute">
                  <div className="title relative group flex justify-center">
                    Menu
                  </div>
                </h1>
              </a>
              <img 
              className={`
                relative rounded-2xl border-firebrick border-4 w-full h-full
                ${isMobile ? "" : "h-1/2"}
              `}
              src="/products/2025-BREAKFAST-menu-new-price.jpg" 
              alt="Breakfast and Sandwich Menu"
              loading="lazy"
              />
            </>
          ) : (
            <div 
              className="relative flex justify-center place-items-center rounded"
            >
              <motion.div 
              className="relative w-1/2"
              onHoverStart={() => setShowOverlay(true)}
              onHoverEnd={() => setShowOverlay(false)}>
                
                <AnimatePresence>
                  {showOverlay && (
                    <motion.a 
                    href="/products/Large-Menu.jpg" 
                    className="absolute inset-0 z-10 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}            
                    >
                      <span className="absolute pointer-event-none bg-black rounded-2xl opacity-50 h-full w-full" />
                      <motion.h1 
                        className="z-10 text-oatmilk text-5xl "
                        initial={{ y : 20 }}
                        animate={{ y: 0 }}
                        exit={{ y: 10 }}
                      >
                        <div className="title relative">
                          Menu
                        </div>
                      </motion.h1>
                    </motion.a>
                  )}
                </AnimatePresence>
                <img className={`
                  relative rounded-2xl border-firebrick border-4 w-1/full h-full`}
                  src="/products/2025-BREAKFAST-menu-new-price.jpg" 
                  alt="Breakfast and Sandwich Menu"
                  loading="lazy"
              />   
              </motion.div>
            </div>
            )}
        </div>
      </div>
    </>
  )
}

export default Menu 

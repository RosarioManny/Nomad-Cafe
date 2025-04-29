import Header from "./partials/_header"
import { Link } from 'react-router-dom'
import { useState, useParams } from 'react'
import { theme } from "../styles/themes"
import { useResponsive } from "../utils/responsoveProvider"
import { AnimatePresence, motion } from "framer-motion"

const Menu = () => {
  const isMobile = useResponsive();
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <Header
      img={"/products/green_traveler.jpg"}
      tag={"/public/icons-logos/Nomad-White-Breakfast.webp"}
      />
      <div className="flex justify-center items-center">
        <motion.div className="relative flex w-1/2 h-xl overflow-hidden align-center items-center rounded"
          onHoverStart={() => setShowOverlay(true)}
          onHoverEnd={() => setShowOverlay(false)}
        >
          <AnimatePresence>
          {showOverlay && (
            <motion.a href="/products/Large-Menu.jpg" className="aboslute inset-0 z-10 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}            
            >
              <span className="absolute bg-black pointer-event-none rounded-2xl opacity-50 h-full w-full" />
              <motion.h1 className="z-10 flex justify-center w-full text-oatmilk text-5xl absolute"
              initial={{ y : 20 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              >
                <div className="title relative group flex justify-center">
                  Menu
                </div>
              </motion.h1>
            </motion.a>
          ) }
          </AnimatePresence>
          <img className={`
            relative
            rounded-2xl border-firebrick border-4 w-full h-full
            ${isMobile ? "" : "h-1/2"}`}
            src="/products/2025-BREAKFAST-menu-new-price.jpg" 
            alt="Breakfast and Sandwich Menu"
            loading="lazy"
          />   
        </motion.div>
      </div>
    </>
  )
}

export default Menu 

{/* <header className="relative mb-8 border-solid border-firebrick border-b-4">     
      <img 
        className="w-full h-full object " 
        src={img} 
        alt={img_alt} 
      />   
      <div className="absolute bottom-10">
        <img 
          src={tag} 
          alt={tag_alt} 
          className="fade-in z-2 w-auto min-h-24 filter-drop-shadow-lg filter-drop-shadow-black" 
        />
      </div>
    </header> */}
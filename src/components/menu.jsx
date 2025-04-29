import Header from "./partials/_header"
import { Link } from 'react-router-dom'
import { useState, useParams } from 'react'
import { theme } from "../styles/themes"
import { useResponsive } from "../utils/responsoveProvider"

const Menu = () => {
  const isMobile = useResponsive()
  return (
    <>
      <Header
      img={"/products/green_traveler.jpg"}
      tag={"/public/icons-logos/Nomad-White-Breakfast.webp"}
      />
      <div className="relative m-8 flex justify-center align-center">
        <h1 className="text-espresso z-10 absolute bottom-1/2 cursor-pointer text-6xl m-2">
          <a className="relative group" href="/products/Large-Menu.jpg">
            Menu
            <span className={`${theme.hover.underline}`}></span>
          </a> 
        </h1>
        <div className={` flex justify-center ${isMobile ? "w-auto h-full" : " "}`}>
          <img className={`
          rounded-2xl border-firebrick border-4 z-[-10]
          ${isMobile ? "w-2/3 h-ful" : "w-full h-full"}
          `}
          src="/products/2025-BREAKFAST-menu-new-price.jpg" 
          alt="Breakfast and Sandwich Menu"
          loading="lazy"
          />
        </div>    
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
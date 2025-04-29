import { useResponsive } from "../../utils/responsoveProvider"
import { useState, useEffect } from "react";

const Header = ({tag, img, img_alt="Header image", tag_alt="Nomad Logo"}) => {
  const isMobile = useResponsive();

  return (
    <header className="relative mb-8 border-solid border-firebrick border-b-4">     
      <img 
        className={`${isMobile ? "w-full h-[700px] object-top object-cover" : "w-full h-full object " }`}
        src={img} 
        alt={img_alt} 
      />   
      <div className={`absolute ${isMobile ? `right-48 bottom-0` : `bottom-10` }`}>
        <img 
          src={tag} 
          alt={tag_alt} 
          className="title fade-in z-2 w-fit min-w-28 min-h-28 filter-drop-shadow-lg filter-drop-shadow-black" 
        />
      </div>
    </header>
  )
}

export default Header
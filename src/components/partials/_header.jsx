import { useResponsive } from "../../utils/responsoveProvider"
import { useState, useEffect } from "react";

const Header = ({tag, img, img_alt="Header image", tag_alt="Nomad Logo"}) => {
  const isMobile = useResponsive();

  return (
    <header id="Header" className="relative mb-8 border-solid border-firebrick border-b-4">     
      <div className="relative">
        <img 
          className={`w-full ${isMobile ? "h-[700px] object-cover" : "h-full object" }`}
          src={img} 
          alt={img_alt} 
          loading="lazy"
        />   
        <div className="absolute inset-0 flex justify-center items-end z-10">
          <img 
            src={tag} 
            alt={tag_alt} 
            className="title fade-in z-10 w-auto min-w-28 min-h-28 " 
            loading="lazy"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
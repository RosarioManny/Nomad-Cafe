import Header from "./partials/_header"
import { Link } from 'react-router-dom'
import { useState, useParams } from 'react'

const Menu = () => {
  return (
    <>
      <Header
      img={"/products/green_traveler.jpg"}
      tag={"/public/icons-logos/Nomad-White-Breakfast.webp"}
      />
      <div className="relative m-8 flex justify-center align-center">
        <h1 className="text-white z-10 absolute bottom-1/2 text-4xl m-2">
          <a className="title hover:animate-pulse " href="/products/Large-Menu.jpg">Menu</a> 
        </h1>
        <div className="image-container z-2">
          <img className="rounded w-full h-full z-1"src="/products/2025-BREAKFAST-menu-new-price.jpg" alt="" />
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
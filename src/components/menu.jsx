import Header from "./partials/_header"
import { Link } from 'react-router-dom'
import { useState, useParams } from 'react'

const Menu = () => {
  return (
    <div>
    <Header
    img={"/products/green_traveler.jpg"}
    tag={"/public/icons-logos/Nomad-White-Breakfast.webp"}
    
    />
    <div>
      <div>
        <Link to="/menu/beverages">Drinks</Link>
      </div>
      Menu Page
    </div>
    </div>
  )
}

export default Menu 
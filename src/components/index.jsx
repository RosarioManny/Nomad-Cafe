import Header from './partials/_header'
import { theme } from '../styles/themes'
import { useEffect, useState } from 'react' 
import { useResponsive } from '../utils/responsoveProvider'
import { imageGallery }  from '../database/imageGallery'
import Carousol from './Carousel'
import InfiniteGallery from './partials/InfiniteCarousel'
import ScrollToAnchor from '../utils/scrollToAnchor'

const Home = () => {
const [yearsInBuisness, setYearsInBuisness] = useState(0)
const yearOfOpen = 2018
const currentYear = new Date().getFullYear()
const isMobile = useResponsive()

// Automatically update years in buisness
useEffect(() => {
  setYearsInBuisness(currentYear - yearOfOpen)
},[])

  return (
    <main className={`${theme.color.text.default}${theme.text.body}`}>
      <ScrollToAnchor/>
      <Header
        tag={"/icons-logos/Nomad-logo-name-transparent-White.png"}
        img={`${isMobile ? "/gallery/Inside_gelato.webp" : "/gallery/Tathi_espresso.webp"}`}
        img_alt='Barista preparing espresoo at Nomad Cafe'
      />
        {/* Intro Section */}
      <section>
          <h1 className={`flex items-center justify-center ${theme.text.heading} ${theme.color.text.default}`}>
            <b className={`${theme.color.text.primary}`}>{yearsInBuisness}+</b> years serving Ridgewood!
          </h1>
        <InfiniteGallery 
          images={imageGallery}
        /> 
        <div className={`${theme.layout.text} flex justify-center`}>
          <p className={`
            ${theme.layout.para_spacing}
            ${isMobile ? "w-2/3" : ""}
            ${theme.text.body} ${theme.color.text.default}
            `}>
            Nomad cafe is a neighborhood restaurant in Ridgewood, New York. We provide delicious handmade food. 
            From our customizable Traveler sandwich to our popular Chedder Smashbrowns.
            We strive to provide the best atmosphere with a warm staff, lovely coffee, great food and more!
          </p>
        </div>
      </section>

      <div className='flex justify-center m-2'>
        <hr className={`${theme.layout.default} ${theme.layout.hr} ${theme.color.background.accent}`}/>
      </div>
      {/* New Section
      <section className='flex flex-col items-center'>
        <h1>Now Serving Gelato</h1>
        <p>Variety of flavors, New flavor(s) every other week</p>
        <ul>
          <li> Chocolate Hazelnut</li>
          <li> Chai Salted Caramel</li>
          <li> Strawberries and Cream</li>
        </ul>
      </section>
      <div className='flex justify-center m-2'>
        <hr className={`${theme.layout.default} ${theme.layout.hr} ${theme.color.background.primary}`}/>
      </div> */}
      {/* Customer Reviews */}
      <section>
        <h2 className={`
          overflow-x-auto flex-shrink-0 text-center
          ${theme.layout.para_spacing} 
          ${theme.text.firstLetter} 
          ${theme.color.text.default} `}>
            Customer Reviews
        </h2>
        <Carousol className={`overflow-hidden`} />
      </section>
    </main>
  )
}

export default Home
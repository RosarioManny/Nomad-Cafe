import Header from './partials/_header'
import { theme } from '../styles/themes'
import { useEffect, useState } from 'react' 
import { useResponsive } from '../utils/responsoveProvider'
import { imageGallery }  from '../database/imageGallery'
import Carousol from './Carousel'
import InfiniteGallery from './partials/InfiniteCarousel'
import ScrollToAnchor from '../utils/scrollToAnchor'
import sweetsItems from '../database/sweetsItems'

const Home = () => {
const [yearsInBuisness, setYearsInBuisness] = useState(0)
const yearOfOpen = 2018
const currentYear = new Date().getFullYear()
const isMobile = useResponsive()
const gelatos = sweetsItems[1]['gelatoFlavors']
console.log(gelatos)

function gelatoSelection() {
  const selectedGelato = gelatos.slice(0, 4);
  return (
      <ul className={`md:grid-cols-2 md:grid flex text-espresso items-center ${theme.text.body}`}>
        {selectedGelato.map((flavor, i ) => (
          <li 
          className='text-center px-4'
          key={i}> {flavor} </li>
          ))
        }
      </ul>
  )
}
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
          <h1 className={`flex gap-2 items-center justify-center ${theme.text.heading} ${theme.color.text.default}`}>
            <span className={`${theme.color.text.primary} `}>{yearsInBuisness}+</span> Years serving Ridgewood!
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
      {/* New Section */}
      <section className={`
        my-4 flex flex-col items-center
        ${theme.color.text.default} 
        `}>
        <h1 className={`
          ${theme.color.text.primary} 
          ${theme.text.heading}
          `}>
            Now Serving Gelato
        </h1>
        <div className='w-3/4 my-4 flex flex-col md:flex-row md:justify-center items-center'>
          <img 
            className='w-[300px] rounded-xl object-fill min-w-[250px] shadow-md shadow-black my-4'
            src="/products/Nomad_cafe_Gelato.webp" 
            alt="Customer holding two scoop Matcha Coconut and Chocolate Hazelnut gelato"
          />
          <div className='mx-2 flex flex-col items-center'>
            <div className={`text-center`}>
              <p className={`${theme.text.firstLetter}  ${theme.text.underline}`}>Try our new <span className={`${theme.color.text.primary}`}> Gelatos!</span> </p>
              <p className='md:text-md'>New flavor(s) every other week. <br/>Some flavors we have...</p>
            </div>
            <hr className={`${theme.color.background.accent} ${theme.layout.hr}`}/>
            {gelatoSelection()}
            <a 
            href='/menu/sweets#Gelatos'
            className={`
              ${theme.color.background.accent} 
              hover:bg-firebrick hover:text-oatmilk cursor-pointer transition-color duration-300 p-2 my-6 rounded shadow-md
              `}>
                View Price & Past Flavors
            </a>
          </div>
        </div>
        
      </section>
      <div className='flex justify-center m-2'>
        <hr className={`${theme.layout.default} ${theme.layout.hr} ${theme.color.background.primary}`}/>
      </div>
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
import Header from '../partials/_header'
import { theme } from '../../styles/themes'
import { useEffect, useState } from 'react' 
import { imageGallery }  from '../../database/imageGallery'
import Carousol from './Carousel'
import InfiniteGallery from '../partials/InfiniteCarousel'
import ScrollToAnchor from '../../utils/scrollToAnchor'
import sweetsItems from '../../database/sweetsItems'

const Home = () => {
  const [yearsInBusiness, setYearsInBusiness] = useState(0)
  const gelatos = sweetsItems[1]['gelatoFlavors']
  const currentYear = new Date().getFullYear()
  
  function gelatoSelection() {
    const selectedGelato = gelatos.slice(0, 4);
  return (
      <ul className={`md:grid-cols-2 md:grid flex text-espresso justify-center items-center text-sm`}>
        {selectedGelato.map((flavor, i ) => (
          <li 
          className='m-[2px] items-center flex justify-center text-center'
          key={i}>- {flavor}</li>
          ))
        }
      </ul>
  )
}
  // Automatically update years in business
  useEffect(() => {
    const yearOfOpen = 2018
    
    setYearsInBusiness(currentYear - yearOfOpen)
  }, [currentYear])

  return (
    <main className={`${theme.color.text.default}${theme.text.body}`}>
      <ScrollToAnchor/>
      
      {/* Skip to main content for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
      >
        Skip to main content
      </a>

      <Header
        tag={"/icons-logos/Nomad-logo-name-transparent-White.png"}
        img={"/gallery/Tathi_espresso.webp"}
        img_mobile={"/gallery/Inside_gelato.webp"}
        img_alt='Barista preparing espresso at Nomad Cafe'
        togglePan={true}
      />
      
      {/* Main content section with ID for skip navigation */}
      <section id="main-content">
        {/* Intro Section */}
        <section aria-labelledby="intro-heading">
          <h1 
            id="intro-heading"
            className={`flex items-center justify-center ${theme.text.heading} ${theme.color.text.default} text-center px-4`}
          >
            <span> <strong className={`${theme.color.text.primary}`}> {yearsInBusiness}+ </strong> years serving Ridgewood!</span>
          </h1>
          
          <div className={`${theme.layout.text} flex justify-center`}>
            <p className={`
              ${theme.layout.para_spacing}
              w-full md:w-2/3 lg:w-1/2
              ${theme.text.body} ${theme.color.text.default}
              text-center px-6
            `}>
              Nomad cafe is a neighborhood restaurant in Ridgewood, New York. We provide delicious handmade food. 
              From our customizable Traveler sandwich to our popular Cheddar Smashbrowns.
              We strive to provide the best atmosphere with a warm staff, lovely coffee, great food and more!
            </p>
          </div>
        </section>
          
          <InfiniteGallery 
            images={imageGallery}
            aria-label="Gallery of Nomad Cafe images"
          /> 

        <div className='flex justify-center m-4 md:m-6'>
          <hr 
            className={`${theme.layout.default} ${theme.layout.hr} ${theme.color.background.accent} w-3/4`}
            aria-hidden="true"
          />
        </div>
        {/* Incoming NEW Section - Gelato  */}
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
        <div className='w-3/4 my-4 flex flex-col md:justify-evenly md:flex-row md:justify-center items-center'>
          <img 
            className='w-[300px] rounded-xl object-fill min-w-[250px] shadow-md shadow-black my-4'
            src="products/Nomad_Choc_Matcha_Gelato.png" 
            alt="Customer holding two scoop Matcha Coconut & Chocolate Hazelnut gelato"
          />
          <div className='mx-2 flex flex-col items-center'>
            <div className={`text-center`}>
              <p className={`${theme.text.firstLetter}  ${theme.text.underline}`}>Try our new Gelatos!</p>
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
        {/* Customer Reviews */}
        <section aria-labelledby="reviews-heading">
          <h2 
            id="reviews-heading"
            className={`
              text-center px-4
              ${theme.layout.para_spacing} 
              ${theme.text.firstLetter} 
              ${theme.color.text.default} 
            `}
          >
            Customer Reviews
          </h2>
          <div className="overflow-hidden" role="region" aria-label="Customer reviews carousel">
            <Carousol />
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home
import Header from '../partials/_header'
import { theme } from '../../styles/themes'
import { useEffect, useState } from 'react' 
import { imageGallery }  from '../../database/Home/imageGallery'
import InfiniteGallery from './components/InfiniteCarousel'
import Carousol from './components/Carousel'
import ScrollToAnchor from '../../utils/scrollToAnchor'
import sweetsItems from '../../database/Menu/sweetsItems'
import { hoursOfOperation } from '../../database/Home/hoursOfOperation'


const Home = () => {
  const [yearsInBusiness, setYearsInBusiness] = useState(0)
  const gelatos = sweetsItems[1]['gelatoFlavors']
  const currentYear = new Date().getFullYear()

  function gelatoSelection() {
    const selectedGelato = gelatos.slice(2, 6);
  return (
      <ul className={`
        md:text-lg
        flex justify-center items-center
        divide-x-2 divide-gamboge 
        text-espresso text-sm`}>
        {selectedGelato.map((flavor, i ) => (
          <li 
          className='px-2 items-center flex justify-center text-center'
          key={i}> {flavor}</li>
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
          
          <div className={`${theme.layout.text} flex mt-6 justify-center`}>
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
        <section className='relative flex flex-col sm:flex-row items-center justify-center'>
          <img
            className="absolute inset-auto  size-72 object-contain z-0 opacity-30"
            src="/icons-logos/Nomad-Logo-Simple-Transparent-White.webp"
            alt=""
            aria-hidden="true"
          />
          <h1 className={`${theme.text.heading} ${theme.color.text.primary} relative z-10 items-center mx-10`}> Hours :</h1>
          <div 
            className={`${theme.text.body} relative z-10  grid grid-cols-1 gap-4 mb-8`}
            role="table"
            aria-label="Business hours"
            >
            {hoursOfOperation.map((time, index) => (
              <div 
              key={index}
              className="relative z-10 flex justify-between items-center p-2 bg-oatmilk rounded-lg"
              role="row"
              >
                <span 
                  className="font-semibold pr-6 "
                  role="cell"
                  >
                  {time.days} 
                </span>
                <span 
                  className={`${theme.color.text.primary} font-bold`}
                  role="cell"
                  >
                  {time.hours}
                </span>
              </div>
            ))}
          </div>
        </section>
        <hr 
          className={`${theme.layout.default} ${theme.layout.hr} ${theme.color.background.accent} mx-auto my-10 w-3/4`}
          aria-hidden="true"
        />
        {/* Incoming NEW Section - Gelato  */}
        <section className={`
        my-4 flex flex-col items-center
        ${theme.color.text.default} 
        `}>
        <h1 className={`
          ${theme.color.text.primary} 
          ${theme.text.heading}
          `}>
            What's New?
        </h1>
        <div className='w-3/4 gap-4 my-4 flex flex-col md:justify-evenly md:flex-row md:justify-center items-center'>
          <img 
            className='w-[60%] sm:w-[40%]  rounded object-cover  shadow-md shadow-black my-4'
            src="products/Nomad_Choc_Matcha_Gelato.png" 
            alt="Customer holding two scoop Matcha Coconut & Chocolate Hazelnut gelato"
          />
          <div className='mx-4 flex flex-col items-center'>
            <div className={`text-center`}>
              <p className={`${theme.text.firstLetter} ${theme.text.underline}`}>Homemade Gelatos</p>
              <p className='md:text-md'>Featuring a rotating selection of handcrafted flavors. <br/>Current offerings may include...</p>
            </div>
            <hr className={`${theme.color.background.accent} ${theme.layout.hr}`}/>
            {gelatoSelection()}
            <a 
            href='/menu/#gelato'
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
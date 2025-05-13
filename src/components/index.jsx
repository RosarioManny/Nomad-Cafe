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
        img={`${isMobile ? "/gallery/Inside_gelato.jpg" : "/gallery/Tathi_espresso.jpg"}`}
        img_alt='Barista preparing espresoo at Nomad Cafe'
      />
      <div >
        {/* Intro Section */}
      <section>
        <div className={`${theme.layout.text}`}>
          <h1 className={`${theme.text.heading} ${theme.color.text.default}`}>
            <b className={`${theme.color.text.primary} text-6xl`}>{yearsInBuisness}+</b> years serving Ridgewood!
          </h1>
        </div>
        <InfiniteGallery 
        images={imageGallery}
        /> 
        <div className={`flex justify-center `}>
          <hr className={`${theme.layout.default} ${theme.layout.hr} ${theme.color.background.accent}`}/>
        </div>
        <div className={`${theme.layout.text} flex justify-center`}>
          <p className={`
            ${theme.layout.para_spacing}
            ${isMobile ? "w-2/3" : ""}
            ${theme.text.body} ${theme.color.text.default}
            `}>
            Nomad cafe is a neighborhood Restaurant in Ridgewood, New York. We provide delicious handmade food. 
            From our customizable Traveler sandwich to our popular Chedder Smashbrowns.
            We strive to provide the best atmosphere with a warm staff, lovely coffee, great food and more!
          </p>
        </div>
      </section>
      <div className='flex justify-center m-2'>
        <hr className={`${theme.layout.default} ${theme.layout.hr} ${theme.color.background.primary}`}/>
      </div>
        {/* Customer Reviews */}
      <section>
        <h2 className={`overflow-x-auto flex-shrink-0 ${theme.layout.para_spacing} ${theme.text.firstLetter} ${theme.color.text.default} text-center`}>Customer Reviews</h2>
        <Carousol className={`overflow-hidden`} />
      </section>
      </div>
    </main>
  )
}

export default Home
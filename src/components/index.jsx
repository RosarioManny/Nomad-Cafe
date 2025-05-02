import Header from './partials/_header'
import { theme } from '../styles/themes'
import { useEffect, useState } from 'react' 
import { useResponsive } from '../utils/responsoveProvider'
import { imageGallery }  from '../database/imageGallery'
import { onlineReviews } from '../database/onlineReviews'
import ReviewCard from './ReviewCard'

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
      <Header
      tag={"/icons-logos/Nomad-logo-name-transparent-White.png"}
      img={`${isMobile ? "/gallery/Inside_gelato.jpg" : "/gallery/Tathi_espresso.jpg"}`}
      img_alt='Barista preparing espresoo at Nomad Cafe'
      
      />
      <div>
        {/* Intro Section */}
      <section>
        <div className={`${theme.layout.text}`}>
          <h1 className={`${theme.text.heading} ${theme.color.text.default}`}>
            <b className={`${theme.color.text.primary}`}>{yearsInBuisness}+</b> years serving Ridgewood!
          </h1>
        </div>
        {/* Image Carousol */}
        <ul className={`${theme.layout.default} h-1/4 gap-4 overflow-hidden`}>
          {imageGallery.map((image, i) => (
            <li key={i} className='w-auto '>
              {image.path ? 
              (  
              <img 
                src={image.path} 
                alt={image.alt_text || "Nomad Cafe Product"}
                className='rounded-xl object-fill min-w-[250px] h-auto shadow-md shadow-black h-96'
              />
              ) : (
                <div className="h-96 bg-oatmilk flex items-center justify-center">
                  <span>Image unavailable</span>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className={`flex justify-center `}>
          <hr className={`${theme.layout.default} ${theme.layout.hr} ${theme.color.background.accent}`}/>
        </div>
        <div className={`${theme.layout.text} flex justify-center`}>
          <p className={`
            ${isMobile ? "w-2/3" : ""}
            ${theme.text.body} ${theme.color.text.default}
            `}>
            Nomad cafe is a neighborhood Restaurant in Ridgewood, New York. We provide delicious handmade food. 
            From our customizable Traveler sandwich to our popular Chedder Smashbrowns.
            We strive to provide the best atmosphere with a warm staff, lovely coffee, great food and more!
          </p>
        </div>
      </section>
      {/* TODO: USER REVEIWS */}
      <div className='flex justify-center m-2'>
        <hr className='w-2/3 h-1 bg-firebrick rounded'/>
      </div>
      <section>
        <h2 className='text-center text-2xl m-8'>Customer Reviews</h2>
        {/* Customer Reviews */}
        <ul className='flex overflow-hidden'>
          {onlineReviews.map((reviewer, i) => (
            <ReviewCard 
            key={i}
            name={reviewer.name}
            review={reviewer.review}
            rating={reviewer.rating}
            link={reviewer.path}
            source={reviewer.source}
            />
          ))}
        </ul>
    </section>
      </div>
    </main>
  )
}

export default Home
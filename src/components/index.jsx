import Header from './partials/_header'
import {theme} from '../styles/themes'
import { useEffect, useState } from 'react' 


const Home = () => {
const [yearsInBuisness, setYearsInBuisness] = useState(0)
const yearOfOpen = 2018
const currentYear = new Date().getFullYear()
// console.log(currentYear)

// Automatically update years in buisness
useEffect(() => {
  setYearsInBuisness(currentYear - yearOfOpen)
},[])

  return (
    <main className={`${theme.color.text.default}${theme.text.body}`}>
      <Header
      tag={"/icons-logos/Nomad-logo-name-transparent-White.png"}
      img={"/gallery/Tathi_espresso.jpg"}
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
        <ul className={`${theme.layout.default}`}>
          <li>
            <img 
            src="products/Capuccino_heart.jpg" 
            alt="" 
            className='rounded-xl shadow-md shadow-black h-96'
            />
          </li>
        </ul>
        <div className={`${theme.layout.default}`}>
          <hr className={`${theme.layout.hr} ${theme.color.background.accent}`}/>
        </div>
        <div className={`${theme.layout.text}`}>
          <p className={`${theme.text.body} ${theme.color.text.default}`}>
            Nomad cafe is a neighborhood Restaurant in Ridgewood, New York. We provide delicious handmade food. 
            From our customizable Traveler sandwich to our popular Chedder Smashbrowns.
            We strive to provide the best atmosphere with a warm staff, lovely coffee, great food and more!
          </p>
        </div>
      </section>
      {/* TODO: USER REVEIWS */}
      {/* <div className='flex justify-center m-2'>
        <hr className='w-2/3 h-1 bg-firebrick rounded'/>
      </div> */}
      {/* Customer Reviews */}
      {/* <section className=''>
        <h2 className='text-center text-2xl m-8'>Customer Reviews</h2>
        <div className='bg-oatmilk shadow-lg shadown-black border-gamboge border-2 border-solid max-w-2xl mx-4 p-6 rounded-lg bg-opacity-80'>
          <div>
            <p>John Smith</p>
            <p className='flex justify-end'>⭐⭐⭐⭐⭐</p>
          </div>
          <blockquote className='italic'>“Best cup of joe and sandwich. Love the vibe it has too! Will come back”</blockquote>
        </div>
      </section> */}
      </div>
    </main>
  )
}

export default Home
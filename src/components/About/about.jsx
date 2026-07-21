import Header from '../partials/_header'
import { theme } from '../../styles/themes'
import GoogleMaps from './GoogleMaps'
import ScrollToAnchor from '../../utils/scrollToAnchor'
import { hoursOfOperation } from '../../database/Home/hoursOfOperation'
import { HoursComponent } from '../Components/Hourscomponent'


const About = () => { 


  return (
    <>
      <ScrollToAnchor/>
      <Header 
        tag={'icons-logos/Nomad-White-OurJourney.webp'} 
        img={"gallery/First_opened_C&J.webp"}
        img_alt="Nomad Cafe owners on opening day"
        position='md:object-[60%_40%]'
      />
      
      <main className={`${theme.layout.column}`}>
        {/* Skip link for screen readers */}
        <a 
          href="#about-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
        >
          Skip to main content
        </a>

        <section 
          id="about-content"
          className={`
            flex-col 
            ${theme.layout.default} 
          `}
          aria-labelledby="our-story"
        >
          <h1 id="our-story" className="sr-only">Our Story</h1>
          
          <p className={`
            w-full md:w-2/3 lg:w-1/2 mx-auto
            ${theme.layout.para_spacing}
            ${theme.text.body}`}>
            <span className={`${theme.text.body} ${theme.color.text.primary}`}>
              <span className={`${theme.text.firstLetter} ${theme.color.text.primary}`}>N</span>
              omad has been a proud part of Ridgewood since 2018, 
            </span> and have always believed in being a place for everyone. 
            From the moment you walk in, we want you to feel at home—whether you're stopping by for your morning coffee, 
            grabbing a hearty Eggscape NY platter, or treating yourself to a scoop of our homemade creamy gelato. 
            Our menu is as diverse as our community, offering everything from expertly crafted lattes, to fresh sandwiches and wholesome yogurts.
            But more than just great food and drinks, Nomad is about community. 
            We're a space where people from all walks of life can come together, share a moment, and leave feeling like their day got a little brighter.
          </p>
          
          <p className={`w-full md:w-2/3 lg:w-1/2 mx-auto mb-8 ${theme.text.body}`}>
            <span className={`${theme.text.body} ${theme.color.text.primary}`}>
              <span className={`${theme.text.firstLetter} ${theme.color.text.primary}`}>O</span>
              ur team is a reflection of the vibrant neighborhood we serve,
            </span> providing excellent service and making you feel like you belong. Together,
            we've built a cafe that celebrates diversity, creativity, and the spirit of
            community. Located in the heart of Ridgewood—an area buzzing with energy and
            growth—we're proud to be a gathering spot for locals, newcomers, and everyone in between. At Nomad, it's not just about what we serve; it's about the
            people we serve and the connections we foster. Come for the coffee, stay for the community.
          </p>
        </section>

        <hr 
          className={`${theme.layout.default} ${theme.layout.hr} ${theme.color.background.accent}`}
          aria-hidden="true"
        /> 

        <section
          className={`${theme.layout.text} relative`}
          aria-labelledby="visit-us"
        >

          <div className="relative z-10 mb-10 mt-4 flex flex-col">
            <h1
              id="visit-us"
              className={`${theme.text.underline} ${theme.text.heading} ${theme.color.text.primary} text-center`}
            >
              Visit Us!
            </h1>
            <div className="bg-oatmilk text-espresso/80 text-sm w-fit mt-4 mx-2 px-4 py-1 border-r-firebrick border-r-2 shadow-md rounded-l-lg ml-auto">
              <p>Don't forget to pick up your Customer Passport. 10th Purchase is Free!</p>
            </div>
          </div>

          <div className="relative z-10 justify-between md:gap-8">
            <HoursComponent />

            <div className="flex justify-center relative">
              <GoogleMaps
                className="w-full md:w-2/3 lg:w-1/2 transition-opacity duration-500"
                aria-label="Nomad Cafe location on Google Maps"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
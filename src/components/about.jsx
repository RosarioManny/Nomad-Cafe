import Header from './partials/_header'
import { theme } from '../styles/themes'
import { useResponsive } from '../utils/responsoveProvider'
import  GoogleMaps  from './GoogleMaps'
import ScrollToAnchor from '../utils/scrollToAnchor'

const About = () => {
  const isMobile = useResponsive()
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY

  // console.log("key >>", GOOGLE_MAPS_API_KEY)
  return (
    <>
      <ScrollToAnchor/>
      <Header 
      tag={'icons-logos/Nomad-White-OurJourney.webp'} 
      img={"gallery/First_opened_C&J.webp"}/>
      <div className={`${theme.layout.column}`}>
        <section className={`
          flex-col 
          ${theme.layout.default} 
          `}>
          <p className={`
            ${isMobile ? "w-2/3" : "w-auto"}
            ${theme.layout.para_spacing}
            ${theme.text.body}`}>
            <span className={`${theme.text.body} ${theme.color.text.primary}`}>
              <b className={`${theme.text.firstLetter} ${theme.color.text.primary} `}>N</b>
              omad has been a proud part of Ridgewood since 2018, 
            </span> and have always believed in being a place for everyone. 
            From the moment you walk in, we want you to feel at home—whether you’re stopping by for your morning coffee, 
            grabbing a hearty Eggscape NY platter, or treating yourself to a scoop of our homemade creamy gelato. 
            Our menu is as diverse as our community, offering everything from expertly crafted lattes, to fresh sandwiches and wholesome yogurts.
            But more than just great food and drinks, Nomad is about community. 
            We’re a space where people from all walks of life can come together, share a moment, and leave feeling like their day got a little brighter.
          </p>
          <p className={` ${isMobile ? "w-2/3" : "w-auto"} mb-8 ${theme.text.body}`}>
            <span className={`${theme.text.body}  ${theme.color.text.primary} `}>
              <b className={`${theme.text.firstLetter} ${theme.color.text.primary} `}>O</b>
              ur team is a reflection of the vibrant neighborhood we serve,
            </span> providing excellent service and making you feel like you belong. Together,
            we’ve built a cafe that celebrates diversity, creativity, and the spirit of
            community. Located in the heart of Ridgewood—an area buzzing with energy and
            growth—we’re proud to be a gathering spot for locals, newcomers, and everyone in between. At Nomad, it’s not just about what we serve; it’s about the
            people we serve and the connections we foster. Come for the coffee, stay for the community.
          </p>
        </section>
          <hr className={`${theme.layout.default} ${theme.layout.hr} ${theme.color.background.accent}`}/> 
        <section className={`${theme.layout.text}`}>
            <h1 className={`${theme.text.underline} ${theme.text.heading} ${theme.color.text.primary} ${theme.layout.para_spacing}`}>Visit Us!</h1>
            <div>
              <h2 className={`${theme.text.subheading}`}> Hours</h2>
              <div className={` ${theme.text.body} ${theme.layout.row}`}>
                <div className='m-6'>
                  <p>Sunday-Wednesday</p>
                  <p className={`${theme.color.text.primary} ${theme.text.underline}`} >7am - 4pm</p>
                </div>
                <div className='m-6'>
                  <p>Thursday - Saturday</p>
                  <p className={`${theme.color.text.primary} ${theme.text.underline}`}>7am - 8pm</p>
                </div>
              </div>
            </div>
            <GoogleMaps className=" w-2/3"/>
        </section>
      </div>
    </>
  )
}

export default About 
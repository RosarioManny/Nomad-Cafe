import Header from './partials/_header'
import { theme } from '../styles/themes'

const About = () => {
  return (
    <div>
      <Header tag={'icons-logos/Nomad-White-OurJourney.webp'} img={"gallery/First_opened_C&J.jpg"}/>
      <section className='m-4'>
        <p className='mb-8'>
          <span className={`text-xl ${theme.color.text.primary}`}><b className={`text-3xl ${theme.color.text.primary} `}>N</b>
          omad has been a proud part of Ridgewood since 2018, </span> and have always believed in being a place for everyone. 
          From the moment you walk in, we want you to feel at home—whether you’re stopping by for your morning coffee, 
          grabbing a hearty Eggscape NY platter, or treating yourself to a scoop of our homemade creamy gelato. 
          Our menu is as diverse as our community, offering everything from expertly crafted lattes, to fresh sandwiches and wholesome yogurts.
          But more than just great food and drinks, Nomad is about community. 
          We’re a space where people from all walks of life can come together, share a moment, and leave feeling like their day got a little brighter.
        </p>
        <p>
          <span className={`text-xl ${theme.color.text.primary} `}>
          <b className={`text-3xl ${theme.color.text.primary} `}>O</b>
          ur team is a reflection of the vibrant neighborhood we serve,</span> providing excellent service and making you feel like you belong. Together,
          we’ve built a cafe that celebrates diversity, creativity, and the spirit of
          community. Located in the heart of Ridgewood—an area buzzing with energy and
          growth—we’re proud to be a gathering spot for locals, newcomers, and everyone in between. At Nomad, it’s not just about what we serve; it’s about the
          people we serve and the connections we foster. Come for the coffee, stay for the community.
        </p>
      </section>
      <hr />
      <section className={`text-center`}>
        <div>
          <h1 className={`${theme.color.text.primary}`}>Visit Us!</h1>
        </div>
        <div className="flex ">
          <div>
            <h3>Location</h3>
            <div>
              <p>67-14 Forest Ave. <br /> Ridgewood, NY 11385</p>
            </div>
          </div>
          <div>
            <h3>Hours</h3>
            <div>
              <p>7am - 4pm</p>
              <p>Monday - Friday</p>
              <p>8am - 4pm</p>
              <p>Saturday & Sunday</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 
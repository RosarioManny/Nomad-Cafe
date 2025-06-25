import FaqCard from "./FaqCard"
import Header from "./partials/_header"
import { useState } from 'react'
import faqQuestions from '../database/faqQuestions'
import { useResponsive } from "../utils/responsoveProvider"
import ScrollToAnchor from "../utils/scrollToAnchor"
import { theme } from "../styles/themes"

const Faq = () => {
  const [isToggled, setIsToggled ] = useState(true);
  const isMobile = useResponsive()

  return (
    <>
    <ScrollToAnchor/>
    <Header
    img={"/gallery/Cafe-inside-Redshirt.webp"}
    tag={"/icons-logos/Nomad-White-FAQ.webp"} />
    <section className={`${isMobile ? "grid grid-cols-[1fr_3fr]" : "flex flex-col justify-center items-center"} `}>
      <div className="flex flex-col h-full m-6 p-2">
        <h1 className={`${theme.color.text.primary} ${theme.text.heading} mb-8`}>
          Frequently Ask Questions
        </h1>
        <p className={`${theme.text.body} ${theme.color.text.default}`}>
          Coffee questions? <br/> 
          Pastry ponderings? <br/>  
          Gelato curiosities? <br/> 
          <br/> 
          We've answered our most common queries here. Don't see what you're after? Reach out—we're always happy to chat!
        </p>
        <ul className={`my-4 ${theme.text.body} ${theme.color.text.primary}`}>
          <li> 347-227-8136 </li>
          <li> nomadcafeandeatery@gmail.com </li>
        </ul>
      </div>
      <div className={` ${theme.color.text.default} ${isMobile ? `w-full` : `w-[90%]`}`}>
        {faqQuestions.map((faq, i) => (
          <FaqCard
            key={i}
            question={faq.que}
            isToggled={isToggled}
            answer={faq.ans}
          />
          ))}
      </div>
    </section>
    </>
  )
}

export default Faq 
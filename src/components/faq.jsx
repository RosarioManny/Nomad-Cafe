import FaqCard from "./FaqCard"
import Header from "./partials/_header"
import { useState } from 'react'
import faqQuestions from '../database/faqQuestions'
import { useResponsive } from "../utils/responsoveProvider"

const Faq = () => {
  const [isToggled, setIsToggled ] = useState(true);
  const isMobile = useResponsive()
  console.log("POINT", faqQuestions[0].que)
  console.log("BRACK", faqQuestions[0]['que'])
  return (
    <>
    <Header 
    img={"/gallery/Cafe-inside-Redshirt.jpg"}
    tag={"/icons-logos/Nomad-White-FAQ.webp"} />
    <section className="flex justify-center">
      <div className={`flex  flex-col align-center ${isMobile ? `w-3/4` : `w-[90%]`}`}>
        {faqQuestions.map((faq, i) => (
          <FaqCard
            key={i}
            question={faqQuestions[i].que}
            isToggled={isToggled}
            answer={faqQuestions[i].ans}
          />
          ))}
      </div>
    </section>
    </>
  )
}

// Note: Error handling if FAQs can't load. 
export default Faq 
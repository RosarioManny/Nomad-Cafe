import FaqCard from "./FaqCard"
import Header from "./partials/_header"
import { useState } from 'react'
import faqQuestions from '../database/faqQuestions'

const Faq = () => {
  const [isToggled, setIsToggled ] = useState(true)

  console.log("POINT", faqQuestions[0].que)
  console.log("BRACK", faqQuestions[0]['que'])
  return (
    <>
    <Header 
    img={"/gallery/Cafe-inside-Redshirt.jpg"}
    tag={"/icons-logos/Nomad-White-FAQ.webp"}></Header>
    <div className="flex justify-center">
      
      {/* {faqQuestions.map((faq, i) => (
        <p key={i}>
          {faq[i].que}
        </p>
        ))} */}
        <FaqCard
          key={0}
          question={faqQuestions[0].que}
          isToggled={isToggled}
          answer={faqQuestions[0].ans}
        />
    </div>
    </>
  )
}

// Note: Error handling if FAQs can't load. 
export default Faq 
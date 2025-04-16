import FaqCard from "./FaqCard"
import Header from "./partials/_header"
import { useState } from 'react'

const Faq = () => {
  const [isToggled, setIsToggled ] = useState(true)

  const faq = [
    {question: "Is there dairy-free milk?", answer: "Yes, we have various dairy-free milks like oatmilk, almond and soy!"},
    {question: "Is there milk?", answer: "Yes"},
    {question: "Is there milk?", answer: "Yes"},
    {question: "Is there milk?", answer: "Yes"},
    {question: "Is there milk?", answer: "Yes"},
    {question: "Is there milk?", answer: "Yes"},
    {question: "Is there milk?", answer: "Yes"},
    {question: "Is there milk?", answer: "Yes"},
    {question: "Is there milk?", answer: "Yes"},
    {question: "Is there milk?", answer: "Yes"},
    {question: "Is there milk?", answer: "Yes"},
  ]
  return (
    <>
    <Header 
    img={"/gallery/Cafe-inside-Redshirt.jpg"}
    tag={"/icons-logos/Nomad-White-FAQ.webp"}></Header>
    <div className="flex justify-center">
      <FaqCard
      question={faq[0].question}
      isToggled={isToggled}
      answer={faq[0].answer}
      >
      </FaqCard>
    </div>
    </>
  )
}

export default Faq 
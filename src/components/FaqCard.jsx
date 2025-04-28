import { useState } from 'react'

const FaqCard = ({ question, answer}) => {
  const [isToggled, setIsToggled] = useState()

  return (
    <div className='faq-container flex flex-col'>
      {/* Question */}
      <div className={`
        faq-question border-solid h-auto border-firebrick border-b-2 w-[350px] p-2 flex space-x-32 
        ${isToggled ? "expanded" : ""}`}>
        <p className="pb-2">
          {question}
        </p>
        {/* X Button */}
        <button 
          onClick={() => setIsToggled(!isToggled)}
          className="relative flex flex-col justify-center items-center space-y-[-2px] p-2 z-10 transition-transform duration-300 ease-in-out"
          >
          <span className={`
            rounded bg-espresso block h-[2px] w-4 transitiontransform duration-500 ease-in-out 
            ${isToggled ? 'rotate-[135deg]' : "rotate-90"}`}>
          </span>
          <span className={`
            rounded bg-espresso block h-[2px] w-4 transitiontransform duration-500 ease-in-out 
            ${isToggled ? 'rotate-[45deg]' : ""}`}>
          </span>
        </button>
      </div>
      {/* Hidden Answer */}
      <div className={`
        faq-answer w-[350px] bg-firebrick tranisition-height duration-100 ease-in-out 
        visibility: ${isToggled ? "visible" : ""}`}>
        <p className={`answer-text text-oatmilk p-4`}>
          {answer}
        </p>
      </div>
    </div>
  )
}

export default FaqCard


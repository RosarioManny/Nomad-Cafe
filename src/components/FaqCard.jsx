import { useState } from 'react'
import { theme } from '../styles/themes'
import { motion } from 'framer-motion'

const FaqCard = ({ question, answer}) => {
  const [isToggled, setIsToggled] = useState()

  return (
    <div className='faq-container p-2 flex flex-col'>
      {/* Question */}
      <div className={`
        faq-question border-solid h-auto border-firebrick border-b-2 w-auto flex space-x-32 
        ${isToggled ? "expanded" : ""}`}>
        <p className={`py-4 ${theme.text.body}`}>
          {question}
        </p>
        {/* X Button */}
        <button 
          onClick={() => setIsToggled(!isToggled)}
          className="relative flex flex-col justify-center items-center space-y-[-2px] p-2 z-10"
          aria-label={isToggled ? "Collapse answer" : "Expand answer"}
          >
          <span className={`
            rounded block h-[2px] w-4 transition-all duration-200 ease-linear
            ${isToggled ? `rotate-45 ${theme.color.background.primary}` : `rotate-90 ${theme.color.background.accent}`}`}>
          </span>
          <span className={`
            rounded block h-[2px] w-4 transition-all duration-200 ease-linear
            ${isToggled ? `-rotate-45 ${theme.color.background.primary}` : `${theme.color.background.accent}`}`}>
          </span>
        </button>
      </div>
      {/* Hidden Answer */}
      <motion.div 
        className={`w-full rounded-b-2xl bg-firebrick overflow-hidden `}
        initial={false}
        animate={{
          height: isToggled ? 'auto' : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
          delay: isToggled ? 0.15 : 0
        }}
        >
        <p className={`${theme.color.text.nav} p-4`}>
          {answer}
        </p>
      </motion.div>
    </div>
  )
}

export default FaqCard


import { useState } from 'react'
import { theme } from '../../styles/themes'
import { motion } from 'framer-motion'

const FaqCard = ({ question, answer, index }) => {
  const [isToggled, setIsToggled] = useState(false)
  const cardId = `faq-card-${index}`
  const contentId = `faq-content-${index}`

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsToggled(!isToggled)
    }
  }

  return (
    <div 
      className='text-espresso faq-container p-2 flex flex-col rounded-lg transition-color duration-300 hover:bg-oatmilk'
      role="region"
      aria-labelledby={cardId}
    >
      {/* Question Header */}
      <div 
        className={`
          faq-question h-auto w-full flex justify-between items-center
          ${isToggled ? "expanded" : ""}
          cursor-pointer
        `}
        role="button"
        tabIndex={0}
        aria-expanded={isToggled}
        aria-controls={contentId}
        onClick={() => setIsToggled(!isToggled)}
        onKeyDown={handleKeyDown}
        id={cardId}
      >
        <h3 className={`py-4 ${theme.text.body} font-semibold text-left pr-4`}>
          {question}
        </h3>
        
        {/* Toggle Button */}
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


      {/* Answer Content */}
      <motion.div 
        id={contentId}
        className={`w-full rounded-b-2xl bg-firebrick overflow-hidden`}
        initial={false}
        animate={{
          height: isToggled ? 'auto' : 0,
          opacity: isToggled ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        role="region"
        aria-hidden={!isToggled}
      >
        <div className={`${theme.color.text.nav} p-4`}>
          <p>{answer}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default FaqCard
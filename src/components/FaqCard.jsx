import { useState } from 'react'

const FaqCard = ({ question, answer}) => {
  const [isToggled, setIsToggled] = useState()

  const handleClick = () => {
    setIsToggled(!isToggled)
  }
  return (
    <div className='flex flex-col'>
      <div className="border-b-solid h-auto border-firebrick border-b-2 w-[200px] p-[1px] flex space-x-32">
        <p className="pb-2">
          {question}
        </p>
        <div 
          onClick={handleClick}
          className="m-0 transition-transform duration-300 ease-in-out absolute">
          <span className={`rounded bg-blue-400 block h-[2px] w-4 transition-transform duration-300 ease-in-out ${isToggled ? 'rotate-[45deg]' : "rotate-90"}`}></span>
          <span className={`rounded bg-firebrick block h-[2px] w-4 transition-transform duration-300 ease-in-out ${isToggled ? 'rotate-[-45deg]' : ""}`}></span>
        </div>
      </div>
      <div className={`visibility: ${isToggled ? "visible h-auto" : "hidden h-0"}`}>
        <p className={`bg-firebrick text-oatmilk p-4 tranisition-transform duration-300 ease-in-out ${isToggled ? "h-auto" : "h-0"}`} >
        {answer}
        </p>
      </div>
    </div>
  )
}

export default FaqCard


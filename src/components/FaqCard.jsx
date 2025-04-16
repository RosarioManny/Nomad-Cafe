import { useState } from 'react'

const FaqCard = ({ question, answer}) => {
  const [isToggled, setIsToggled] = useState()

  const handleClick = () => {
    setIsToggled(!isToggled)
  }
  return (
    <div className='flex flex-col'>
      
      <div className="border-solid h-auto border-firebrick border-b-2 w-[350px] p-2 flex space-x-32">
        <p className="pb-2">
          {question}
        </p>
        <button 
          onClick={handleClick}a
          className="m-0 relative flex flex-col justify-center items-center space-y-[-2px] p-2 z-10 transition-transform duration-300 ease-in-out"
          >
          {/* <p>TEA</p> */}
          <span className={`rounded bg-espresso block h-[2px] w-4 transitiontransform duration-500 ease-in-out ${isToggled ? 'rotate-[45deg]' : "rotate-90"}`}></span>
          <span className={`rounded bg-espresso block h-[2px] w-4 transitiontransform duration-500 ease-in-out ${isToggled ? 'rotate-[-45deg]' : ""}`}></span>
        </button>
      </div>
      <div className={`w-[350px] bg-firebrick tranisition-height duration-100 ease-in-out visibility: ${isToggled ? "visible h-auto" : "hidden h-0"}`}>
        <p className={`text-oatmilk p-4 tranisition-opacity duration-100 ease-in-out ${isToggled ? "opacity-1" : "opacity-0"}`} >
        {answer}
        </p>
      </div>
    </div>
  )
}

export default FaqCard


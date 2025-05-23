import { useState } from 'react'
import { onlineReviews } from '../database/onlineReviews'
import ReviewCard from './ReviewCard'
import { useResponsive } from '../utils/responsoveProvider'
import { motion } from 'framer-motion'
import { theme } from '../styles/themes'

const Carousol = () => {
  const [currentIdx, setCurrentIdx] = useState(1)
  const isMobile = useResponsive()
  const length = onlineReviews.length
  const reviewsToShow = isMobile ? 3 : 1;
  const itemWidth = 250
  const gap = 24

  const handlePrevious = () => {
    setCurrentIdx(prev =>  
      prev <= 1 ? length - reviewsToShow : prev - 1);
  };
  
  const handleNext = () => {
    setCurrentIdx(prev => 
      prev >= length - reviewsToShow ? 1 : prev + 1
    );
  };

  const offset = -(currentIdx * (itemWidth + gap));
  return (
    <div className="flex items-center w-full justify-center relative">
      {/* Navigation buttons */}
      <button 
  
        onClick={handlePrevious}
        className={`
          ${theme.color.background.accent} ${theme.text.body}
          absolute left-0 z-10 hover:bg-firebrick hover:text-oatmilk transition-color duration-300 p-2 ml-6 rounded shadow-md`}
      >
        &lt;
      </button>
      {/* Reviews container */}
      <div className="w-full pl-4 overflow-x-auto flex-shrink-0 no-scrollbar">
        <motion.div 
          className='flex'
          style={{ width: `${(itemWidth + gap)}px` }}
          animate={{
            x: offset,
            transition: { type: 'spring', stiffness: 300, damping: 30 }
          }}>
          {onlineReviews.map((review, index) => (
            <ul 
              key={review.name + index}
              className="flex-shrink-0" 
            >
              <ReviewCard {...review} />
            </ul>
          ))}
        </motion.div>
      </div>
      <button 
        onClick={handleNext}
        className="absolute right-0 z-10 bg-gamboge text-espresso hover:bg-firebrick hover:text-oatmilk transition-color duration-300 p-2 mr-4 rounded shadow-md"
        >
        &gt;
      </button>
    </div>
  );
}
export default Carousol
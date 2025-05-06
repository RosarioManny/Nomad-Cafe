import { useState } from 'react'
import { onlineReviews } from '../database/onlineReviews'
import ReviewCard from './ReviewCard'
import { useResponsive } from '../utils/responsoveProvider'
import { motion, AnimatePresence } from 'framer-motion'

const Carousol = () => {
  const [currentIdx, setCurrentIdx] = useState(1)
  const isMobile = useResponsive()
  const length = onlineReviews.length
  const reviewsToShow = isMobile ? 2 : 1;
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

  console.log(length - reviewsToShow, currentIdx)
  const offset = -(currentIdx * (itemWidth + gap));
  console.log(offset)
  return (
    <div className="flex overflow-hidden justify-center relative">
      {/* Navigation buttons */}
      <button 
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gamboge text-espresso font-black p-2 ml-2 rounded shadow-md"
      >
        &lt;
      </button>
      {/* Reviews container */}
      <div className="w-[80vw] pl-4 flex justify-center items-center overflow-hidden">
        <motion.div 
          className='flex'
          style={{ width: `${(itemWidth + gap)}px` }}
          animate={{
            x: offset,
            transition: { type: 'spring', stiffness: 300, damping: 30 }
          }}>
          {onlineReviews.map((review, index) => (
            <div 
              key={review.name + index}
              className="flex-shrink-0" 
              // style={{ width: `${itemWidth}px`, marginRight: `${gap}px` }}
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </motion.div>
      </div>
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gamboge text-espresso hover:bg-firebrick hover:text-oatmilk transition-color duration-300 p-2 mr-2 rounded shadow-md"
        >
        &gt;
      </button>
    </div>
  );
}
export default Carousol
import { useState } from 'react'
import { onlineReviews } from '../database/onlineReviews'
import ReviewCard from './ReviewCard'
import { useResponsive } from '../utils/responsoveProvider'

const Carousol = ({i, component}) => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const length = onlineReviews.length;
  const isMobile = useResponsive()
  const reviewsToShow = isMobile ? 3 : 1;
  
  const getVisibleReviews = () => {
    let visibleReviews = [];
    for (let i = 0; i < reviewsToShow; i++) {
      const index = (currentIdx + i) % length;
      visibleReviews.push(onlineReviews[index]);
    }
    return visibleReviews;
  }

  // console.log(getVisibleReviews())

  const handlePrevious = () => {
    const newIndex = (currentIdx - 1 + length) % length;
    // loops back to the end
    setCurrentIdx(newIndex)
  };
  
  const handleNext = () => {
    const newIndex = (currentIdx + 1) % length;
    setCurrentIdx(newIndex >= length ? 0 : newIndex)
  };

  return (
    <div className="flex justify-center relative">
      {/* Navigation buttons */}
      <button 
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gamboge text-espresso font-black p-2 mx-8 rounded shadow-md"
      >
        &lt;
      </button>
      {/* Reviews container */}
      <div className="w-2/3 flex justify-center">
        {getVisibleReviews().map((review, index) => (
          <div key={`${review.name}-${index}`} className="">
            <ReviewCard
              name={review.name}
              review={review.review}
              rating={review.rating}
              path={review.path}
              source={review.source}
            />
          </div>
        ))}
      </div>
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gamboge text-espresso hover:bg-firebrick hover:text-oatmilk transition-color duration-300 p-2 mx-8 rounded shadow-md"
      >
        &gt;
      </button>
    </div>
  );
}
export default Carousol
import { theme } from "../../styles/themes"
import { useResponsive } from "../../utils/responsoveProvider";

const ReviewCard = ({name, review, rating, path, key, source}) => {
  const maxStars = 5;
  const isMobile = useResponsive()
  const itemWidth = 250
  const gap = 24
  // style={{ width: `${itemWidth}px`, marginRight: `${gap}px` }}
  return (
  <>
    <li key={key} className={` ${theme.color.background.secondary } ${isMobile ? "": ""} w-[250px] mr-[24px] flex flex-col justify-between list-none shadow-lg shadown-black border-gamboge border-2 border-solid min-h-[280px] p-3 rounded-lg bg-opacity-80`}>
      <div>
        <p>{name}</p>
        <p className='flex justify-end'>
          {[...Array(maxStars)].map((_, i) => (
            <span key={i} className={i < rating ? 'text-gamboge' : 'opacity-0'}>
              ★
            </span>
          ))}
        </p>
      </div>
      <blockquote className='text-sm italic'>{`"${review}"`}</blockquote>
      <a href={path}>
        <p className="text-firebrick flex justify-end text-xs">{source}</p>
      </a>
    </li>
  </>
  )
}

export default ReviewCard
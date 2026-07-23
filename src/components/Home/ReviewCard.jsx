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
    <li key={key} 
    className={` 
      ${theme.color.background.secondary }
      w-[250px] mr-[24px] flex flex-col justify-between 
      list-none shadow-lg shadown-black border-gamboge border-2 border-solid min-h-[280px] p-3 
      rounded-lg bg-opacity-80`}>
      <div>
        <p className={`${theme.color.text.default}`}>{name}</p>
        <p className='flex justify-end'>
          {[...Array(maxStars)].map((_, i) => (
            <span key={i} className={i < rating ? `${theme.color.text.secondary}` : 'opacity-0'}>
              ★
            </span>
          ))}
        </p>
      </div>
      <blockquote className={`${theme.color.text.default} text-sm italic`}>{`"${review}"`}</blockquote>
      <a href={path}>
        <p className={`${theme.color.text.primary} flex justify-end text-xs`}>{source}</p>
      </a>
    </li>
  </>
  )
}

export default ReviewCard
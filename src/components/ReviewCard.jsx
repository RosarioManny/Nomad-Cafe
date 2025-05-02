import { theme } from "../styles/themes"

const ReviewCard = ({name, review, rating, path, key, source}) => {
  const maxStars = 5;
  return (
  <>
    <li key={key} className={` ${theme.color.background.secondary } list-none shadow-lg shadown-black border-gamboge border-2 border-solid w-[250px] mx-4 p-6 rounded-lg bg-opacity-80`}>
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
        <p className="text-firebrick flex justify-end text-xs">{source}<span className={`${theme.hover.underline}`}></span></p>
        
      </a>
    </li>
  </>
  )
}

export default ReviewCard
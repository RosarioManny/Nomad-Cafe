import { useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import { theme } from '../../styles/themes'
import NomadQuizGame from '../Game/nomadQuizGame'
import Header from '../partials/_header'

const NotFound = () => {
  const [showGame, setShowGame] = useState(false)
  const [playGame, setPlayGame ] = useState(false)
  const { paramsId } = useParams() 

  // User wants to play game on purpose by going to /404/game
  useEffect(() => {
    if (paramsId === 'game') {
      setPlayGame(true)
      console.log('Starting game directly from URL')
    }
  }, [paramsId])

  return (
    <main className={`${theme.color.text.default}`} aria-labelledby="not-found-heading">
      <Header
        img={"/gallery/Empty_Cafe_Error.webp"}
        tag={"/icons-logos/Nomad-logo-name-transparent-White.png"}
        img_alt="Inside view of Nomad Cafe"
        
      />
        <div className="flex flex-col items-center justify-center text-center px-6 py-4 min-h-[50vh]">
          <h1
            id="not-found-heading"
            className={`font-serif text-4xl md:text-5xl ${theme.color.text.primary} mb-3`}
          >
            Lost your way?
          </h1>

          <p className={`text-lg ${theme.color.text.default}  mb-2 max-w-md`}>
            This page wandered off — probably in search of a better cup of coffee.
          </p>

          <p className={`text-sm ${theme.color.text.primary} opacity-80 mb-10 max-w-sm`}>
            While you're here, find out what your Nomad drink is.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/"
              className={`
                md:px-4 p-3 w-full rounded-lg 
                transition-all duration-300 ease-in-out 
                
                hover:bg-gamboge 
                whitespace-nowrap
                ${theme.color.background.secondary}
                ${theme.color.text.default}
              `}
              aria-label="Go back to Nomad Cafe homepage"
            >
              Take me home
            </Link>

            <Link
              to="/game"
              className={`
                md:px-4 p-3 w-full rounded-lg transition-all duration-300 ease-in-out 
                hover:bg-firebrick hover:text-oatmilk
                whitespace-nowrap
                ${theme.color.background.accent}
                ${theme.color.text.default}
              `}
              aria-label="Find your perfect Nomad drink"
            >
              What's my drink?
            </Link>
          </div>

          <p className={`mt-12 text-xs ${theme.color.text.default} opacity-70`}>
            Nomad Cafe & Eatery · Ridgewood, New York
          </p>
        </div>
      
    </main>
  )
}

export default NotFound
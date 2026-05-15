import { useState} from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../../styles/themes'
import { questions, drinks } from './NomadGame/nomadQuizGameData'
import Header from '../partials/_header'

const NomadQuizGame = () => {
  const [screen, setScreen] = useState('start')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [result, setResult] = useState(null)
  

  const startQuiz = () => {
    setAnswers([])
    setCurrent(0)
    setSelected(null)
    setResult(null)
    setScreen('quiz')
  }

  const selectAnswer = (tags, index) => {
    setSelected(index)
    const newAnswers = [...answers, tags]

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setAnswers(newAnswers)
        setCurrent(current + 1)
        setSelected(null)
      } else {
        const allTags = newAnswers.flat()
        const scores = drinks.map(drink => ({
          drink,
          score: drink.tags.reduce((acc, tag) => acc + allTags.filter(t => t === tag).length, 0)
        }))
        scores.sort((a, b) => b.score - a.score)
        setResult(scores[0].drink)
        setScreen('result')
      }
    }, 350)
  }

  const shareResult = () => {
    const text = `My Nomad Cafe drink is: ${result.name}. Find yours at Nomad Cafe, Ridgewood NY!`
    if (navigator.share) {
      navigator.share({ title: 'My Nomad drink', text })
    } else {
      navigator.clipboard.writeText(text)
    }
  }

  return (
    <main
      className={`${theme.color.text.default}`}
      aria-labelledby="quiz-heading"
    >
      <Header
        img={"/gallery/Empty_Cafe_Error.webp"}
        tag={"/icons-logos/Nomad-logo-name-transparent-White.png"}
        img_alt="Inside view of Nomad Cafe"
      />
      <div className=" flex justify-center items-center gap-4 mt-6">
        <Link 
        to="/"
        className={`
          text-sm 
          ${theme.color.background.secondary}
          hover:bg-firebrick hover:text-oatmilk
          md:px-4 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out 
          focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
        `}>
          Return Home
        </Link>
        <Link 
        to={`${result ? '/menu#drinks' : '/menu'}`}
        className={`
          text-sm 
          ${result ? 'ring-offset-2 ring-2 ring-gamboge' : ''}
          ${theme.color.background.accent}
          hover:bg-firebrick hover:text-oatmilk hover:ring-2 hover:ring-firebrick hover:ring-offset-2
          md:px-4 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out 
          focus:ring-2 focus:ring-firebrick focus:ring-offset-2
        `}>
          See Menu
        </Link>
      </div>

      <div className="w-full max-w-lg mx-auto px-4 py-12">
  
        {/* Start screen */}
        {screen === 'start' && (
          <section aria-labelledby="quiz-heading">
            <p className={`text-xs uppercase tracking-widest ${theme.color.text.primary} mb-2`}>
              Nomad Cafe
            </p>
            <h1
              id="quiz-heading"
              className={`font-serif text-4xl ${theme.color.text.default} mb-3`}
            >
              What's your drink?
            </h1>
            <p className={`${theme.text.body} ${theme.color.text.default} opacity-70 mb-8`}>
              4 quick questions. We'll match you with your perfect Nomad order.
            </p>
            <button
              onClick={startQuiz}
              className={`
                text-sm 
                ${theme.color.background.accent}
                hover:bg-firebrick hover:text-oatmilk
                transition-colors duration-300
                md:px-4 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out 
                focus:outline-none focus:ring-2 focus:ring-gamboge focus:ring-offset-2
              `}
            >
              Find my drink
            </button>
          </section>
        )}

        {/* Quiz screen */}
        {screen === 'quiz' && (
          <section aria-labelledby="question-heading">
            <p className={`text-xs uppercase tracking-widest ${theme.color.text.primary} mb-3`}>
              Question {current + 1} of {questions.length}
            </p>
            <div className="flex gap-2 mb-6" aria-hidden="true">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i < current ? 'bg-firebrick' : 'bg-oatmilk'
                  }`}
                />
              ))}
            </div>

            <h2
              id="question-heading"
              className={`font-serif text-2xl ${theme.color.text.default} mb-6 leading-snug`}
            >
              {questions[current].text}
            </h2>

            <div className="flex flex-col gap-3" role="list">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  role="listitem"
                  onClick={() => selectAnswer(opt.tags, i)}
                  className={`
                    text-left px-5 py-4 rounded-xl text-sm
                    border transition-all duration-200
                    hover:outline-none hover:ring-2 hover:ring-gamboge hover:ring-offset-2 hover:bg-oatmilk/80
                    focus:outline-none focus:ring-2 focus:ring-gamboge focus:ring-offset-2
                    ${selected === i
                      ? 'border-gamboge bg-oatmilk text-espresso'
                      : 'border-espresso/20 hover:border-gamboge hover:bg-oatmilk/50'
                    }
                    ${theme.color.text.default}
                  `}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Result screen */}
        {screen === 'result' && result && (
          <section aria-labelledby="result-heading">
            <p className={`text-xs uppercase tracking-widest ${theme.color.text.primary} mb-2`}>
              Your drink
            </p>

            {/* Drink card */}
            <div className="border border-espresso/20 rounded-xl p-6 mb-4">
              <h2
                id="result-heading"
                className={`font-serif text-3xl ${theme.color.text.primary} mb-3`}
              >
                {result.name}
              </h2>
              <p className={`${theme.text.body} ${theme.color.text.default} opacity-70 mb-4 leading-relaxed`}>
                {result.desc}
              </p>
              <hr className="border-espresso/10 mb-4" aria-hidden="true" />
              <p className={`font-serif italic text-base ${theme.color.text.default} pl-4 border-l-2 border-gamboge leading-relaxed`}>
                {result.personality}
              </p>
            </div>

            {/* Pairing cards */}
            {result.pairings && (
              <div className="mb-6">
                <p className={`text-xs uppercase tracking-widest ${theme.color.text.primary} mb-3`}>
                  Pairs well with
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {result.pairings.map((pair, i) => (
                    <div
                      key={i}
                      className="border border-gamboge/40 bg-oatmilk rounded-xl p-4"
                    >
                      <p className="font-semibold text-sm text-espresso mb-1">
                        {pair.name}
                      </p>
                      <p className="text-xs text-espresso/60 leading-relaxed">
                        {pair.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={startQuiz}
                className={`
                  ${theme.color.background.accent}
                  text-sm
                  hover:bg-firebrick hover:text-oatmilk
                  md:px-4 px-6 py-3 rounded-lg 
                  transition-all duration-300 ease-in-out 
                  focus:outline-none focus:ring-2 focus:ring-gamboge focus:ring-offset-2
                `}
              >
                Try again
              </button>
              <button
                onClick={shareResult}
                className={`
                  ${theme.color.background.secondary}
                  ${theme.color.text.default}
                  text-sm
                  hover:bg-gamboge
                  md:px-4 px-6 py-3 rounded-lg 
                  transition-all duration-300 ease-in-out 
                  
                `}
              >
                Share result
              </button>
            
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default NomadQuizGame
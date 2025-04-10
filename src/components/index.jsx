import Header from './partials/_header'
import {theme} from '../styles/themes'


const Home = () => {
const numbers = [1, 2, 3, 4, 5]
  return (
    <>
      <Header
      tag={"/icons-logos/Nomad-logo-name-transparent-White.png"}
      img={"/gallery/Tathi_espresso.jpg"}
      />
      <section>
      <div>
        <h1 className={theme.home}><b className='text-royal'>7+</b> years serving Ridgewood!</h1>
        <p>I am a baby cafe website! :D</p>
        {numbers.map((number, i) => (
          <p key={i}>{number}</p>
        ))}
      </div>
      </section>
    </>
  )
}

export default Home
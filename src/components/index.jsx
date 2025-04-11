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
      <div>
      <section>
        <div className='text-center'>
          <h1 className={theme.home}><b className='text-firebrick'>7+</b> years serving Ridgewood!</h1>
        </div>
        <div>
          <img src="products/Capuccino_heart.jpg" alt="" />
        </div>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        <div>
          <p>John Smith</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>“Best cup of joe and sandwich. Love the vibe it has too! Will come back”</p>
        </div>
        <div>
          <p>
            Nomad cafe is a neighborhood Restaurant in Ridgewood, New York. We provide delicious handmade food. From our customizable Traveler sandwich to our popular Chedder Smashbrowns.
            We strive to provide the best atmosphere with a warm staff, lovely coffee, great food and more!
          </p>
        </div>
      </section>
      </div>
    </>
  )
}

export default Home
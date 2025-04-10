import Header from './partials/_header'

const Home = () => {
const numbers = [1, 2, 3, 4, 5]
  return (
    <>
    <section>
      <Header
      tag={"public/icons-logos/Nomad-logo-name-transparent-White.png"}
      img={"public/gallery/Tathi_espresso.jpg"}
      />
    </section>
      <div>

        <h1>Hello</h1>
        <p>I am a baby cafe website! :D</p>
        {numbers.map((number, i) => (
          <p key={i}>{number}</p>
        ))}
      </div>
    </>
  )
}

export default Home
import {useState } from "react"
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isToggled, setIsToggled] = useState()

  let handleClick = () => {
    setIsToggled(!isToggled)
  }
  return (
    <nav className="
    bg-black/50 z-10 max-h-[15vh] absolute w-screen
    p-2 shadow-white justify-between items-center flex top-0 right-0 left-0 transition-all duration-500">
      <img className="w-24 m-2" src="/icons-logos/Nomad-Logo-Simple-Transparent-White.png" alt="" />
      {/* Burger Icon */}
      <button onClick={handleClick} className="relative flex flex-col justify-center items-center space-y-1 p-2 z-10">
        <BurgerLine isToggled={isToggled} index={1} />
        <BurgerLine isToggled={isToggled} index={2} />
        <BurgerLine isToggled={isToggled} index={3} />
      </button>
      {/* Off-screen Menu */}
      <div 
          className={`
            h-screen w-full max-w-[350px] fixed top-0 flex flex-col space-y-9 items-center justify-center text-center text-3xl transition-all ease-in-out duration-[1000ms] off-screen-menu
            bg-firebrick
          ${isToggled ? 'right-0' : '-right-[450px]'} transition-all duration-300 ease-in-out`}
        >
        {["projects", "contacts", "about"].map((link) => (
        <Link 
          key={link} 
          to={`/${link}`} 
          onClick={handleClick} 
          className={`hover:animate-pulse p-2
            `}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </Link>
        ))}
        </div>
    </nav>
  )
}
const BurgerLine = ({ isToggled, index }) => {
  const lineClass = `rounded bg-white block h-1 w-10 transition-transform duration-300 ease-in-out`;
  const transforms = [
    isToggled ? "rotate-45 translate-y-2" : "",
    isToggled ? "opacity-0" : "opacity-100",
    isToggled ? "-rotate-45 -translate-y-2" : "",
  ];
  return <span className={`${lineClass} ${transforms[index - 1]}`} />;
};

export default Navbar
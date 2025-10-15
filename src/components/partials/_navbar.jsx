import { useState } from "react"
import { Link } from "react-router-dom"
import { theme } from "../../styles/themes"

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false)

  let handleClick = () => {
    setIsToggled(!isToggled)
  }

  return (
    <>
      <nav className="
        bg-black/50 z-20 max-h-[15vh] absolute w-screen
        p-2 shadow-white justify-between items-center flex top-0 right-0 left-0 transition-all duration-500">
        
        <Link className="w-24" to="/">
          <img 
            className="m-2 hover:animate-pulse cursor-pointer" 
            src="/icons-logos/Nomad-Logo-Simple-Transparent-White.webp" 
            alt="Nomad-Compass-Logo" 
            width={150}
            height={100}
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation - hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:flex gap-8">
          {["about", "menu", "faq"].map((link) => (
            <Link 
              key={link} 
              to={`/${link}`} 
              className={`${theme.color.text.nav} relative group pointer-cursor text-2xl mx-4 hover:animate-pulse p-2`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              <span className={`${theme.animation.hover.underline}`}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - visible on mobile, hidden on medium screens and up */}
        <button 
          onClick={handleClick} 
          className="md:hidden relative w-[50px] h-[40px] flex flex-col justify-center items-center space-y-1 p-2 z-10"
          width={50}
          height={40}
          aria-label="Mobile navigation menu - Three lined burger icon"
        >
          <BurgerLine isToggled={isToggled} index={1} />
          <BurgerLine isToggled={isToggled} index={2} />
          <BurgerLine isToggled={isToggled} index={3} />
        </button>

        {/* Mobile Off-screen Menu */}
        <div 
          className={`
            md:hidden
            h-screen w-full fixed top-0 flex items-center justify-center text-center text-3xl transition-all ease-in-out duration-[1000ms] bg-firebrick
            ${isToggled ? 'right-0' : '-right-[800px]'}`}
        >
          <div className="flex flex-col h-fit text-white">
            {["about", "menu", "faq"].map((link) => (
              <Link 
                key={link} 
                to={`/${link}`} 
                onClick={handleClick} 
                className={`hover:animate-pulse p-2 relative group pointer-cursor`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className={`${theme.animation.hover.underline}`}></span>
              </Link>
            ))}
          </div>
          <img 
            className="bottom-10 absolute h-40"
            src="icons-logos/Nomad-logo-White-Transparent.png" 
            alt="Nomad Cafe & Eatery Logo with writing"
            loading="lazy"
          />
        </div>
      </nav>
    </>
  )
}

const BurgerLine = ({ isToggled, index }) => {
  const lineClass = `rounded bg-white block h-1 w-10 transition-transform duration-300 ease-in-out`;
  const transforms = [
    isToggled ? "rotate-45 translate-y-2" : "",
    isToggled ? "opacity-0" : "opacity-100",
    isToggled ? "-rotate-45 -translate-y-2" : "",
  ];
  return <span aria-label={`Mobile burger line ${index}`} className={`${lineClass} ${transforms[index - 1]}`} />;
};

export default Navbar
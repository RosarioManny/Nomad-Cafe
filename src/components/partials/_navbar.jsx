import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { theme } from "../../styles/themes"

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false)
  const location = useLocation()

   // Close mobile menu when route changes
  useEffect(() => {
    setIsToggled(false)
  }, [location])

  // Handle escape key and scroll locking
  useEffect(() => {
    // Disable/enable scroll based on menu state
    if (isToggled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Handle escape key
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isToggled) {
        setIsToggled(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isToggled]) // Both effects depend on isToggled

  const handleClick = () => {
    setIsToggled(!isToggled)
  }


  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick()
    }
  }

  const navLinks = ["about", "menu", "faq"]

  return (
    <>
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-oatmilk p-2 z-50 rounded font-semibold text-espresso"
      >
        Skip to main content
      </a>
      <nav 
        className="bg-obscuro/50 
        z-20 max-h-[15vh] absolute w-screen p-2 shadow-sm
        justify-between items-center flex
        top-0 right-0 left-0 
        transition-all duration-500"
        aria-label="Main navigation"
      >
        <Link 
          className="w-24 focus:outline-1 rounded" 
          to="/"
          aria-label="Nomad Cafe homepage"
        >
          <img 
            className="m-2 hover:animate-pulse cursor-pointer" 
            src="/icons-logos/Nomad-Logo-Simple-Transparent-White.webp" 
            alt="Nomad Cafe Logo" 
            width={150}
            height={100}
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link} 
              to={`/${link}`} 
              className={`${theme.color.text.nav} relative group text-2xl mx-4 hover:animate-pulse p-2 focus:outline-1 rounded transition-all duration-200`}
              aria-current={location.pathname === `/${link}` ? 'page' : undefined}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              <span 
                className={`${theme.animation.hover.underline}`}
                aria-hidden="true"
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="md:hidden relative w-[50px] h-[40px] flex flex-col justify-center items-center space-y-1 p-2 z-30 focus:outline-1 rounded transition-all duration-200"
          aria-expanded={isToggled}
          aria-controls="mobile-menu"
          aria-label={isToggled ? "Close navigation menu" : "Open navigation menu"}
        >
          <BurgerLine isToggled={isToggled} index={1} />
          <BurgerLine isToggled={isToggled} index={2} />
          <BurgerLine isToggled={isToggled} index={3} />
        </button>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`
            md:hidden
            h-screen w-full
            fixed top-0 
            flex items-center justify-center text-center 
            text-3xl 
            transition-all ease-in-out duration-[1000ms] bg-firebrick
            ${isToggled ? 'right-0' : '-right-[800px]'}
          `}
          aria-hidden={!isToggled}
        >
          <div className="flex flex-col h-fit text-oatmilk ">
            {navLinks.map((link) => (
              <Link 
                key={link} 
                to={`/${link}`} 
                onClick={handleClick}
                className="hover:animate-pulse p-4 relative group focus:outline-1 focus:ring-offset-2 focus:ring-offset-firebrick rounded transition-all duration-200"
                tabIndex={isToggled ? 0 : -1}
                aria-current={location.pathname === `/${link}` ? 'page' : undefined}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span 
                  className={`${theme.animation.hover.underline}`}
                  aria-hidden="true"
                ></span>
              </Link>
            ))}
          </div>
          <img 
            className="bottom-10 absolute h-40"
            src="/icons-logos/Nomad-logo-White-Transparent.png" 
            alt="Nomad Cafe & Eatery - Community and Coffee since 2018"
            loading="lazy"
            tabIndex={isToggled ? 0 : -1}
          />
        </div>
      </nav>
    </>
  )
}

const BurgerLine = ({ isToggled, index }) => {
  const lineClass = `rounded bg-oatmilk block h-1 w-10 transition-transform duration-300 ease-in-out`;
  const transforms = [
    isToggled ? "rotate-45 translate-y-2" : "",
    isToggled ? "opacity-0" : "opacity-100",
    isToggled ? "-rotate-45 -translate-y-2" : "",
  ];
  
  return (
    <span 
      className={`${lineClass} ${transforms[index - 1]}`}
      aria-hidden="true"
    />
  );
};

export default Navbar
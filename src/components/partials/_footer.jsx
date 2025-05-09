import { Link } from "react-router-dom"
import { theme } from "../../styles/themes"
import { useResponsive } from "../../utils/responsoveProvider"
import { socialMedias } from "../../database/socialMedias"

const Footer = () => {
  const isDesktop = useResponsive()
  
  return (
    <footer className="mt-10 bottom-0 w-screen text-white ">
      <div className={`
        p-4 h-fit 
        ${theme.color.background.primary}
        ${isDesktop ? 
        `flex-row-reverse flex justify-between` 
        : 
        `flex-col place-items-center align-content`}`
        }>
          <section className={`${theme.layout.footer.section} flex flex-col gap-4 justify-start`} >
            <h3 className={`${theme.text.subheading} ${theme.text.underline}`}>We Accept:</h3>
            <div className="max-w-sm flex justify-center">
              <img 
              className="w-2/3 rounded-md" 
              src="/icons-logos/All-acceptance-Marker-VISA-DISC-AMEX-MC.webp" 
              alt="Accepted Payment Logos - Visa, American Express, Discover, Google Pay, Apple Pay & Mastercard"
              loading="lazy"
              />
            </div>
        </section>
        <section className={`${theme.layout.footer.section}`}>
          <h2 className={`${theme.text.subheading} ${theme.text.underline}`}> Quick Links </h2>
          <div className="flex flex-col h-fit ">
            {["about", "menu", "faq"].map((link) => (
              <Link 
                key={link} 
                to={`/${link}#Header`} 
                className={`text-2xl w-auto hover:animate-pulse my-2 relative group pointer-cursor `}
                >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className={`${theme.animation.hover.underline}`}></span>
              </Link>
            ))}
          </div>
        </section>
        <section className={`${theme.layout.footer.section} mx-4 flex-col flex justify-start`}>
          <h2 className={`${theme.text.subheading} ${theme.text.underline} mb-4`}>Contact Us!</h2>
          <p>(347)-227-8136</p>
          <p>nomadcafeandeatery@gmail.com</p>
          <div className="flex justify-center">
          {socialMedias.map((media, i) => (
            <Link 
              key={i}
              to={media.link}>
              <img 
              className="bottom-10 w-10 m-8 hover:animate-pulse"
              src={media.path}
              alt={media.alt_text}/>
            </Link>
          ))}
          </div>
        </section>
        <div className="flex flex-col justify-center">
          <Link to="/">
            <img 
            className="bottom-10 min-w-[166px] h-40 my-4 hover:animate-pulse" 
            src="/icons-logos/Nomad-logo-White-Transparent.png" 
            alt="Nomad Cafe & Eatery Logo with writing" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
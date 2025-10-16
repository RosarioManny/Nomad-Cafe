import { Link } from "react-router-dom"
import { theme } from "../../styles/themes"
import { useResponsive } from "../../utils/responsoveProvider"
import { socialMedias } from "../../database/socialMedias"

const Footer = () => {
  const isDesktop = useResponsive()
  
  return (
    <footer className="mt-10 bottom-0 w-screen text-white ">
      <div className={`
        p-4 h-fit flex flex-col place-items-center align-content
        md:flex-row-reverse  md:justify-between
        ${theme.color.background.primary}
        `
        }>
          <section className={`${theme.layout.footer.section} flex flex-col gap-4 items-center`} >
            <h3 className={`${theme.text.subheading} ${theme.text.underline}`}>We Accept:</h3>
              <img 
              className="min-w-[250px] max-w-[450px] w-2/3 rounded-md" 
              src="/icons-logos/All-acceptance-Marker-VISA-DISC-AMEX-MC.webp" 
              alt="Accepted Payment Logos - Visa, American Express, Discover, Google Pay, Apple Pay & Mastercard"
              loading="lazy"
              />
        </section>
        <section className={`${theme.layout.footer.section}`}>
          <h2 className={`${theme.text.subheading} ${theme.text.underline}`}> Quick Links </h2>
          <div className="flex flex-col items-center justify-center h-fit ">
            {["faq", "menu", "about"].map((link) => (
              <Link 
                key={link} 
                to={`/${link}#Header`} 
                className={`text-2xl w-1/2 hover:animate-pulse my-2 relative group pointer-cursor `}
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
        <Link className="flex flex-col justify-center" to="/">
          <img 
          className="bottom-10 min-w-[166px] h-40 my-4 hover:animate-pulse" 
          src="/icons-logos/Nomad-logo-White-Transparent.png" 
          alt="Nomad Cafe & Eatery Logo with writing" />
        </Link>
      </div>
      <div className={`${theme.color.background.primary} border-t-[1px] border-oatmilk/10  p-1`}>
        <p className="opacity-40"> Site by Emmanuel Rosario</p>
      </div>
    </footer>
  )
}

export default Footer
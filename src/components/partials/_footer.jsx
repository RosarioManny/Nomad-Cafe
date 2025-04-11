import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="mt-10 bottom-0 w-screen text-white ">
      <div className="h-fit flex-col place-items-center align-content bg-firebrick">
        <section className="text-center">
        <h2>Contact Us!</h2>
        <p>(347)-227-8136</p>
        <p>nomadcafeandeatery@gmail.com</p>
        </section>
        <section className="text-center">
          <h3>We Accept:</h3>
          <div className="max-w-sm">
            <img className="w-fit "src="icons-logos/All-acceptance-Marker-VISA-DISC-AMEX-MC.webp" alt="Accepted Payment Logos - Visa, American Express, Discover, Google Pay, Apple Pay and Mastercard" />
          </div>
        </section>
        <section className="text-center">
          <div className="flex flex-col h-fit ">
            {["about", "menu", "faq"].map((link) => (
              <Link 
                key={link} 
                to={`/${link}`} 
                className={`hover:animate-pulse p-2`}
                >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
          </div>
          <img className="bottom-10 h-40" src="icons-logos/Nomad-logo-White-Transparent.png" alt="Nomad Cafe & Eatery Logo with writing" />
        </section>
      </div>
    </footer>
  )
}

export default Footer
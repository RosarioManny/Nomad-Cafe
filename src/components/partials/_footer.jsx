import { Link } from "react-router-dom"
import { theme } from "../../styles/themes"

import { socialMedias } from "../../database/socialMedias"

const Footer = () => {


  return (
    <footer
      className="mt-10 bottom-0 w-screen text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className={`
        p-4 h-fit flex flex-col gap-6
        md:flex-row
        ${theme.color.background.primary}
      `}>
        <div className="md:max-w-[60%] flex flex-col md:flex-row gap-6 w-full">

          {/* About & Logo */}
          <section
            className="w-full flex-1 rounded-lg p-6 text-center md:text-left"
            aria-labelledby="footer-about-heading"
          >
            <h2
              id="footer-about-heading"
              className={`${theme.text.subheading} ${theme.text.underline} mb-3`}
            >
              About Nomad Cafe
            </h2>
            <p className="text-sm text-justify leading-relaxed mb-4">
              Your neighborhood restaurant in Ridgewood, New York serving delicious handmade food,
              from our customizable Traveler sandwich to our popular Cheddar Smashbrowns.
            </p>

            <ul
              className="block my-4 text-sm leading-relaxed"
              aria-label="Highlights"
            >
              <li>Breakfast served all day</li>
              <li>Open late</li>
              <li>Rotating seasonal menu</li>
              <li>In-store rewards: 10th drink free!</li>
            </ul>

            <p className="text-sm leading-relaxed mb-4">
              Experience our warm atmosphere, friendly staff, and exceptional coffee.
            </p>

            <Link
              className="inline-flex w-full flex-col justify-center items-center focus:outline-none focus:ring-2 focus:ring-oatmilk rounded transition-all duration-200"
              to="/"
              aria-label="Nomad Cafe — go to homepage"
            >
              <img
                className="min-w-[166px] object-contain w-fit h-32 hover:animate-pulse"
                src="/icons-logos/Nomad-logo-White-Transparent.png"
                alt="Nomad Cafe & Eatery logo"
              />
            </Link>
          </section>
        </div>

        <div className="md:max-w-[50%] flex flex-col gap-6">

          {/* Payment */}
          <section
            className="w-full rounded-lg p-6 text-center"
            aria-labelledby="footer-payment-heading"
          >
            <h2
              id="footer-payment-heading"
              className={`${theme.text.subheading} ${theme.text.underline} mb-4`}
            >
              We Accept
            </h2>
            <img
              className="mx-auto max-w-[90%] sm:max-w-[50%] rounded-md"
              src="/icons-logos/All-acceptance-Marker-VISA-DISC-AMEX-MC.webp"
              alt="Accepted payment methods: Visa, Mastercard, American Express, Discover, Apple Pay, and Google Pay"
              loading="lazy"
            />
          </section>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Quick Links */}
            <section
              className="flex-1 rounded-lg p-6 text-center"
              aria-labelledby="footer-links-heading"
            >
              <h2
                id="footer-links-heading"
                className={`${theme.text.subheading} ${theme.text.underline} mb-4`}
              >
                Quick Links
              </h2>
              <nav aria-label="Footer page navigation">
                <div className="flex flex-col items-center justify-center gap-2">
                  {["faq", "menu", "about", "events"].map((link) => (
                    <Link
                      key={link}
                      to={`/${link}#Header`}
                      className="text-sm sm:min-w-[30%] min-w-[50%] border border-oatmilk/30  rounded-lg px-4 py-1 hover:bg-oatmilk hover:text-espresso transition-colors duration-200"
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </Link>
                  ))}
                </div>
              </nav>
            </section>
          </div>
        </div>
      </div>

      <div className={`${theme.color.background.primary} p-4`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <ul className="flex gap-3 list-none p-0">
            {socialMedias.map((media, i) => (
              <li key={i}>
                <Link to={media.link} aria-label={`Nomad Cafe on ${media.alt_text}`}>
                  <img className="size-8 hover:animate-pulse" src={media.path} alt={media.alt_text} />
                </Link>
              </li>
            ))}
          </ul>
          <address className="not-italic flex gap-4">
            <a href="tel:+13472278136" className="hover:opacity-100 transition-opacity">
              (347) 227-8136
            </a>
            <a href="mailto:nomadcafeandeatery@gmail.com" className="hover:opacity-100 transition-opacity">
              nomadcafeandeatery@gmail.com
            </a>
          </address>
          <p>Site by Emmanuel Rosario</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
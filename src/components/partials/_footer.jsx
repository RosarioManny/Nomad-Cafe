import { Link } from "react-router-dom"
import { theme } from "../../styles/themes"
import { useResponsive } from "../../utils/responsoveProvider"
import { socialMedias } from "../../database/socialMedias"

const Footer = () => {
  const isDesktop = useResponsive()
  
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
          {/* Left Column - About & Logo */}
          <section 
            className="w-full flex-1 rounded-lg p-6 text-center md:text-left"
            aria-labelledby="about-heading"
          >
            <h3 
              id="about-heading"
              className={`${theme.text.subheading} ${theme.text.underline} mb-3`}
            >
              About Nomad Cafe
            </h3>
            <p className="text-sm text-justify leading-relaxed mb-4">
              Your neighborhood restaurant in Ridgewood, New York serving delicious handmade food, 
              from our customizable Traveler sandwich to our popular Cheddar Smashbrowns.
              <span className="block my-6 font-semibold">
                • Breakfast served all day<br/>
                • Open late<br/>
                • Rotating seasonal menu<br/>
                • In-store rewards: 10th drink free!
              </span>
              Experience our warm atmosphere, friendly staff, and exceptional coffee.
            </p>
            <Link 
              className="inline-flex w-full flex-col justify-center items-center focus:outline-none focus:ring-2 focus:ring-oatmilk rounded transition-all duration-200" 
              to="/"
              aria-label="Navigate to homepage"
            >
              <img 
                className="min-w-[166px] object-contain w-fit h-32 hover:animate-pulse" 
                src="/icons-logos/Nomad-logo-White-Transparent.png" 
                alt="Nomad Cafe & Eatery - Community and Coffee since 2018" 
              />
            </Link>
          </section>
        </div>
        <div className=" md:max-w-[50%] flex flex-col gap-6">
          {/* Payment Section - Full Width Top */}
          <section 
            className="w-full rounded-lg p-6 text-center"
            aria-labelledby="payment-heading"
          >
            <h3 
              id="payment-heading"
              className={`${theme.text.subheading} ${theme.text.underline} mb-4`}
            >
              We Accept:
            </h3>
            <img 
              className="mx-auto max-w-[90%] md:max-w-[50%] rounded-md" 
              src="/icons-logos/All-acceptance-Marker-VISA-DISC-AMEX-MC.webp" 
              alt="Accepted payment methods including Visa, American Express, Discover, Google Pay, Apple Pay and Mastercard"
              loading="lazy"
            />
          </section>

          {/* Bottom Row - Quick Links & Contact Side by Side */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Quick Links - Left Bottom */}
            <section 
              className="flex-1 rounded-lg p-6 text-center"
              aria-labelledby="quick-links-heading"
            >
              <h2 
                id="quick-links-heading"
                className={`${theme.text.subheading} ${theme.text.underline} mb-4`}
              >
                Quick Links
              </h2>
              <nav aria-label="Footer navigation">
                <div className="flex flex-col items-center h-fit">
                  {["faq", "menu", "about"].map((link) => (
                    <Link 
                      key={link} 
                      to={`/${link}#main-content`} 
                      className={`text-xl w-full hover:animate-pulse my-2 relative group focus:outline-none focus:ring-2 focus:ring-oatmilk focus:ring-offset-2 rounded transition-all duration-200 py-2`}
                      aria-label={`Navigate to ${link} page`}
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                      <span className={`${theme.animation.hover.underline}`} aria-hidden="true"></span>
                    </Link>
                  ))}
                </div>
              </nav>
            </section>

            {/* Contact - Right Bottom */}
            <section 
              className="flex-1 rounded-lg p-6 text-center"
              aria-labelledby="contact-heading"
            >
              <h2 
                id="contact-heading"
                className={`${theme.text.subheading} ${theme.text.underline} mb-4`}
              >
                Contact Us
              </h2>
              <address className="not-italic mb-4">
                <p className="mb-2">
                  <a 
                    href="tel:+13472278136" 
                    className="hover:text-oatmilk transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-oatmilk rounded px-2 py-1"
                    aria-label="Call us at 347-227-8136"
                  >
                    (347)-227-8136
                  </a>
                </p>
                <p>
                  <a 
                    href="mailto:nomadcafeandeatery@gmail.com" 
                    className="hover:text-oatmilk transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-oatmilk rounded px-2 py-1"
                    aria-label="Email us at nomadcafeandeatery@gmail.com"
                  >
                    nomadcafeandeatery@gmail.com
                  </a>
                </p>
              </address>
              <div className="flex justify-center gap-4" aria-label="Social media links">
                {socialMedias.map((media, i) => (
                  <Link 
                    key={i}
                    to={media.link}
                    aria-label={`Follow us on ${media.alt_text}`}
                    className="focus:outline-none focus:ring-2 focus:ring-oatmilk focus:ring-offset-2 rounded-full transition-all duration-200"
                  >
                    <img 
                      className="size-10 hover:animate-pulse"
                      src={media.path}
                      alt={media.alt_text}
                    />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={`${theme.color.background.primary} border-t-[1px] border-oatmilk/10 p-4 text-center`}>
        <p className="opacity-40" aria-label="Site credits">Site by Emmanuel Rosario</p>
        <p className="opacity-40" aria-label="Site version">Version 1.2</p>
      </div>
    </footer>
  )
}

export default Footer
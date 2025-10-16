import FaqCard from "./FaqCard"
import Header from "../partials/_header"
import { useState } from 'react'
import faqQuestions from '../../database/faqQuestions'
import ScrollToAnchor from "../../utils/scrollToAnchor"
import { theme } from "../../styles/themes"

const Faq = () => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <>
      <ScrollToAnchor/>
      <Header
        img={"/gallery/Cafe-inside-Redshirt.webp"}
        tag={"/icons-logos/Nomad-White-FAQ.webp"} 
        img_alt="Inside view of Nomad Cafe showing the interior and seating area"
      />
      
      <main>
        {/* Skip link for screen readers */}
        <a 
          href="#faq-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
        >
          Skip to FAQ content
        </a>
        
        <section 
          id="faq-content"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          aria-labelledby="faq-heading"
        >
          <div className="flex flex-col lg:flex-row lg:gap-8">
            {/* Contact Info Sidebar - 40% on large screens */}
            <aside 
              className="lg:w-2/5 mb-8 lg:mb-0"
              aria-label="Contact information"
            >
              <div className={`${theme.color.background.secondary} h-fit p-6 rounded-lg shadow-sm`}>
                <h1 
                  id="faq-heading"
                  className={`${theme.color.text.primary} ${theme.text.heading} mb-6`}
                >
                  Frequently Asked Questions
                </h1>
                <div className={`${theme.text.body} ${theme.color.text.default} mb-6`}>
                  <p className="mb-4">
                    Coffee questions? <br/> 
                    Pastry ponderings? <br/>  
                    Gelato curiosities? 
                  </p>
                  <p>
                    We've answered our most common queries here. Don't see what you're after? 
                    Reach out—we're always happy to chat!
                  </p>
                </div>
                
                <div className={`my-6 `}>
                  <h2 className={`text-2xl ${theme.color.text.primary} font-semibold mb-3`}>
                    Contact Us
                  </h2>
                  <ul className={`${theme.text.body} ${theme.color.text.default} space-y-2`}>
                    <li>
                      <a 
                        href="tel:347-227-8136" 
                        className="hover:text-firebrick transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-firebrick focus:ring-offset-2 rounded"
                      >
                        347-227-8136
                      </a>
                    </li>
                    <li>
                      <a 
                        href="mailto:nomadcafeandeatery@gmail.com" 
                        className="hover:text-firebrick transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-firebrick focus:ring-offset-2 rounded"
                      >
                        nomadcafeandeatery@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* FAQ Cards - 60% on large screens */}
            <div className="lg:w-3/5">
              <div 
                className="space-y-4"
                role="region"
                aria-label="FAQ questions and answers"
              >
                {faqQuestions.map((faq, index) => (
                  <FaqCard
                    key={index}
                    question={faq.que}
                    isToggled={isToggled}
                    answer={faq.ans}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Faq
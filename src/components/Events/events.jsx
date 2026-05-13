import { theme } from '../../styles/themes'
import Header from '../partials/_header'
import ScrollToAnchor from '../../utils/scrollToAnchor'
import { useState } from 'react'

const Events = () => {
  const [calendarLoaded, setCalendarLoaded] = useState(false)

  return (
    <main className={`${theme.color.text.default} ${theme.text.body}`}>
      <ScrollToAnchor />
      
      <a
        href="#events-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 z-50 rounded"
      >
        Skip to events content
      </a>

      <Header
        img={"/gallery/Event_Packed_House.webp"}
        tag={"/icons-logos/Nomad-White-Events.webp"}
        img_alt="Inside view of Nomad Cafe showing the interior and seating area"
      
      />

      <section
        id="events-content"
        aria-labelledby="events-heading"
        className="flex flex-col items-center px-4 py-10"
      >
        <h1
          id="events-heading"
          className={`${theme.text.heading} ${theme.color.text.primary} mb-4`}
        >
          What's happening?
        </h1>

        <p className={`${theme.text.subheading} ${theme.color.text.default} text-center mb-3`}>
          Join us for something special
        </p>

        <p className={`text-center w-full md:w-2/3 lg:w-1/2 ${theme.text.body} ${theme.color.text.default} mb-8`}>
          From live music and arts &amp; crafts nights to movie chats, swap parties, and admin
          evenings where finishing your to-do list earns you a treat on us — come solo, bring a
          friend, or just wander in. There's always something going on at Nomad.
          Leave the screens, stay for the moment.
        </p>

        <div
          role="region"
          aria-label="Nomad Cafe upcoming events calendar"
          className="w-full max-w-3xl rounded-xl overflow-hidden outline outline-4 outline-espresso"
        >
          <div className={`${theme.color.background.default} px-5 py-3 flex items-center justify-between`}>
            <span
              className="font-serif text-oatmilk text-sm"
              aria-hidden="true"
            >
              Nomad Cafe — Event Calendar
            </span>
            <span className="text-xs bg-gamboge text-espresso px-3 py-1 rounded-full font-medium">
              Live
            </span>
          </div>

          <div className="relative w-full h-[500px]">

            {/* Loading state */}
            {!calendarLoaded && (
              <div
                role="status"
                aria-label="Calendar loading"
                className={`
                  absolute inset-0 flex flex-col gap-4 items-center justify-center
                  ${theme.color.background.secondary}
                `}
              >
                <div className="flex gap-2 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full bg-gamboge animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
                <p className={`text-sm ${theme.color.text.default} opacity-60`}>
                  Loading events...
                </p>
              </div>
            )}

            <iframe
              src="https://calendar.google.com/calendar/embed?src=871b4f6f13e776e2270ee5154df1edf8aa1321e890fd9011a38c2b3b2e21c228%40group.calendar.google.com&ctz=America%2FNew_York"
              className={`w-full h-full block transition-opacity duration-500 ${calendarLoaded ? 'opacity-100' : 'opacity-0'}`}
              frameBorder="0"
              scrolling="no"
              title="Nomad Cafe upcoming events — Google Calendar"
              onLoad={() => setCalendarLoaded(true)}
            />
          </div>
        </div>
        <p className={`text-center ${theme.text.advisoryText} ${theme.color.text.primary} py-3`}>
          Click on an event to learn more!
        </p>

        <section
          aria-labelledby="host-heading"
          className="relative flex flex-col items-center mt-10 w-full"
        >
          <img
            className="absolute inset-x-auto size-72  object-contain z-0 opacity-30"
            src="/icons-logos/Nomad-Logo-Simple-Transparent-White.webp"
            alt=""
            aria-hidden="true"
          />
          <h2
            id="host-heading"
            className={`relative z-10 ${theme.text.subheading} ${theme.color.text.default} text-center mb-3`}
          >
            Got an idea?
          </h2>
          <p className={`relative z-10 text-center w-full md:w-2/3 lg:w-1/2 ${theme.text.body} ${theme.color.text.default}`}>
            Want to host a swap party, book club, or something entirely your own? We're always
            looking for fun, community-driven events to add to our calendar. Reach out and
            let's make it happen.
          </p>
          <address
            aria-label="Nomad Cafe contact information"
            className={`relative z-10not-italic text-center mt-6 ${theme.text.body} ${theme.color.text.default} space-y-1`}
          >
            <p>Instagram: @nomadcafeandeatery</p>
            <p>Email: nomadcafeandeatery@gmail.com</p>
            <p>Phone: (347) 227-8136</p>
          </address>
        </section>


      </section>
    </main>
  )
}

export default Events
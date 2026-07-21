import { theme } from '../../styles/themes'

const hoursOfOperation = [
    { days: 'Mon - Wed', hours: '7:00 AM - 4:00 PM' },
    { days: 'Thur', hours: '7:00 AM - 7:00 PM' },
    { days: 'Fri - Sat', hours: '7:00 AM - 8:00 PM' },
    { days: 'Sun', hours: '8:00 AM - 4:00 PM' }
]

export const HoursComponent = () => {
  return ( 
  <section className='relative flex flex-col gap-4 items-center justify-center'>
    {/* <img
      className="absolute inset-auto  size-72 object-contain z-0 opacity-30"
      src="/icons-logos/Nomad-Logo-Simple-Transparent-White.webp"
      alt=""
      aria-hidden="true"
    /> */}
    <h1 className={`${theme.text.heading} ${theme.color.text.default} relative z-10 items-center mx-10`}> Hours </h1>
    <div 
      className={`${theme.text.body} relative z-10  grid grid-cols-2 gap-2 mx-2`}
      role="table"
      aria-label="Business hours"
      >
      {hoursOfOperation.map((time, index) => (
        <div 
        key={index}
        className="relative z-10 flex flex-col justify-between items-center p-2 bg-oatmilk rounded-lg"
        role="row"
        >
          <span 
            className={`${theme.color.text.default} font-semibold pr-3 `}
            role="cell"
            >
            {time.days} 
          </span>
          <span 
            className={`${theme.color.text.primary} font-bold`}
            role="cell"
            >
            {time.hours}
          </span>
        </div>
      ))}
    </div>
  </section>
  )
}
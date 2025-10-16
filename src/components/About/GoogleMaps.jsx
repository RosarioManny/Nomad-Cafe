import React from "react";
import { theme } from '../../styles/themes'
import { useResponsive } from '../../utils/responsoveProvider'

const GoogleMaps = () => {
  const isMobile = useResponsive()
  const address = '6714 Forest Ave, Ridgewood, NY 11385, USA';

  return (
    <div className="flex flex-col justify-center mx-2">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.6368922430315!2d-73.9019129!3d40.70399400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d8b06ee04f7%3A0xae03783734f87ace!2sNomad%20Cafe%20and%20Eatery!5e0!3m2!1sen!2sus!4v1746218507808!5m2!1sen!2sus" 
      loading="lazy" 
      className={`border-2 mt-4 rounded border-firebrick border-solid flex align-center ${isMobile ? "min-w-[600px] min-h-[450px]" : "min-w-[350px] min-h-[400px]"}`}
      referrerPolicy="no-referrer-when-downgrade" />
      <a href="https://maps.app.goo.gl/8t4Kj398THVTB48W7" className={`${theme.color.text.default} text-xs flex justify-end`}>
        <p >{`(${address})`}</p>
      </a>
    </div>
  );
}

export default GoogleMaps
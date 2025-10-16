import { useState } from "react";

const Header = ({ tag, img, img_alt = "Header image", tag_alt = "Nomad Logo", togglePan = false, position = 'object-top'}) => {
  const [imageError, setImageError] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  return (
    <header id="Header" className="h-[70vh] relative mb-8 border-solid border-firebrick border-b-4">     
      <div className="relative h-full overflow-hidden ">
        {/* Hero Image with responsive variants */}
        <img 
          className={`
            w-full h-full object-cover 
            ${position}
            ${togglePan ? "animate-slow-pan" : ""} `
          }
          src={imageError ? "/gallery/Shop_sign.webp" : img}
          srcSet={`
            ${img} 1920w,
            ${img.replace('.webp', '-mobile.webp')} 800w
          `}
          sizes="100vw"
          alt={img_alt}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={() => setImageError(true)}
        />
        
        {/* Logo */}
        <div className="absolute inset-0 flex justify-center items-end z-10 pb-8">
          <img 
            src={tag} 
            alt={tag_alt} 
            className={`title fade-in z-10 w-auto transition-all duration-500 ${
              isLogoLoaded ? 'opacity-100' : 'opacity-0'
            } ${
              'max-w-[100%] md:max-w-[50%]'
            }`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onLoad={() => setIsLogoLoaded(true)}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
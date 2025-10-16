import { useState } from "react";

const Header = ({ tag, img, img_alt = "Header image", tag_alt = "Nomad Logo", togglePan = false, position = 'object-top'}) => {
  const [imageError, setImageError] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  return (
    <header id="Header" className="h-[70vh]  min-h-[400px] relative mb-8 border-solid border-firebrick border-b-4">     
      <div className="relative h-full overflow-hidden">
        {/* Hero Image */}
        <img 
          className={`
            w-full h-full object-cover 
            object-center md:${position} 
            ${togglePan ? "animate-slow-pan" : ""}
            ${imageError ? "hidden" : ""}
          `}
          src={img}
          sizes="100vw"
          alt={img_alt}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={() => setImageError(true)}
        />
        
        {/* Fallback Background - Shows when image fails */}
        <div className={`
          w-full h-full bg-gradient-to-br from-firebrick/60 to-gamboge/60
          flex items-center justify-center
          ${imageError ? "" : "hidden"}
        `}>
          <div className="text-center opacity-80 text-espresso/90">
            <p className="mt-2 text-2xl font-semibold">Nomad Cafe</p>
            <p className="text-sm  mt-1">Ridgewood, NY</p>
          </div>
        </div>
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
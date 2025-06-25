import { useResponsive } from "../../utils/responsoveProvider";
import { useState } from "react";

const Header = ({ tag, img, img_alt = "Header image", tag_alt = "Nomad Logo" }) => {
  const isMobile = useResponsive();
  const [imageError, setImageError] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  return (
    <header id="Header" className="relative mb-8 border-solid border-firebrick border-b-4">     
      {/* Preload the most likely hero image (adjust as needed) */}
      <link 
        rel="preload" 
        as="image" 
        href={img} 
        imageSizes="100vw"
      />
      
      <div className="relative">
        {/* Hero Image with responsive variants */}
        <img 
          className={`w-full object-cover ${isMobile ? "h-[700px] object-[63%_37%]" : "h-full"}`}
          src={imageError ? "/gallery/Shop_sign.webp" : img}
          srcSet={`
            ${img} 1920w,
            ${img.replace('.webp', '-mobile.webp')} 800w
          `}
          sizes="100vw"
          alt={img_alt}
          width={isMobile ? 800 : 1920}
          height={isMobile ? 700 : 1080}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={() => setImageError(true)}
        />
        
        {/* Logo */}
        <div className="absolute inset-0 flex justify-center items-end z-10">
          <img 
            src={tag} 
            alt={tag_alt} 
            className={`title fade-in z-10 w-auto min-w-28 min-h-28 ${
              isLogoLoaded ? 'opacity-1' : 'opacity-0'
            }`}
            loading="eager"
            width={150}
            height={150}
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
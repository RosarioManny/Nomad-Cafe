import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const InfiniteGallery = ({ images }) => {
  const controls = useAnimation();
  const itemWidth = 250; // Matches your min-w-[250px]
  const gap = 16; // Matches your gap-4 (assuming 1rem = 16px)
  const duration = 90; // Seconds for one full loop / Smaller > faster | Large > Slower

  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images.slice(0,3)];

  useEffect(() => {
    const containerWidth = (itemWidth + gap) * images.length;
    
    const sequence = async () => {
      await controls.start({
        translateX: -containerWidth,
        transition: { 
          duration, 
          ease: "linear", 
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    sequence();
  }, [images.length, controls]);

  return (
    <div className={`overflow-hidden `}>
      <motion.ul 
        className="flex w-screen gap-4 h-1/4 h-80" // Using flex instead of your layout class
        animate={controls}
        style={{ width: 'max-content' }} // Allows horizontal expansion
      >
        {duplicatedImages.map((image, i) => (
          <motion.li 
            key={`${image.path}-${i}`}
            className="flex-shrink-0 flex items-center"
            
          >
            {image.path ? (
              <img 
                src={image.path} 
                alt={image.alt_text || "Nomad Cafe Product"}
                className='rounded-xl object-fill min-w-[250px] w-[250px] h-[300px] shadow-md shadow-black'
                loading={i > 3 ? 'lazy' : 'eager'}
                width={250}
                height={300}
                decoding='async'
              />
            ) : (
              <div className="h-96 bg-oatmilk flex items-center justify-center">
                <span>Image unavailable</span>
              </div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

// Usage:
export default InfiniteGallery
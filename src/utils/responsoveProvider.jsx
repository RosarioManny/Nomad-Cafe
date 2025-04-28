import { createContext, useContext, useState, useEffect } from "react";

const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 760);

  const handleResize = () => {
    setIsMobile(window.innerWidth >= 760)
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={isMobile}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export const useResponsive = () => {
  return useContext(ResponsiveContext);
};
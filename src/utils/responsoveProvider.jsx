import { createContext, useContext, useState, useEffect } from "react";

const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 760);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 760)
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={isDesktop}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export const useResponsive = () => {
  return useContext(ResponsiveContext);
};
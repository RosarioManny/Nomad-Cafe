import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export const useMenuNavigation = (menuCategories, defaultCategory = 'breakfast') => {
  const [category, setCategory] = useState(defaultCategory);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle URL hash on component mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    console.log('Hash', hash);
    if (hash && menuCategories.find(cat => cat.id === hash)) {
      setCategory(hash);
    }
  }, [location, menuCategories]);

  // Scroll to top and update URL when category changes
  useEffect(() => {
    console.log('Current category:', category);
    
    // Scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Update URL with current category
    if (category && category !== defaultCategory) {
      navigate(`/menu#${category}`, { replace: true });
    }
  }, [category, navigate, defaultCategory]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    
    // Immediate scroll to top for better UX
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleKeyDown = (event, newCategory) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCategoryChange(newCategory);
    }
  };

  return {
    category,
    setCategory,
    handleCategoryChange,
    handleKeyDown
  };
};
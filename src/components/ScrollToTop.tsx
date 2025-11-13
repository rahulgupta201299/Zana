import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component - Scrolls window to top on route change
 * Place this component inside BrowserRouter in App.tsx
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll, 'smooth' for smooth scroll
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;


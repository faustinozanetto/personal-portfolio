import { useEffect, useState, useRef, useCallback } from 'react';

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = () => {
    window.scrollY > 250 ? setSticky(true) : setSticky(false);
  };

  // This function handle the scroll performance issue
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const scrollHandler = useCallback(() => {
    debounce(handleScroll());
  }, []);

  useEffect(() => {
    if (window.location.pathname === '/') {
      window.addEventListener('scroll', scrollHandler);
      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, [debounce, handleScroll]);

  return { isSticky, element };
}

export default useSticky;

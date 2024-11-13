import { useState, useEffect } from 'react';

function useScrollHeader() {
  const [showHead, setShowHead] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHead(false);
      }
      if (currentScrollY > 40 && currentScrollY < lastScrollY) {
        setShowHead(true);
      } else if (currentScrollY === 0) {
        setShowHead(false);
      }
      setLastScrollY(currentScrollY);
      // console.log(currentScrollY,'-----------',lastScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return { showHead, setShowHead };
}

export default useScrollHeader;

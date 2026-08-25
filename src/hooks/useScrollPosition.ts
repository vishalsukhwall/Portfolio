import { useState, useEffect, useRef } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollVelocity: number;
  scrollDirection: 'up' | 'down';
  scrollProgress: number;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollData, setScrollData] = useState<ScrollPosition>({
    scrollY: 0,
    scrollVelocity: 0,
    scrollDirection: 'down',
    scrollProgress: 0
  });

  const lastScrollY = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      
      frameRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const velocity = currentScrollY - lastScrollY.current;
        const direction = velocity > 0 ? 'down' : 'up';
        
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? currentScrollY / scrollHeight : 0;

        setScrollData({
          scrollY: currentScrollY,
          scrollVelocity: velocity,
          scrollDirection: direction,
          scrollProgress: progress
        });

        lastScrollY.current = currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return scrollData;
}

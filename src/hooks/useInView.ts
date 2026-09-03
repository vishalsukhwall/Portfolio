import { useState, useEffect, useRef, type RefCallback } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}): { ref: RefCallback<Element>; inView: boolean } {
  const [inView, setInView] = useState(false);
  const elementRef = useRef<Element | null>(null);
  
  const { threshold = 0, rootMargin = '0px', triggerOnce = false } = options;

  const setRef: RefCallback<Element> = (node) => {
    elementRef.current = node;
  };

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isIntersecting = entry.isIntersecting;
        
        setInView(isIntersecting);

        if (isIntersecting && triggerOnce) {
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref: setRef, inView };
}

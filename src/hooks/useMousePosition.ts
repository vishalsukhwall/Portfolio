import { useState, useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0
  });

  const frameRef = useRef<number>();

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        setPosition({
          x: ev.clientX,
          y: ev.clientY,
          normalizedX: (ev.clientX / window.innerWidth) * 2 - 1,
          normalizedY: -(ev.clientY / window.innerHeight) * 2 + 1
        });
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return position;
}

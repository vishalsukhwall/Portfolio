import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export default function Cursor() {
  const mouse   = useMousePosition();
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering,  setIsHovering]  = useState(false);
  const [isClicking,  setIsClicking]  = useState(false);
  const [isVisible,   setIsVisible]   = useState(false);

  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef  = useRef<number>(0);

  useEffect(() => {
    const isMobile = window.matchMedia('(hover: none)').matches;
    if (isMobile) return;
    setIsVisible(true);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      if (ringRef.current) {
        ringPos.current.x = lerp(ringPos.current.x, mouse.x, 0.11);
        ringPos.current.y = lerp(ringPos.current.y, mouse.y, 0.11);
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x - 4}px, ${mouse.y - 4}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);
    const onDown  = () => setIsClicking(true);
    const onUp    = () => setIsClicking(false);

    const attach = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attach();

    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [mouse.x, mouse.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ willChange: 'transform' }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width:   isHovering ? 0   : isClicking ? 5 : 8,
            height:  isHovering ? 0   : isClicking ? 5 : 8,
            opacity: isHovering ? 0   : 1,
            background: '#0284c7',
          }}
          transition={{ duration: 0.14, ease: 'easeOut' }}
          style={{ boxShadow: '0 0 10px rgba(2,132,199,0.7)' }}
        />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{ willChange: 'transform' }}
      >
        <motion.div
          className="rounded-full border-2"
          animate={{
            width:  isHovering ? 52 : isClicking ? 26 : 40,
            height: isHovering ? 52 : isClicking ? 26 : 40,
            borderColor: isHovering ? 'rgba(2,132,199,0.7)' : 'rgba(2,132,199,0.4)',
            backgroundColor: isHovering ? 'rgba(2,132,199,0.07)' : 'transparent',
            rotate: isHovering ? 45 : 0,
          }}
          transition={{ duration: 0.22, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ boxShadow: isHovering ? '0 0 18px rgba(2,132,199,0.2)' : 'none' }}
        />
      </div>
    </>
  );
}

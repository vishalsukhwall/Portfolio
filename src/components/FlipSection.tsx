import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface FlipSectionProps {
  children: React.ReactNode;
  /** Direction the section "unfolds" from. Default: 'bottom' (rotates in from below) */
  direction?: 'top' | 'bottom';
  /** Extra wrapper className */
  className?: string;
}


/**
 * FlipSection — wraps a page section in a 3D perspective
 * flip / fold reveal effect driven by scroll position.
 *
 * As the section enters the viewport from below, it pivots from
 * rotateX(-18deg) → rotateX(0deg) while fading in, creating a
 * cinematic "page turning" or "plate unfolding" effect.
 */
export default function FlipSection({
  children,
  direction = 'bottom',
  className = '',
}: FlipSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.25'],  // triggers as section enters
  });

  // Smooth spring for buttery motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const initialAngle = direction === 'bottom' ? -45 : 45;

  const rotateX = useTransform(smoothProgress, [0, 1], [initialAngle, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.6, 1], [0, 0.8, 1]);
  const y       = useTransform(smoothProgress, [0, 1], [80, 0]);
  const z       = useTransform(smoothProgress, [0, 1], [-250, 0]);
  const scale   = useTransform(smoothProgress, [0, 1], [0.85, 1]);

  return (
    <div
      ref={ref}
      className={`flip-section-wrapper ${className}`}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <motion.div
        className="flip-section-inner"
        style={{
          rotateX,
          opacity,
          y,
          z,
          scale,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

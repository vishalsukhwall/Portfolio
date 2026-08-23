import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';


// ─── Light-mode orbital ring geometry ────────────────────────────────────────
function PreloaderGeometry({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef  = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.6;
      groupRef.current.rotation.z = t * 0.2;
    }
    if (ringRef.current)  ringRef.current.rotation.x  = t * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.y = -t * 0.5;
  });

  const opacity = Math.min(1, progress * 1.6);

  return (
    <group ref={groupRef}>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.4, 0.025, 16, 120]} />
        <meshStandardMaterial
          color="#0284c7"
          emissive="#0284c7"
          emissiveIntensity={1.2}
          transparent
          opacity={opacity * 0.7}
        />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[0.9, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={1.5}
          transparent
          opacity={opacity * 0.85}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.28, 1]} />
        <meshStandardMaterial
          color="#00a8ff"
          emissive="#00a8ff"
          emissiveIntensity={2}
          wireframe
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

// ─── Preloader ────────────────────────────────────────────────────────────────
interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible,  setVisible]  = useState(true);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 9 + 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 650);
        }, 380);
      }
      setProgress(Math.min(current, 100));
    }, 55);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 50%, #e0f2fe 100%)',
          }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* 3D canvas */}
          <div className="absolute inset-0 opacity-70">
            <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[3, 3, 3]} intensity={1.5} color="#0284c7" />
              <pointLight position={[-3, -2, 2]} intensity={0.8} color="#38bdf8" />
              <PreloaderGeometry progress={progress / 100} />
            </Canvas>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-10">
            {/* VS logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(2,132,199,0.25) 0%, transparent 70%)',
                  transform: 'scale(2)',
                }}
              />
              <span
                className="relative text-8xl font-black tracking-tighter gradient-text-sky select-none"
                style={{ letterSpacing: '-0.05em' }}
              >
                VS
              </span>
            </motion.div>

            {/* Progress track */}
            <div className="w-60 flex flex-col items-center gap-3">
              <div
                className="w-full h-0.5 rounded-full overflow-hidden"
                style={{ background: 'rgba(2,132,199,0.12)' }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #0284c7, #38bdf8)',
                    boxShadow: '0 0 8px rgba(2,132,199,0.6)',
                  }}
                  transition={{ duration: 0.08, ease: 'linear' }}
                />
              </div>
              <span
                className="text-xs font-mono font-semibold"
                style={{ color: 'rgba(2,132,199,0.5)' }}
              >
                {Math.round(progress).toString().padStart(3, '0')} %
              </span>
            </div>

            <motion.p
              className="text-xs tracking-[0.3em] uppercase font-semibold"
              style={{ color: 'rgba(2,132,199,0.35)' }}
              animate={{ opacity: [0.35, 0.8, 0.35] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              Crafting Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

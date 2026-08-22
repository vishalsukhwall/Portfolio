import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Mail, Brain, Network } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personal } from '../data/portfolioData';
import { useMousePosition } from '../hooks/useMousePosition';

const EASE_SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

// ─── 3D Neural Network / Data Matrix Nodes (Sky Blue & Cyan AI Vibe) ──────────
function NeuralNetworkCore() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouse = useMousePosition();
  const count = 180;

  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const lines: number[] = [];

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 7;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (dist < 1.5) {
          lines.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          lines.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        }
      }
    }

    return { positions: pos, linePositions: new Float32Array(lines) };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.06 + mouse.normalizedX * 0.2;
      pointsRef.current.rotation.x = t * 0.03 - mouse.normalizedY * 0.2;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.06 + mouse.normalizedX * 0.2;
      linesRef.current.rotation.x = t * 0.03 - mouse.normalizedY * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      <group position={[2, 0, -1]}>
        {/* Neural Nodes */}
        <Points ref={pointsRef} positions={positions} stride={3}>
          <PointMaterial
            transparent
            color="#0284c7"
            size={0.07}
            sizeAttenuation
            depthWrite={false}
            opacity={0.8}
          />
        </Points>

        {/* Synapse Connections */}
        <lineSegments ref={linesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[linePositions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#38bdf8" transparent opacity={0.3} />
        </lineSegments>
      </group>
    </Float>
  );
}

// ─── Non-colliding Role Rotator ───────────────────────────────────────────────
function RoleRotator({ roles }: { roles: string[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <div className="relative inline-flex items-center min-h-[2rem] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[idx]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_SPRING }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 font-black block text-left"
        >
          {roles[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// ─── AI / ML Focused Balanced Hero Section ────────────────────────────────────
export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white text-slate-900 py-28 px-6 md:px-16 lg:px-24"
    >
      {/* Subtle Dot-Grid Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(2,132,199,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* 3D Neural Network Canvas */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={1.5} />
          <pointLight position={[5, 5, 5]} intensity={3} color="#0284c7" />
          <NeuralNetworkCore />
        </Canvas>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start text-left space-y-8 lg:pr-20">
        
        {/* AI / ML Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/95 border border-sky-300 text-sky-700 shadow-sm text-xs font-bold tracking-wider uppercase"
        >
          <Brain size={15} className="text-sky-600 animate-pulse" />
          <span>AI/ML Engineer & Full-Stack Developer</span>
        </motion.div>

        {/* Larger Bold Headline */}
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-slate-900 drop-shadow-xs"
        >
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600">
            {personal.name}
          </span>
        </motion.h1>

        {/* Larger Role Rotator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-2.5 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700"
        >
          <Network size={24} className="text-sky-600 flex-shrink-0" />
          <span>Building</span>
          <RoleRotator roles={['Predictive ML Pipelines', 'Full-Stack Web Architectures', 'Autonomous AI Agents', 'Scalable Software Systems']} />
        </motion.div>

        {/* Clear & Legible Bio Text */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal bg-white/60 backdrop-blur-xs p-2 -ml-2 rounded-lg"
        >
          {personal.about}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <button
            onClick={() => scrollTo('#projects')}
            data-cursor
            className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-700 hover:to-cyan-600 text-white font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowDown size={14} className="-rotate-90" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            data-cursor
            className="px-8 py-4 rounded-full backdrop-blur-md bg-white border border-slate-200 hover:border-sky-300 text-slate-800 font-bold text-xs uppercase tracking-widest hover:bg-sky-50 transition-all duration-300 cursor-pointer shadow-xs"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Scroll Down</span>
        <ArrowDown size={14} className="text-sky-600" />
      </motion.div>
    </section>
  );
}
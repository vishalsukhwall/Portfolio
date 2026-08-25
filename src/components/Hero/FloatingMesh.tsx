import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDeviceCapability } from '@hooks/useDeviceCapability';
import { usePreferredReducedMotion } from '@hooks/usePreferredReducedMotion';
import { useMousePosition } from '@hooks/useMousePosition';
import { useScrollPosition } from '@hooks/useScrollPosition';

const FloatingMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const [hovered, setHovered] = useState(false);
  
  const deviceCapability = useDeviceCapability();
  const prefersReducedMotion = usePreferredReducedMotion();
  const mousePosition = useMousePosition();
  const scrollPosition = useScrollPosition();
  
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef({ velocity: 0, progress: 0 });

  useEffect(() => {
    mouseRef.current = { x: mousePosition.normalizedX, y: mousePosition.normalizedY };
  }, [mousePosition]);

  useEffect(() => {
    scrollRef.current = { velocity: scrollPosition.scrollVelocity, progress: scrollPosition.scrollProgress };
  }, [scrollPosition]);

  const detail = deviceCapability === 'low' ? 1 : 3;
  
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, detail), [detail]);
  
  useEffect(() => {
    return () => {
      geometry.dispose();
      if (materialRef.current) {
        materialRef.current.dispose();
      }
    };
  }, [geometry]);

  const colorCyan = useMemo(() => new THREE.Color('#00d4ff'), []);
  const colorPink = useMemo(() => new THREE.Color('#ff006e'), []);

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;
    
    if (prefersReducedMotion) {
      meshRef.current.rotation.set(0, 0, 0);
      meshRef.current.position.set(0, 0, 0);
      meshRef.current.scale.setScalar(1);
      materialRef.current.emissiveIntensity = 0.2;
      return;
    }

    const time = state.clock.getElapsedTime();
    const mesh = meshRef.current;
    const material = materialRef.current;

    // Mouse Interaction
    const targetRotationX = mouseRef.current.y * 0.5;
    const targetRotationY = mouseRef.current.x * 0.5;
    mesh.rotation.x += (targetRotationX - mesh.rotation.x) * 0.1;
    mesh.rotation.y += (targetRotationY - mesh.rotation.y) * 0.1;

    // Hover effect
    const targetScale = hovered ? 1.15 : 1.0 + Math.sin(time * 1.5) * 0.03;
    mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    
    const targetEmissive = hovered ? 0.5 : 0.2 + Math.sin(time * 0.6) * 0.1;
    material.emissiveIntensity += (targetEmissive - material.emissiveIntensity) * 0.1;

    // Scroll Interaction
    mesh.rotation.z += scrollRef.current.velocity * 0.005;
    
    const lerpFactor = Math.min(Math.max(scrollRef.current.progress, 0), 1);
    material.color.lerpColors(colorCyan, colorPink, lerpFactor);
    material.emissive.lerpColors(colorCyan, colorPink, lerpFactor);

    // Idle Animation
    mesh.rotation.y += 0.003;
    mesh.position.y = Math.sin(time * 0.8) * 0.3;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <meshPhysicalMaterial
        ref={materialRef}
        color="#00d4ff"
        metalness={0.8}
        roughness={0.2}
        emissive="#00d4ff"
        emissiveIntensity={0.2}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        envMapIntensity={1.0}
      />
    </mesh>
  );
};

FloatingMesh.displayName = 'FloatingMesh';

export default React.memo(FloatingMesh);

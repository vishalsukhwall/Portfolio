import React, { Suspense, Component, type ErrorInfo, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Lights from '../3D/Lights';
import FloatingMesh from './FloatingMesh';
import OptimizationWrapper from '../3D/OptimizationWrapper';
import Environment from '../3D/Environment';
import { useDeviceCapability } from '@hooks/useDeviceCapability';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class CanvasErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Canvas Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-900/20 to-pink-900/20" />
      );
    }
    return this.props.children;
  }
}

const LoadingSpinner = () => (
  <Html center>
    <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
  </Html>
);

const HeroCanvas: React.FC = () => {
  const deviceCapability = useDeviceCapability();
  const enable3D = import.meta.env.VITE_ENABLE_3D !== 'false';

  if (!enable3D) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-cyan-900/20 to-pink-900/20" />
    );
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const dpr = isMobile || deviceCapability === 'low' 
    ? 1.5 
    : Math.min(window.devicePixelRatio || 1, 2);
  const fov = isMobile ? 85 : 75;

  return (
    <div className="w-full h-full absolute inset-0">
      <CanvasErrorBoundary>
        <Canvas
          dpr={[1, dpr]}
          gl={{
            antialias: true,
            alpha: true,
            stencil: false,
            depth: true,
            powerPreference: 'high-performance'
          }}
          shadows
          camera={{ position: [0, 0, 8], fov, near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <OptimizationWrapper>
              <Environment />
              <Lights deviceCapability={deviceCapability} />
              <FloatingMesh />
            </OptimizationWrapper>
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

HeroCanvas.displayName = 'HeroCanvas';

export default React.memo(HeroCanvas);

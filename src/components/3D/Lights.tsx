import React from 'react';
import { DeviceCapability } from '@/types';

interface LightsProps {
  deviceCapability: DeviceCapability;
}

const Lights: React.FC<LightsProps> = ({ deviceCapability }) => {
  const isLow = deviceCapability === 'low';
  const isMedium = deviceCapability === 'medium';
  
  const shadowMapSize = isLow || isMedium ? 1024 : 2048;

  return (
    <>
      <ambientLight intensity={0.4} color="#ffffff" />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.2}
        color="#ffffff"
        castShadow
        shadow-mapSize={[shadowMapSize, shadowMapSize]}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />
      
      <pointLight
        position={[-15, 10, 5]}
        intensity={0.6}
        color="#00d4ff"
        distance={50}
        decay={2}
      />

      {!isLow && (
        <pointLight
          position={[15, -10, -10]}
          intensity={0.4}
          color="#ff006e"
          distance={50}
          decay={2}
        />
      )}
    </>
  );
};

Lights.displayName = 'Lights';

export default React.memo(Lights);

import React from 'react';
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';

interface OptimizationWrapperProps {
  children: React.ReactNode;
}


const OptimizationWrapper: React.FC<OptimizationWrapperProps> = ({ children }) => {
  return (
    <>
      <AdaptiveDpr pixelated={false} />
      <AdaptiveEvents />
      {children}
    </>
  );
};

OptimizationWrapper.displayName = 'OptimizationWrapper';

export default React.memo(OptimizationWrapper);

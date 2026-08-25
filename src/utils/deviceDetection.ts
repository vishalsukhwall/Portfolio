import type { DeviceCapability } from '@/types';

export const detectDeviceCapability = (): DeviceCapability => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'medium';
  }

  try {
    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory || 4;
    
    const connection = (navigator as unknown as { connection?: { effectiveType?: string } }).connection;
    const isSlowConnection = connection?.effectiveType 
      ? ['slow-2g', '2g', '3g'].includes(connection.effectiveType)
      : false;

    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (cores >= 4 && memory >= 4 && !hasTouch && !isSlowConnection) {
      return 'high';
    }

    if (cores < 2 || memory < 2 || isSlowConnection) {
      return 'low';
    }

    return 'medium';
  } catch {
    return 'medium';
  }
};

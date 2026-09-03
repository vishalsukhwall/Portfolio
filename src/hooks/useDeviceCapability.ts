import { useMemo } from 'react';
import { detectDeviceCapability } from '@utils/deviceDetection';
import type { DeviceCapability } from '@/types';

export function useDeviceCapability(): DeviceCapability {
  const capability = useMemo(() => detectDeviceCapability(), []);
  return capability;
}

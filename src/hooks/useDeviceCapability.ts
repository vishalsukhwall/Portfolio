import { useMemo } from 'react';
import { detectDeviceCapability } from '@utils/deviceDetection';
import { DeviceCapability } from '@/types';

export function useDeviceCapability(): DeviceCapability {
  const capability = useMemo(() => detectDeviceCapability(), []);
  return capability;
}

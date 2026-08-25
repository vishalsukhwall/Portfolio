export type Theme = 'dark' | 'light';
export type DeviceCapability = 'high' | 'medium' | 'low';
export type AnimationState = 'idle' | 'loading' | 'complete';

export interface NavLink {
  label: string;
  href: string;
}

export type { Project } from './project';
export type { FormStatus, FormField, ContactFormData } from './contact';

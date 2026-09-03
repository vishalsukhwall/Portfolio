export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export const validateName = (value: string): ValidationResult => {
  if (!value || value.trim().length === 0) {
    return { valid: false, error: 'Name is required' };
  }
  if (value.length < 2 || value.length > 100) {
    return { valid: false, error: 'Name must be between 2 and 100 characters' };
  }
  return { valid: true };
};

export const validateEmail = (value: string): ValidationResult => {
  if (!value || value.trim().length === 0) {
    return { valid: false, error: 'Email is required' };
  }
  
  // RFC-compliant basic regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(value)) {
    return { valid: false, error: 'Invalid email format' };
  }
  
  return { valid: true };
};

export const validateSubject = (value: string): ValidationResult => {
  if (value && value.length > 100) {
    return { valid: false, error: 'Subject cannot exceed 100 characters' };
  }
  return { valid: true };
};

export const validateMessage = (value: string): ValidationResult => {
  if (!value || value.trim().length === 0) {
    return { valid: false, error: 'Message is required' };
  }
  if (value.length < 10 || value.length > 2000) {
    return { valid: false, error: 'Message must be between 10 and 2000 characters' };
  }
  return { valid: true };
};

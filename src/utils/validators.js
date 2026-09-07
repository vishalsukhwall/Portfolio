// Helper to validate contact form inputs
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isNotEmpty = (val) => val && val.trim().length > 0;

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface FormField {
  value: string;
  error?: string;
  touched: boolean;
}

export interface ContactFormData {
  name: FormField;
  email: FormField;
  subject: FormField;
  message: FormField;
}

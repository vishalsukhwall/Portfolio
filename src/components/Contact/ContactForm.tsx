import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormStatus } from './FormStatus';
import { validateName, validateEmail, validateSubject, validateMessage } from '@utils/validation';
import { submitContactForm } from '@utils/api';
import type { FormStatus as FormStatusType, ContactFormData, FormField } from '@/types/contact';
import { useToastStore } from '@stores/toastStore';

const initialField: FormField = { value: '', touched: false };

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: { ...initialField },
    email: { ...initialField },
    subject: { ...initialField },
    message: { ...initialField }
  });
  
  const [status, setStatus] = useState<FormStatusType>('idle');
  const addToast = useToastStore((state) => state.addToast);

  const validateField = (name: keyof ContactFormData, value: string) => {
    switch (name) {
      case 'name': return validateName(value);
      case 'email': return validateEmail(value);
      case 'subject': return validateSubject(value);
      case 'message': return validateMessage(value);
      default: return { valid: true };
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const fieldName = id as keyof ContactFormData;
    
    setFormData((prev: ContactFormData) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        value,
        error: undefined // Clear error on change
      }
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const fieldName = id as keyof ContactFormData;
    const validation = validateField(fieldName, value);
    
    setFormData((prev: ContactFormData) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        touched: true,
        error: validation.error
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const nameValidation = validateName(formData.name.value);
    const emailValidation = validateEmail(formData.email.value);
    const subjectValidation = validateSubject(formData.subject.value);
    const messageValidation = validateMessage(formData.message.value);

    const isFormValid = nameValidation.valid && emailValidation.valid && 
                        subjectValidation.valid && messageValidation.valid;

    if (!isFormValid) {
      setFormData((prev: ContactFormData) => ({
        name: { ...prev.name, touched: true, error: nameValidation.error },
        email: { ...prev.email, touched: true, error: emailValidation.error },
        subject: { ...prev.subject, touched: true, error: subjectValidation.error },
        message: { ...prev.message, touched: true, error: messageValidation.error }
      }));
      return;
    }

    setStatus('loading');

    try {
      const response = await submitContactForm({
        name: formData.name.value,
        email: formData.email.value,
        subject: formData.subject.value,
        message: formData.message.value
      });

      if (response.success) {
        setStatus('success');
        setFormData({
          name: { ...initialField },
          email: { ...initialField },
          subject: { ...initialField },
          message: { ...initialField }
        });
        addToast({ type: 'success', message: response.message });
      } else {
        setStatus('error');
        addToast({ type: 'error', message: response.message });
      }
    } catch {
      setStatus('error');
      addToast({ type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setTimeout(() => {
        setStatus((current: FormStatusType) => current !== 'loading' ? 'idle' : current);
      }, 3000);
    }
  };

  const isSubmitDisabled = status === 'loading' || status === 'success';

  return (
    <form 
      onSubmit={handleSubmit} 
      noValidate 
      className="w-full max-w-xl mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          id="name"
          label="Name"
          type="text"
          required
          placeholder="John Doe"
          value={formData.name.value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formData.name.error}
          touched={formData.name.touched}
        />
        <FormInput
          id="email"
          label="Email"
          type="email"
          required
          placeholder="john@example.com"
          value={formData.email.value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formData.email.error}
          touched={formData.email.touched}
        />
      </div>
      
      <FormInput
        id="subject"
        label="Subject"
        type="text"
        required
        placeholder="Project Inquiry"
        value={formData.subject.value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={formData.subject.error}
        touched={formData.subject.touched}
      />
      
      <FormTextarea
        id="message"
        label="Message"
        required
        placeholder="Hello, I'd like to talk about..."
        value={formData.message.value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={formData.message.error}
        touched={formData.message.touched}
      />
      
      <FormStatus status={status} />
      
      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="w-full py-3 px-6 rounded-lg bg-accent text-neutral-950 font-bold hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

ContactForm.displayName = 'ContactForm';

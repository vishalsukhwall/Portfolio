import React from 'react';
import { Section } from '@components/common/Section';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';
import { PORTFOLIO_NAME } from '@utils/constants';

export const Contact: React.FC = () => {
  return (
    <Section 
      id="contact" 
      title="Get In Touch" 
      subtitle="Have a project in mind? Let's talk."
      className="bg-neutral-950 text-white"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="w-full">
          <ContactForm />
        </div>
        
        <div className="space-y-8 lg:mt-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-neutral-400 leading-relaxed">
              Feel free to reach out for collaborations, freelance projects, or just a friendly hello. I'm always open to discussing new opportunities and exciting ideas.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <SocialLinks />
          </div>
        </div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {PORTFOLIO_NAME}. All rights reserved.</p>
      </footer>
    </Section>
  );
};

Contact.displayName = 'Contact';
export default Contact;
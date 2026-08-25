import React from 'react';
import { Section } from '@components/common/Section';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';
import { CONTACT_EMAIL, PORTFOLIO_NAME } from '@utils/constants';

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
            <p className="text-neutral-400 mb-6">
              Feel free to reach out for collaborations, freelance projects, or just a friendly hello. I'm always open to discussing new opportunities and exciting ideas.
            </p>
            <div className="flex items-center gap-4 text-neutral-300 hover:text-accent transition-colors w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg">{CONTACT_EMAIL}</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
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

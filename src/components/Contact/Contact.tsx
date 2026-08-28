import React from 'react';
import { Section } from '@components/common/Section';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';
import { PORTFOLIO_NAME } from '@utils/constants';

const MY_PHONE_NUMBER = '+91 8302816683'; 

export const Contact: React.FC = () => {
  return (
    <Section 
      id="contact" 
      title="Get In Touch" 
      subtitle="Have a project in mind? Let's talk."
      className="bg-neutral-950 text-white scroll-mt-28 py-10 md:py-14"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center max-w-6xl mx-auto">
        
        {/* Left: Contact Form */}
        <div className="w-full">
          <ContactForm />
        </div>
        
        {/* Right: Info & Links */}
        <div className="space-y-6 lg:pl-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-3 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>How can I help you?</span>
            </div>

            <h3 className="text-2xl font-bold mb-2 tracking-tight text-white">Contact Information</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Feel free to reach out for collaborations, freelance projects, or just a friendly hello. I'm always open to discussing new opportunities and exciting ideas.
            </p>

            {/* Direct Call & WhatsApp Quick Buttons */}
            <div className="flex flex-wrap gap-3">
              {/* Call Link */}
              <a
                href={`tel:${MY_PHONE_NUMBER}`}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs sm:text-sm font-medium hover:border-teal-400/50 hover:text-white transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{MY_PHONE_NUMBER}</span>
              </a>

              {/* WhatsApp Link */}
              <a
                href="https://wa.me/918302816683?text=Hi%20Vishal,%20I%20saw%20your%20portfolio!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs sm:text-sm font-medium hover:border-emerald-500/50 hover:text-white transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
          
          
          <div className="pt-2 border-t border-neutral-900">
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Connect With Me</h4>
            <SocialLinks />
          </div>
        </div>
      </div>

      
      {/* Compact Footer */}
      <footer className="mt-12 pt-6 border-t border-neutral-900 text-center text-neutral-500 text-xs">
        <p>&copy; {new Date().getFullYear()} {PORTFOLIO_NAME}. All rights reserved.</p>
      </footer>
    </Section>
  );
};

Contact.displayName = 'Contact';
export default Contact;
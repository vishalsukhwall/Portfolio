import React from 'react';
import { Section } from '@components/common/Section';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';
import { PORTFOLIO_NAME } from '@utils/constants';

// Yahan apna actual 10-digit number replace karein:
const MY_PHONE_NUMBER = '+91 8302816683'; 
const MY_WHATSAPP_NUMBER = '91 8302816683'; // bina '+' ke country code ke sath

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>How can I help you?</span>
            </div>

            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Feel free to reach out for collaborations, freelance projects, or just a friendly hello. I'm always open to discussing new opportunities and exciting ideas.
            </p>

            {/* Direct Call & WhatsApp Quick Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {/* Call Link */}
              <a
                href={`tel:${MY_PHONE_NUMBER}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{MY_PHONE_NUMBER}</span>
              </a>

              {/* WhatsApp Link */}
              {/* Direct WhatsApp Link */}
                <a
                  href="https://wa.me/918302816683?text=Hi%20Vishal,%20I%20saw%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-sm font-medium hover:border-emerald-500/50 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all w-fit"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
            </div>
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
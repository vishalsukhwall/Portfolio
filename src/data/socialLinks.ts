import { SOCIAL_URLS, CONTACT_EMAIL } from '@utils/constants';

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'email';
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    url: SOCIAL_URLS.github,
    icon: 'github',
    label: 'Visit my GitHub profile'
  },
  {
    platform: 'linkedin',
    url: SOCIAL_URLS.linkedin,
    icon: 'linkedin',
    label: 'Connect with me on LinkedIn'
  },
  {
    platform: 'instagram',
    url: SOCIAL_URLS.instagram,
    icon: 'instagram',
    label: 'Follow me on Instagram'
  },
  {
    platform: 'email',
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=Portfolio%20Inquiry`,
    icon: 'email',
    label: 'Send me an email'
  }
];
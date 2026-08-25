import { SOCIAL_URLS, CONTACT_EMAIL } from '@utils/constants';

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email';
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: SOCIAL_URLS.github,
    icon: 'github',
    label: 'Visit my GitHub profile'
  },
  {
    platform: 'LinkedIn',
    url: SOCIAL_URLS.linkedin,
    icon: 'linkedin',
    label: 'Connect with me on LinkedIn'
  },
  {
    platform: 'Twitter',
    url: SOCIAL_URLS.twitter,
    icon: 'twitter',
    label: 'Follow me on Twitter'
  },
  {
    platform: 'Email',
    url: `mailto:${CONTACT_EMAIL}`,
    icon: 'email',
    label: 'Send me an email'
  }
];

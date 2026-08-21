import LinkedIn from '@/components/icons/LinkedIn';
import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';

import { FooterColumn, FooterSocialLink } from '@/types/layout/footer';

export const footerColumns: FooterColumn[] = [
  {
    id: 'product',
    title: 'Product',
    links: [
      {
        label: 'Dashboard',
        href: '/dashboard',
      },
      {
        label: 'Compare',
        href: '/compare',
      },
      {
        label: 'Saved',
        href: '/saved',
      },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Documentation',
        href: '/documentation',
      },
      {
        label: 'FAQ',
        href: '/faq',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Legal',
    links: [
      {
        label: 'Privacy Policy',
        href: '/privacy',
      },
      {
        label: 'Terms',
        href: '/terms',
      },
      {
        label: 'Cookies',
        href: '/privacy#cookies',
      },
    ],
  },
];

export const footerSocialLinks: FooterSocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/esteemayo',
    icon: GitHubLogoIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'http://linkedin.com/in/emmanuel-adebayo-b0508aa3',
    icon: LinkedIn,
  },
];

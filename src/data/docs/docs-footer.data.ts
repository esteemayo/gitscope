import { DocsFooterSection } from '@/types/docs/docsFooter';

export const docsLink: DocsFooterSection[] = [
  {
    title: 'Documentation',
    links: [
      {
        href: '/documentation',
        label: 'Getting Started',
      },
      {
        href: '/documentation/features/guthub-analytics',
        label: 'Features',
      },
      {
        href: '/documentation/api',
        label: 'API',
      },
    ],
  },
  {
    title: 'Product',
    links: [
      {
        href: '/',
        label: 'Dashboard',
      },
      {
        href: '/about',
        label: 'About',
      },
      {
        href: '/privacy',
        label: 'Privacy',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        href: '/documentation/resources/faq',
        label: 'FAQ',
      },
      {
        href: '/documentation/resources/changelog',
        label: 'Changelog',
      },
      {
        href: '/documentation/resources/roadmap',
        label: 'Roadmap',
      },
    ],
  },
];

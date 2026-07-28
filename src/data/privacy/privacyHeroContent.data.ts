import { PrivacyHeroProps } from '@/types/privacy/privacy.hero.type';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';
import { privacyHeroStats } from './privacyHeroStats.data';

export const privacyHeroContent: PrivacyHeroProps = {
  badge: 'Privacy First',
  title: 'Privacy Policy',
  subtitle:
    'Your GitHub data belongs to you. GitScope only accesses the information required to generate accurate analytics while keeping your information secure.',
  actions: [
    {
      id: 'summary',
      label: 'Read summary',
      href: '#privacy-summary',
      variant: 'primary',
      icon: ArrowRight,
    },
    {
      id: 'policy',
      label: 'View full policy',
      href: '#full-policy',
      variant: 'secondary',
      icon: FileText,
    },
  ],
  stats: privacyHeroStats,
  card: {
    title: 'Your Privacy Matters',
    description:
      'GitScope only requests the minimum GitHub permissions required to generate analytics.',
    icon: ShieldCheck,
    items: [
      {
        id: 'updated',
        label: 'Last updated',
        value: 'July 27, 2026',
      },
      {
        id: 'version',
        label: 'Policy version',
        value: 'v1.0',
      },
      {
        id: 'access',
        label: 'GitHub access',
        value: 'Read only',
        status: 'info',
      },
      {
        id: 'sales',
        label: 'Data sales',
        value: 'Never',
        status: 'success',
      },
    ],
  },
  illustration: ShieldCheck,
};

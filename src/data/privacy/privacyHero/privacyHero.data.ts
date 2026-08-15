import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';
import {
  PrivacyHeroAction,
  PrivacyHeroCard,
  PrivacyHeroStat,
} from '@/types/privacy/privacyHero';

export const privacyHeroAction: PrivacyHeroAction[] = [
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
];

export const privacyHeroStats: PrivacyHeroStat[] = [
  {
    id: 1,
    value: '0',
    label: 'Data Sold',
  },
  {
    id: 2,
    value: '100%',
    label: 'GitHub OAuth',
  },
  {
    id: 3,
    value: '256-bit',
    label: 'Encryption',
  },
];

export const privacyHeroCard: PrivacyHeroCard = {
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
};

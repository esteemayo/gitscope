import {
  Activity,
  ArrowRight,
  BookOpen,
  LockKeyhole,
  ShieldCheck,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import {
  TermsHeroAction,
  TermsHeroBadge,
  TermsHeroPreviewData,
  TermsHeroPreviewMetric,
  TermsHeroPreviewStatus,
} from '@/types/terms/termsHero';

export const termsHeroActions: TermsHeroAction[] = [
  {
    label: 'Read the Terms',
    href: '#acceptance-of-terms',
    variant: 'primary',
    icon: ArrowRight,
  },
  {
    label: 'Privacy Policy',
    href: '/privacy',
    variant: 'secondary',
    icon: BookOpen,
  },
];

export const termsHeroTrustBadges: TermsHeroBadge[] = [
  {
    label: 'OAuth protected',
    icon: LockKeyhole,
  },
  {
    label: 'Privacy focused',
    icon: ShieldCheck,
  },
  {
    label: 'GitHub powered',
    icon: GitHubLogoIcon,
  },
];

export const termsHeroPreviewStatus: TermsHeroPreviewStatus = {
  label: 'Connection',
  value: 'Secure',
  icon: ShieldCheck,
  status: 'secure',
};

export const termsHeroPreviewMetrics: TermsHeroPreviewMetric[] = [
  {
    label: 'Authentication',
    value: 'OAuth',
    description: 'GitHub authorization',
    icon: GitHubLogoIcon,
  },
  {
    label: 'Data Access',
    value: 'Limited',
    description: 'Required permissions only',
    icon: LockKeyhole,
  },
  {
    label: 'Analytics',
    value: 'Active',
    description: 'Repository insights',
    icon: Activity,
  },
];

export const termsHeroPreviewData: TermsHeroPreviewData = {
  title: 'GitScope Security',
  subtitle: 'Your analytics session is protected.',
  status: termsHeroPreviewStatus,
  metrics: termsHeroPreviewMetrics,
  permissions: [
    'Authenticated GitHub account',
    'Repository analytics',
    'Profile information',
  ],
};

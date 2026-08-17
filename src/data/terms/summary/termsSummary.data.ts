import {
  CheckCircle2,
  LockKeyhole,
  Scale,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';

import { TermsSummaryCardData } from '@/types/terms/summary';

export const termsSummaryCards: TermsSummaryCardData[] = [
  {
    id: 'account',
    title: 'Your account',
    description:
      'You are responsible for maintaining access to your GitHub account and keeping your GitScope session secure.',
    icon: UserCheck,
    accentColor: '#6EE7B7',
  },
  {
    id: 'github',
    title: 'GitHub connection',
    description:
      'GitScope uses GitHub OAuth to authenticate you and access the information required to provide analytics.',
    icon: GitHubLogoIcon,
    accentColor: '#A78BFA',
  },
  {
    id: 'data',
    title: 'Your data',
    description:
      'GitScope follows its Privacy Policy when collecting, processing, storing, and deleting application data.',
    icon: ShieldCheck,
    accentColor: '#60A5FA',
  },
  {
    id: 'responsibility',
    title: 'Use responsibly',
    description:
      'You agree not to abuse the platform, bypass security controls, interfere with the service, or misuse GitHub APIs.',
    icon: Scale,
    accentColor: '#FBBF24',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description:
      'GitScope analytics are provided for informational purposes and depend on data supplied by GitHub and its APIs.',
    icon: CheckCircle2,
    accentColor: '#34D399',
  },
  {
    id: 'security',
    title: 'Security',
    description:
      'GitScope uses reasonable technical and organizational measures to protect accounts and application data.',
    icon: LockKeyhole,
    accentColor: '#F472B6',
  },
];

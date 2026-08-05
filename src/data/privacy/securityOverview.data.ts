import { LockKeyhole, ShieldCheck } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { SecurityOverviewItem } from '@/types/privacy/dataStorageSecurity';

export const securityOverview: SecurityOverviewItem[] = [
  {
    id: 'oauth',
    title: 'GitHub OAuth',
    description:
      'Authentication is handled securely through GitHub. GitScope never receives or stores your GitHub password.',
    icon: GitHubLogoIcon,
    accentColor: '#4F46E5',
  },
  {
    id: 'encryption',
    title: 'Encrypted Communication',
    description:
      'Every request between your browser, GitScope, and GitHub is transmitted using HTTPS encryption.',
    icon: LockKeyhole,
    accentColor: '#0EA5E9',
  },
  {
    id: 'privacy',
    title: 'Privacy First',
    description:
      'Authentication is optional for public analytics. Additional permissions are only requested when you choose to unlock personalized features.',
    icon: ShieldCheck,
    accentColor: '#22C55E',
  },
];

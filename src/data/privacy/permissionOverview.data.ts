import { Eye, Lock, ShieldCheck } from 'lucide-react';

import { PermissionOverviewItem } from '@/types/privacy';
import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';

export const permissionOverview: PermissionOverviewItem[] = [
  {
    id: 'oauth',
    title: 'Secure GitHub OAuth',
    description:
      "Authentication is handled through GitHub's secure OAuth flow.",
    icon: GitHubLogoIcon,
    accentColor: '#4F46E5',
  },
  {
    id: 'readonly',
    title: 'Read-only Access',
    description:
      'GitScope only reads information required to generate analytics.',
    icon: Eye,
    accentColor: '#0EA5E9',
  },
  {
    id: 'encrypted',
    title: 'Encrypted Communication',
    description:
      'All communication with GitHub is transmitted over encrypted connections.',
    icon: Lock,
    accentColor: '#F59E0B',
  },
  {
    id: 'privacy',
    title: 'Privacy First',
    description:
      'Authentication remains optional unless you choose to use personalized features.',
    icon: ShieldCheck,
    accentColor: '#22C55E',
  },
];

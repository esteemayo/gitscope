import { Database, Eye, Lock, Shield, Trash2 } from 'lucide-react';

import { PrivacySummaryItem } from '@/types/privacy';
import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';

export const privacySumaryItems: PrivacySummaryItem[] = [
  {
    id: 'sell',
    title: 'We Never Sell Data',
    description:
      'Your GitHub information is never sold or shared for advertising.',
    icon: Shield,
    accentColor: '#22C55E',
  },
  {
    id: 'github',
    title: 'GitHub OAuth',
    description: 'Authentication is handled securely using GitHub OAuth.',
    icon: GitHubLogoIcon,
    accentColor: '#6366F1',
  },
  {
    id: 'storage',
    title: 'Security Storage',
    description: 'Sensitive information is encrypted and protected.',
    icon: Database,
    accentColor: '#0EA5E9',
  },
  {
    id: 'visibility',
    title: 'Read-only Access',
    description: 'GitScope only reads the information required for analytics.',
    icon: Eye,
    accentColor: '#F59E0B',
  },
  {
    id: 'delete',
    title: 'Delete Anytime',
    description:
      'Disconnect GitHub and remove your stored information whenever you wants.',
    icon: Trash2,
    accentColor: '#EF4444',
  },
  {
    id: 'security',
    title: 'Protected Sessions',
    description: 'Your session is secured using encrypted authentication.',
    icon: Lock,
    accentColor: '#14B8A6',
  },
];

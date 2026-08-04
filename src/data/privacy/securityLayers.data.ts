import { Database, LockKeyhole, Server, ShieldCheck } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { SecurityLayerItem } from '@/types/privacy/dataStorageSecurity';

export const securityLayers: SecurityLayerItem[] = [
  {
    id: 'oauth',
    title: 'GitHub OAuth',
    description:
      'GitHub securely verifies your identity without exposing your password.',
    icon: GitHubLogoIcon,
    accentColor: '#4F46E5',
  },
  {
    id: 'https',
    title: 'HTTPS Encryption',
    description:
      'Encrypted communication protects information exchanged between your browser and our services.',
    icon: LockKeyhole,
    accentColor: '#0EA5E9',
  },
  {
    id: 'readonly',
    title: 'Read-only Access',
    description:
      'GitScope analyzes repository information without requesting modification permissions.',
    icon: ShieldCheck,
    accentColor: '#22C55E',
  },
  {
    id: 'storage',
    title: 'Protected Local Storage',
    description:
      'Only essential browser data such as preferences and cached analytics is stored locally.',
    icon: Database,
    accentColor: '#F59E0B',
  },
  {
    id: 'infrastructure',
    title: 'Secure Infrastructure',
    description:
      'Modern hosting and monitoring practices help keep GitScope reliable and resilient.',
    icon: Server,
    accentColor: '#EC4899',
  },
];

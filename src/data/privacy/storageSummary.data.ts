import {
  Ban,
  Database,
  EyeOff,
  HardDrive,
  KeyRound,
  ShieldCheck,
  Timer,
} from 'lucide-react';
import { StorageSummary } from '@/types/privacy/cookiesLocalStorage';

export const storageSummary: StorageSummary = {
  badge: 'Browser Storage',
  title: 'Browser Storage Summary.',
  description:
    'GitScope uses browser storage only when it improves your experience or supports secure authentication. We avoid unnecessary tracking technologies.',
  commitmentsTitle: 'Privacy Commitments',
  technologies: [
    {
      id: 'local-storage',
      title: 'Local Storage',
      description:
        'Stores preferences and non-sensitive information directly in your browser.',
      icon: HardDrive,
      accentColor: '#4F46E5',
    },
    {
      id: 'session-storage',
      title: 'Session Storage',
      description:
        'Temporary information available only while your browser tab is open.',
      icon: Timer,
      accentColor: '#0EA5E9',
    },
    {
      id: 'cookies',
      title: 'Secure Cookies',
      description:
        'Maintain authenticated GitHub sessions after you choose to sign in.',
      icon: KeyRound,
      accentColor: '#22C55E',
    },
    {
      id: 'cache',
      title: 'Browser Cache',
      description:
        'Allows previously loaded resources to be reused for better performance.',
      icon: Database,
      accentColor: '#F59E0B',
    },
  ],
  commitments: [
    {
      id: 'ads',
      title: 'No advertising cookies',
      icon: Ban,
      accentColor: '#EF4444',
    },
    {
      id: 'tracking',
      title: 'No third-party tracking',
      icon: EyeOff,
      accentColor: '#F97316',
    },
    {
      id: 'minimal',
      title: 'Minimal browser storage',
      icon: ShieldCheck,
      accentColor: '#22C55E',
    },
  ],
};

import { Eraser, History, LogOut, ShieldCheck } from 'lucide-react';
import { StorageNoticeData } from '@/types/privacy/cookiesLocalStorage';

export const storageNotice: StorageNoticeData = {
  badge: 'Your Browser, Your Choice',
  title: "You're Always in Control of Browser Storage.",
  description:
    'GitScope stores only the browser information needed to improve your experience. You can remove stored preferences or end authenticated sessions whenever you choose.',
  icon: ShieldCheck,
  accentColor: '#22C55E',
  controlOptions: [
    {
      id: 'clear-storage',
      title: 'Clear Browser Storage',
      description: 'Remove locally stored preferences and settings through your browser at any time.',
      icon: Eraser,
      accentColor: '#4F46E5',
    },
    {
      id: 'recent-searches',
      title: 'Manage Recent Searches',
      description: 'Delete previously searched GitHub usernames whenever you no longer need them.',
      icon: History,
      accentColor: '#0EA5E9',
    },
    {
      id: 'logout',
      title: 'Sign Out Securely',
      description: 'End your authenticated GitHub session without affecting your GitHub account.',
      icon: LogOut,
      accentColor: '#F59E0B',
    },
    {
      id: 'public',
      title: 'Continue Without Signing In',
      description: 'Public repository analytics remain available even after ending your authenticated session.',
      icon: ShieldCheck,
      accentColor: '#22C55E',
    },
  ],
};

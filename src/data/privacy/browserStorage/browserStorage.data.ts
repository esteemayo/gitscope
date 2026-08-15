import {
  Ban,
  Clock3,
  Database,
  Eraser,
  EyeOff,
  HardDrive,
  History,
  KeyRound,
  LayoutGrid,
  LogOut,
  MoonStar,
  ShieldCheck,
  Timer,
} from 'lucide-react';
import {
  BrowserStorageItem,
  StorageNoticeData,
  StorageSummary,
} from '@/types/privacy/cookiesLocalStorage';

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
      status: {
        label: 'Always Available',
        accentColor: '#22C55E',
      },
    },
    {
      id: 'session-storage',
      title: 'Session Storage',
      description:
        'Temporary information available only while your browser tab is open.',
      icon: Timer,
      accentColor: '#0EA5E9',
      status: {
        label: 'Temporary',
        accentColor: '#F59E0B',
      },
    },
    {
      id: 'cookies',
      title: 'Secure Cookies',
      description:
        'Maintain authenticated GitHub sessions after you choose to sign in.',
      icon: KeyRound,
      accentColor: '#22C55E',
      status: {
        label: 'Authenticated Users',
        accentColor: '#4F46E5',
      },
    },
    {
      id: 'cache',
      title: 'Browser Cache',
      description:
        'Allows previously loaded resources to be reused for better performance.',
      icon: Database,
      accentColor: '#F59E0B',
      status: {
        label: 'Browser Managed',
        accentColor: '#0EA5E9',
      },
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

export const browserStorageItems: BrowserStorageItem[] = [
  {
    id: 'theme',
    name: 'Theme Preference',
    storageType: {
      label: 'Local Storage',
      accentColor: '#4F46E5',
    },
    purpose: 'Remember your preferred light or dark theme.',
    persistence: 'Until you clear browser storage.',
    icon: MoonStar,
    accentColor: '#8B5CF6',
  },
  {
    id: 'recent-searches',
    name: 'Recent Searches',
    storageType: {
      label: 'Local Storage',
      accentColor: '#4F46E5',
    },
    purpose: 'Display previously searched GitHub usernames for quicker access.',
    persistence: 'Until you remove them or clear browser storage.',
    icon: History,
    accentColor: '#4F46E5',
  },
  {
    id: 'dashboard-state',
    name: 'Dashboard Preferences',
    storageType: {
      label: 'Local Storage',
      accentColor: '#4F46E5',
    },
    purpose:
      'Remember UI preferences such as layout, sorting, filters, and display options.',
    persistence: 'Until browser storage is cleared.',
    icon: LayoutGrid,
    accentColor: '#0EA5E9',
  },
  {
    id: 'session',
    name: 'Authenticated Session',
    storageType: {
      label: 'Cookie',
      accentColor: '#22C55E',
    },
    purpose:
      'Maintain your secure GitHub sign-in while using authenticated features.',
    persistence:
      'Expires automatically according to the session configuration.',
    icon: ShieldCheck,
    accentColor: '#22C55E',
  },
  {
    id: 'temporary-cache',
    name: 'Temporary Analytics Cache',
    storageType: {
      label: 'Session Storage',
      accentColor: '#F59E0B',
    },
    purpose:
      'Improve responsiveness by keeping temporary analytics data during your current session.',
    persistence: 'Removed automatically when the browsing session ends.',
    icon: Clock3,
    accentColor: '#F59E0B',
  },
];

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
      description:
        'Remove locally stored preferences and settings through your browser at any time.',
      icon: Eraser,
      accentColor: '#4F46E5',
    },
    {
      id: 'recent-searches',
      title: 'Manage Recent Searches',
      description:
        'Delete previously searched GitHub usernames whenever you no longer need them.',
      icon: History,
      accentColor: '#0EA5E9',
    },
    {
      id: 'logout',
      title: 'Sign Out Securely',
      description:
        'End your authenticated GitHub session without affecting your GitHub account.',
      icon: LogOut,
      accentColor: '#F59E0B',
    },
    {
      id: 'public',
      title: 'Continue Without Signing In',
      description:
        'Public repository analytics remain available even after ending your authenticated session.',
      icon: ShieldCheck,
      accentColor: '#22C55E',
    },
  ],
};

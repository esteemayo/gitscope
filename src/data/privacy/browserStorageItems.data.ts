import {
  Clock3,
  History,
  LayoutGrid,
  MoonStar,
  ShieldCheck,
} from 'lucide-react';
import { BrowserStorageItem } from '@/types/privacy/cookiesLocalStorage';

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

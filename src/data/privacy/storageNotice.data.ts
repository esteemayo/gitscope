import { ShieldCheck } from 'lucide-react';
import { StorageNotice } from '@/types/privacy/cookiesLocalStorage';

export const storageNotice: StorageNotice = {
  badge: 'Your Browser, Your Choice',
  title: "You're Always in Control of Browser Storage.",
  description:
    'Most browser-stored information exists to improve your experience. You can clear local storage, session storage, or cookies at any time through your browser settings. Doing so will not modify your GitHub repository or public GitHub data.',
  icon: ShieldCheck,
  accentColor: '#22C55E',
};

import { LucideIcon } from 'lucide-react';

export interface PrivacyContactCardData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  action?: {
    label: string;
    href: string;
  };
}

export interface PrivacyContactNoticeData {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}

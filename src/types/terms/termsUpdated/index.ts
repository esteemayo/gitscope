import { LucideIcon } from 'lucide-react';

export interface TermsUpdatedContent {
  badge: string;
  title: string;
  description: string;
  changeLogLabel: string;
  changeLogHref: string;
}

export interface TermsUpdatedItemData {
  label: string;
  value: string;
  icon: LucideIcon | React.ComponentType;
}

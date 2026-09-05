import { LucideIcon } from 'lucide-react';

export interface TermsUpdatedContent {
  badge: string;
  title: string;
  description: string;
  accentColor?: string;
}

export interface TermsUpdatedItemData {
  label: string;
  value: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

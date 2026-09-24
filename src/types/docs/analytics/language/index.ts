import type { LucideIcon } from 'lucide-react';

export interface LanguageCardType {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
}

export interface LanguageItemType {
  id: string;
  label: string;
  description: string;
  accentColor: string;
}

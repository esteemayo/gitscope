import type { LucideIcon } from 'lucide-react';

export interface ContributionCardType {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
}

export interface ContributionItemType {
  id: string;
  label: string;
  description: string;
  accentColor: string;
}

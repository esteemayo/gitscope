import { LucideIcon } from 'lucide-react';

export interface TermsContentsContentData {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
}

export interface TermsContentsItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
}

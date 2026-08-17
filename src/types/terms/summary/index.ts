import { LucideIcon } from 'lucide-react';

export interface TermsSummaryContent {
  badge: string;
  title: string;
  description: string;
}

export interface TermsSummaryCardData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

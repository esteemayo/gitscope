import { LucideIcon } from 'lucide-react';

export interface PrivacySummaryItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  href?: string;
}

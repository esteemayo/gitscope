import { type LucideIcon } from 'lucide-react';

export interface SavedInsightsStatCardProps {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

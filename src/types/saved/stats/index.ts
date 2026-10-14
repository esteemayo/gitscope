import { type LucideIcon } from 'lucide-react';

export interface SavedStatItem {
  label: string;
  value: number;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

import type { LucideIcon } from 'lucide-react';

export interface SavedMetricProps {
  value: number;
  label: string;
  icon?: LucideIcon | React.ComponentType;
}

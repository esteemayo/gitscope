import { type LucideIcon } from 'lucide-react';

export interface HealthEmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon | React.ComponentType;
  accentColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

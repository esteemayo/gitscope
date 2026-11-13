import { type LucideIcon } from 'lucide-react';

export interface SummaryEmptyStateProps {
  label: string;
  icon?: LucideIcon | React.ComponentType;
  className?: string;
  style?: React.CSSProperties;
}

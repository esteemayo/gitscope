import { type LucideIcon } from 'lucide-react';

export interface IntelligenceEmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon | React.ComponentType;
  className?: string;
  style?: React.CSSProperties;
}

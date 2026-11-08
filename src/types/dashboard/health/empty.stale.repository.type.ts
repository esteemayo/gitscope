import { type LucideIcon } from 'lucide-react';

export interface EmptyStaleRepositoryProps {
  title: string;
  description: string;
  icon?: LucideIcon | React.ComponentType;
  className?: string;
  style?: React.CSSProperties;
}

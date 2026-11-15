import { type LucideIcon } from 'lucide-react';

export interface RepositoryEmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  btnLabel: string;
  onReset(): void;
  className?: string;
  style?: React.CSSProperties;
}

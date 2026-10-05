import type { LucideIcon } from 'lucide-react';

export interface SavedStatProps {
  label: string;
  value: number;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  className?: string;
  style?: React.CSSProperties;
}

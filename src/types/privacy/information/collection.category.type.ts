import { LucideIcon } from 'lucide-react';

export interface CollectionCategoryProps {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  items: string[];
  optional?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

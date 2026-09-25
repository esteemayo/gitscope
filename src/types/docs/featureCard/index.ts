import type { LucideIcon } from 'lucide-react';

export interface DocsFeatureCardType {
  icon?: LucideIcon | React.ComponentType;
  title: string;
  description: string;
  items?: string[];
  accentColor: string;
}

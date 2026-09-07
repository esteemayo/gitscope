import type { LucideIcon } from 'lucide-react';

export interface HeroCardItem {
  id: string;
  icon: LucideIcon | React.ComponentType;
  title: string;
  value: string;
  trend: string;
  accentColor: string;
}

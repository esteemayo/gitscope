import type { LucideIcon } from 'lucide-react';

export interface SecurityContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  accentColor?: string;
}

export interface SecurityFeature {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  highlights: string[];
}

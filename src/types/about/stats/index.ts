import type { LucideIcon } from 'lucide-react';

export interface AboutStatContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  accentColor?: string;
}

export interface AboutStat {
  id: string;
  icon: LucideIcon | React.ComponentType;
  value: string;
  label: string;
  trend: string;
  trendLabel: string;
  accentColor: string;
}

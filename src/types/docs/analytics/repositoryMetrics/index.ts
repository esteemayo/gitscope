import type { LucideIcon } from 'lucide-react';

export interface MetricCardType {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
}

export interface MetricItemType {
  label: string;
  description: string;
  accentColor: string;
}

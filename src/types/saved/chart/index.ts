import { type LucideIcon } from 'lucide-react';

export type Metric = 'repositories' | 'followers' | 'stars';

export interface MetricItem {
  label: string;
  value: Metric;
  icon: LucideIcon | React.ComponentType;
  description: string;
}

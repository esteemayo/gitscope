import { LucideIcon } from 'lucide-react';

export interface UsageStepItem {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  features: string[];
  documentation?: {
    label: string;
    href: string;
  };
}

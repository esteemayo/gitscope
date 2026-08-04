import { LucideIcon } from 'lucide-react';

export interface SecurityOverviewItemProps {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

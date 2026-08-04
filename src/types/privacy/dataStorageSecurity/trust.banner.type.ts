import { LucideIcon } from 'lucide-react';

export interface TrustBannerProps {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

import type { LucideIcon } from 'lucide-react';

export interface PrivacyDataContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

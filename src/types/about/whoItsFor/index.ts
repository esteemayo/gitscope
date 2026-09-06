import type { LucideIcon } from 'lucide-react';

export interface AudienceContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  accentColor?: string;
}

export interface Audience {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  benefits: string[];
  useCase: string;
  accentColor: string;
  previewIcon: LucideIcon | React.ComponentType;
  previewLabel: string;
}

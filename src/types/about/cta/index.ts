import type { LucideIcon } from 'lucide-react';

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface CTAContent {
  badge: string;
  title: string;
  description: string;
  primaryAction: CTAButton;
  secondaryAction: CTAButton;
  headerIcon?: LucideIcon | React.ComponentType;
  accentColor?: string;
}

export interface CTAHighlight {
  id: string;
  label: string;
  icon: LucideIcon | React.ComponentType;
}

export interface CTAFloatingMetric {
  id: string;
  label: string;
  icon: LucideIcon | React.ComponentType;
}

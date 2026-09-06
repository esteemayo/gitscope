import type { LucideIcon } from 'lucide-react';

export interface HeroCardItem {
  id: string;
  icon: LucideIcon | React.ComponentType;
  title: string;
  value: string;
  trend: string;
  accentColor: string;
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface FloatingMetric {
  id: string;
  label: string;
  icon: LucideIcon | React.ComponentType;
}

export interface Highlight {
  id: string;
  label: string;
  icon: LucideIcon | React.ComponentType;
}

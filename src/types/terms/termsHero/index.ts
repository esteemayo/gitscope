import { LucideIcon } from 'lucide-react';

export interface TermsHeroContent {
  eyebrow: string;
  title: string;
  description: string;
}

export type HeroActionVariant = 'primary' | 'secondary';

export interface TermsHeroAction {
  label: string;
  href: string;
  variant: HeroActionVariant;
  icon?: LucideIcon | React.ComponentType;
}

export interface TermsHeroBadge {
  label: string;
  icon: LucideIcon | React.ComponentType;
}

export interface TermsHeroPreviewMetric {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
}

export interface TermsHeroPreviewStatus {
  label: string;
  value: string;
  icon: LucideIcon | React.ComponentType;
  status: 'secure' | 'connected' | 'protected';
}

export interface TermsHeroPreviewData {
  title: string;
  subtitle: string;
  status: TermsHeroPreviewStatus;
  metrics: TermsHeroPreviewMetric[];
  permissions: string[];
}

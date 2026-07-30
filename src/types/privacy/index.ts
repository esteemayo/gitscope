import { LucideIcon } from 'lucide-react';

export interface PrivacyHeroStat {
  id: number;
  value: string;
  label: string;
}

export interface PrivacyHeroAction {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  variant: 'primary' | 'secondary';
}

export interface PrivacyHeroMetaItem {
  id: string;
  label: string;
  value: string;
  status?: 'success' | 'info' | 'warning';
}

export interface PrivacyHeroCard {
  title: string;
  description: string;
  icon: LucideIcon;
  items: PrivacyHeroMetaItem[];
}

export interface PrivacySummaryItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  href?: string;
}

export interface PrivacyPrincipleCTA {
  label: string;
  href: string;
}

export interface PrivacyPrincipleItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  highlights: string[];
  reverse?: boolean;
  cta?: PrivacyPrincipleCTA;
  className?: string;
  style?: React.CSSProperties;
}

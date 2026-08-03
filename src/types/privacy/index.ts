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

export interface InformationCollectedStats {
  id: string;
  label: string;
  value: string;
}

export interface CollectionCategoryItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  items: string[];
  optional?: boolean;
}

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

export type PermisssionStatus = 'required' | 'optional' | 'never';

export interface GrantedAccessItem {
  id: string;
  label: string;
}

export interface PermissionItem {
  id: string;
  title: string;
  description: string;
  whyWeNeedIt: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  status: PermisssionStatus;
  grantedAccess: GrantedAccessItem[];
  summary: string;
}

export interface PermissionOverviewItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

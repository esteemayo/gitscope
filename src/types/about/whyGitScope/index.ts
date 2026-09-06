import type { LucideIcon } from 'lucide-react';

export interface WhyGitScopeContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  accentColor?: string;
}

export interface WhyItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface ComparisonItem {
  id: string;
  github: string;
  gitScope: string;
}

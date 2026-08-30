import type { LucideIcon } from 'lucide-react';

export interface LimitationOfLiabilityContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  boundaryTitle: string;
  boundaryDescription: string;
  accentColor?: string;
}

export interface LiabilityExclusionType {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}

export interface LiabilityCapData {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}

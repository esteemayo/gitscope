import type { LucideIcon } from 'lucide-react';

export interface PrivacyDataContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export interface PrivacyControlType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface PrivacyPrincipleType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface PrivacyDataCategoryType {
  id: string;
  category: string;
  examples: string[];
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface PrivacyNoticeType {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

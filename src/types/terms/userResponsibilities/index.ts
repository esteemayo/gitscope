import type { LucideIcon } from 'lucide-react';

export interface UserResponsibilityContent {
  badge: string;
  title: string;
  description: string;
  headerIcon: LucideIcon | React.ComponentType;
  intro: string;
  accentColor: string;
}

export interface UserResponsibilityItemType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface UserResponsibilityNoticeType {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

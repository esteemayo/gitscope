import type { LucideIcon } from 'lucide-react';

export interface AcceptableUseContent {
  badge: string;
  title: string;
  description: string;
  headerIcon: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export interface AcceptableUseItemType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface AcceptableUseGroupType {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: AcceptableUseItemType[];
  accentColor: string;
}

export interface AcceptableUseNoticeType {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

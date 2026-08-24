import type { LucideIcon } from 'lucide-react';

export interface IntellectualPropertyContent {
  badge: string;
  title: string;
  description: string;
  headerIcon: LucideIcon | React.ComponentType;
  intro: string;
  accentColor: string;
}

export interface IntellectualPropertyLayerType {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface IntellectualPropertyRuleType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface IntellectualPropertyNoticeType {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

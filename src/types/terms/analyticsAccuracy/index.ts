import type { LucideIcon } from 'lucide-react';

export interface AnalyticsAccuracyContent {
  badge: string;
  title: string;
  description: string;
  headerIcon: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export interface AnalyticsMethodItemType {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface AnalyticsFlowStepType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface AnalyticsLimitationType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface AnalyticsAccuracyNoticeType {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

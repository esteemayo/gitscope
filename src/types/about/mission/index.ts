import type { LucideIcon } from 'lucide-react';

export interface MissionContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  accentColor?: string;
}

export interface MissionPrinciple {
  id: string;
  icon: LucideIcon | React.ComponentType;
  title: string;
  description: string;
  accentColor?: string;
}

export interface MissionTimelineStep {
  id: string;
  icon: LucideIcon | React.ComponentType;
  title: string;
  description: string;
  accentColor?: string;
}

export type MissionMetricType = {
  id: string;
  label: string;
  value: number;
  trendLabel: string;
};

export type HealthProgressType = {
  id: string;
  label: string;
  percentage: number;
};

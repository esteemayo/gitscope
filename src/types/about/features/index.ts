import type { LucideIcon } from 'lucide-react';

export interface AboutFeatureContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  accentColor?: string;
}

export interface AboutFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  preview: React.ReactNode;
  previewHeight?: 'small' | 'medium' | 'large';
  isFeatured?: boolean;
}

export interface TimelineItem {
  id: number;
  color: string;
  title: string;
  time: string;
}

export interface Language {
  id: number;
  name: string;
  percentage: number;
  color: string;
}

export interface ChartPoint {
  id: number;
  value: number;
}

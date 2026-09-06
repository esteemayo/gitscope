import type { LucideIcon } from 'lucide-react';

export interface ArchitectureContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  accentColor?: string;
}

export interface ArchitectureFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  layer: string;
}

export interface PipelineItem {
  id: string;
  label: string;
}

export interface PipelineStage {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  items: PipelineItem[];
  cardWidth?: 'sm' | 'md' | 'lg';
}

import { LucideIcon, LucideProps } from 'lucide-react';

export interface HeroCardItem {
  id: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  value: string;
  trend: string;
}

export interface AboutStat {
  id: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  value: string;
  label: string;
  trend: string;
  trendLabel: string;
}

export interface MissionPrinciple {
  id: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  accentColor?: string;
}

export interface MissionTimelineStep {
  id: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
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

export interface WhyItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}

export interface ComparisonItem {
  id: string;
  github: string;
  gitScope: string;
}

export interface ArchitectureFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
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
  icon: LucideIcon;
  accentColor: string;
  items: PipelineItem[];
  cardWidth?: 'sm' | 'md' | 'lg';
}

export interface Audience {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  useCase: string;
  accentColor: string;
}

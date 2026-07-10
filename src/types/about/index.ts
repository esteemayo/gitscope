import { LucideProps } from 'lucide-react';

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
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  accentColor: string;
  preview: React.ReactNode;
  isFeatured?: boolean;
}

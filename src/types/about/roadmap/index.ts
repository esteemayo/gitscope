import type { LucideIcon } from 'lucide-react';

export interface RoadmapContent {
  badge: string;
  title: string;
  description: string;
  headercon?: LucideIcon | React.ComponentType;
  accentColor?: string;
}

export type RoadmapStatus = 'Completed' | 'In Progress' | 'Planned';

export interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  status: {
    label: RoadmapStatus;
    progress: number;
  };
  items: string[];
}

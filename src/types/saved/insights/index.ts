import { type LucideIcon } from 'lucide-react';

export interface SavedInsightProfile {
  id: number;
  login: string;
  name?: string | null;
  repositories?: number;
  followers?: number;
  totalStars?: number;
  stars?: number;
}

export interface SavedInsightsStat {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

type InsightProfile = SavedInsightProfile;

export interface SavedInsightsHighlight {
  label: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  profile: InsightProfile;
  metric: string;
  accentColor: string;
}

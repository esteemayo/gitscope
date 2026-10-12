import { type LucideIcon } from 'lucide-react';
import { SavedInsightProfile } from './index';

type InsightProfile = SavedInsightProfile;

export interface SavedInsightsHighlightProps {
  label: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  profile: InsightProfile;
  metric: string;
  accentColor: string;
}

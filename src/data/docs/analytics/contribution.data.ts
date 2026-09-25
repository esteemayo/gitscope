import {
  Activity,
  BarChart3,
  CalendarDays,
  Flame,
  GitCommit,
  TrendingUp,
} from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const contributionAnalytics: DocsFeatureCardType[] = [
  {
    title: 'Contribution activity',
    description:
      'View available contribution activity across the analyzed timeline.',
    icon: GitCommit,
    accentColor: '#6366F1',
  },
  {
    title: 'Timeline',
    description:
      'Explore how contribution activity is distributed across different periods.',
    icon: CalendarDays,
    accentColor: '#06B6D4',
  },
  {
    title: 'Consistency',
    description:
      'Identify recurring activity patterns across the available contribution data.',
    icon: Flame,
    accentColor: '#F97316',
  },
  {
    title: 'Peak activity',
    description:
      'Identify periods where contribution activity reaches its highest observed level.',
    icon: TrendingUp,
    accentColor: '#14B8A6',
  },
];

export const contributionTimeline: DocsFeatureItemType[] = [
  {
    title: 'Activity over time',
    description:
      'Observe changes in contribution activity across the timeline.',
    accentColor: '#6366F1',
  },
  {
    title: 'Active periods',
    description:
      'Identify periods where contribution activity is more concentrated.',
    accentColor: '#14B8A6',
  },
  {
    title: 'Quiet periods',
    description: 'Recognize periods with lower observed contribution activity.',
    accentColor: '#8B5CF6',
  },
];

export const contributionConsistencies: DocsFeatureItemType[] = [
  {
    title: 'Recurring activity',
    description: 'Activity that appears repeatedly across multiple periods.',
    accentColor: '#14B8A6',
  },
  {
    title: 'Activity gaps',
    description:
      'Periods where little or no contribution activity is observed.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Activity pattern',
    description:
      'The overall distribution of contribution activity across the available timeline.',
    accentColor: '#6366F1',
  },
];

export const contributionPeakActivity = {
  title: 'Activity peaks',
  description:
    'Use peak periods to identify when contribution activity was most concentrated within the available timeline.',
  icon: BarChart3,
  accentColor: '#EC4899',
};

export const contributionActivities: DocsFeatureCardType[] = [
  {
    title: 'Start with the timeline',
    description:
      'Look at the broader distribution of activity before examining individual periods.',
    icon: Activity,
    accentColor: '#6366F1',
  },
  {
    title: 'Check recurring patterns',
    description:
      'Look for activity patterns across multiple periods instead of isolated events.',
    icon: CalendarDays,
    accentColor: '#14B8A6',
  },
];

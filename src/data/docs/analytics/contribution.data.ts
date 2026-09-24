import {
  Activity,
  BarChart3,
  CalendarDays,
  Flame,
  GitCommit,
  TrendingUp,
} from 'lucide-react';

import {
  ContributionCardType,
  ContributionItemType,
} from '@/types/docs/analytics/contribution';

export const contributionAnalytics: ContributionCardType[] = [
  {
    id: 'contribution-activity',
    title: 'Contribution activity',
    description:
      'View available contribution activity across the analyzed timeline.',
    icon: GitCommit,
    accentColor: '#6366F1',
  },
  {
    id: 'timeline',
    title: 'Timeline',
    description:
      'Explore how contribution activity is distributed across different periods.',
    icon: CalendarDays,
    accentColor: '#06B6D4',
  },
  {
    id: 'consistency',
    title: 'Consistency',
    description:
      'Identify recurring activity patterns across the available contribution data.',
    icon: Flame,
    accentColor: '#F97316',
  },
  {
    id: 'peak-activity',
    title: 'Peak activity',
    description:
      'Identify periods where contribution activity reaches its highest observed level.',
    icon: TrendingUp,
    accentColor: '#14B8A6',
  },
];

export const contributionTimeline: ContributionItemType[] = [
  {
    id: 'activity-over-time',
    label: 'Activity over time',
    description:
      'Observe changes in contribution activity across the timeline.',
    accentColor: '#6366F1',
  },
  {
    id: 'active-periods',
    label: 'Active periods',
    description:
      'Identify periods where contribution activity is more concentrated.',
    accentColor: '#14B8A6',
  },
  {
    id: 'quiet-periods',
    label: 'Quiet periods',
    description: 'Recognize periods with lower observed contribution activity.',
    accentColor: '#8B5CF6',
  },
];

export const contributionConsistencies: ContributionItemType[] = [
  {
    id: 'recurring-activity',
    label: 'Recurring activity',
    description: 'Activity that appears repeatedly across multiple periods.',
    accentColor: '#14B8A6',
  },
  {
    id: 'activity-gaps',
    label: 'Activity gaps',
    description:
      'Periods where little or no contribution activity is observed.',
    accentColor: '#F59E0B',
  },
  {
    id: 'activity-pattern',
    label: 'Activity pattern',
    description:
      'The overall distribution of contribution activity across the available timeline.',
    accentColor: '#6366F1',
  },
];

export const contributionPeakActivity = {
  id: 'activity-peaks',
  title: 'Activity peaks',
  description:
    'Use peak periods to identify when contribution activity was most concentrated within the available timeline.',
  icon: BarChart3,
  accentColor: '#EC4899',
};

export const contributionActivities: ContributionCardType[] = [
  {
    id: 'start-with-the-timeline',
    title: 'Start with the timeline',
    description:
      'Look at the broader distribution of activity before examining individual periods.',
    icon: Activity,
    accentColor: '#6366F1',
  },
  {
    id: 'check-recurring-patterns',
    title: 'Check recurring patterns',
    description:
      'Look for activity patterns across multiple periods instead of isolated events.',
    icon: CalendarDays,
    accentColor: '#14B8A6',
  },
];

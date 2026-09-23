import {
  AnalyticsItemType,
  AnalyticsReadingType,
  AnalyticsStepType,
} from '@/types/docs/analytics/overview';

export const analyticsAreas: AnalyticsItemType[] = [
  {
    id: 'profile-analytics',
    title: 'Profile analytics',
    description:
      'Understand the high-level characteristics of a GitHub profile.',
    accentColor: '#8B5CF6',
    items: [
      'Profile statistics',
      'Repository presence',
      'Followers and activity',
    ],
  },
  {
    id: 'repository-metrics',
    title: 'Repository metrics',
    description: 'Examine projects and the activity associated with them.',
    accentColor: '#06B6D4',
    items: ['Repository count', 'Stars and forks', 'Recent activity'],
  },
  {
    id: 'language-analytics',
    title: 'Language analytics',
    description:
      'Explore the programming languages represented across repositories.',
    accentColor: '#F59E0B',
    items: [
      'Language distribution',
      'Repository languages',
      'Technology patterns',
    ],
  },
  {
    id: 'contribution-analytics',
    title: 'Contribution analytics',
    description:
      'Understand how GitHub contribution activity changes over time.',
    accentColor: '#22C55E',
    items: [
      'Contribution totals',
      'Activity timeline',
      'Consistency and peaks',
    ],
  },
];

export const analyticsStep: AnalyticsStepType[] = [
  {
    title: 'Collect',
    description:
      'Retrieve the GitHub data required for the selected profile or repository.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Organize',
    description:
      'Group the returned data into meaningful analytics categories.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Visualize',
    description:
      'Present the metrics through charts, cards, timelines, and other UI elements.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Explore',
    description:
      'Use sorting, comparisons, and detailed views to inspect the available data.',
    accentColor: '#22C55E',
  },
];

export const analyticsReadings: AnalyticsReadingType[] = [
  {
    id: 'start-broad',
    title: 'Start broad',
    description: 'Begin with profile-level information to establish context.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'go-deeper',
    title: 'Go deeper',
    description:
      'Inspect repositories, languages, and contribution individually.',
    accentColor: '#06B6D4',
  },
  {
    id: 'compare-context',
    title: 'Compare context',
    description: 'Use timelines and related metrics to understand the numbers.',
    accentColor: '#22C55E',
  },
];

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';
import { AnalyticsStepType } from '@/types/docs/analytics/overview';

export const analyticsAreas: DocsFeatureCardType[] = [
  {
    title: 'Profile analytics',
    description:
      'Understand the high-level characteristics of a GitHub profile.',
    items: [
      'Profile statistics',
      'Repository presence',
      'Followers and activity',
    ],
    accentColor: '#8B5CF6',
  },
  {
    title: 'Repository metrics',
    description: 'Examine projects and the activity associated with them.',
    items: ['Repository count', 'Stars and forks', 'Recent activity'],
    accentColor: '#06B6D4',
  },
  {
    title: 'Language analytics',
    description:
      'Explore the programming languages represented across repositories.',
    items: [
      'Language distribution',
      'Repository languages',
      'Technology patterns',
    ],
    accentColor: '#F59E0B',
  },
  {
    title: 'Contribution analytics',
    description:
      'Understand how GitHub contribution activity changes over time.',
    items: [
      'Contribution totals',
      'Activity timeline',
      'Consistency and peaks',
    ],
    accentColor: '#22C55E',
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

export const analyticsReadings: DocsFeatureItemType[] = [
  {
    title: 'Start broad',
    description: 'Begin with profile-level information to establish context.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Go deeper',
    description:
      'Inspect repositories, languages, and contribution individually.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Compare context',
    description: 'Use timelines and related metrics to understand the numbers.',
    accentColor: '#22C55E',
  },
];

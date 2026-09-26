import {
  BarChart3,
  GitCompareArrows,
  Languages,
  Scale,
  Search,
  UsersRound,
} from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const comparisonStart: DocsFeatureCardType[] = [
  {
    icon: Search,
    title: 'Find profiles',
    description:
      'Search for the GitHub usernames you want to include in the comparison.',
    accentColor: '#8B5CF6',
  },
  {
    icon: GitCompareArrows,
    title: 'Compare side by side',
    description:
      'View related metrics from both profiles within the same comparison context.',
    accentColor: '#06B6D4',
  },
];

export const comparisonAreas: DocsFeatureCardType[] = [
  {
    icon: UsersRound,
    title: 'Profile metrics',
    description:
      'Compare available account-level information such as followers, repositories, and other profile statistics.',
    accentColor: '#8B5CF6',
  },
  {
    icon: BarChart3,
    title: 'Repository metrics',
    description:
      'Compare repository counts, stars, forks, and other supported project-level metrics.',
    accentColor: '#06B6D4',
  },
  {
    icon: Languages,
    title: 'Language activity',
    description:
      "Compare the programming languages represented across the two developers' repositories.",
    accentColor: '#22C55E',
  },
  {
    icon: GitCompareArrows,
    title: 'Contribution activity',
    description:
      'Compare available contribution activity and patterns across the selected profiles.',
    accentColor: '#F97316',
  },
];

export const comparisonMetrics: DocsFeatureItemType[] = [
  {
    title: 'Account statistics',
    description:
      'Review supported account-level values such as followers, following, repositories, and other profile statistics.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Shared metric context',
    description:
      'Check that the values being compared represent the same type of GitHub data.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Relative differences',
    description:
      'Use the comparison values to understand how the two profiles differ for the selected metric.',
    accentColor: '#22C55E',
  },
];

export const comparisonRepositories: DocsFeatureItemType[] = [
  {
    title: 'Repository count',
    description:
      'Compare the number of repositories represented in the available GitHub data.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Stars and forks',
    description: 'Compare supported repository popularity and reuse signals.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Repository context',
    description:
      'Open individual repositories when aggregate metrics are not enough to explain a difference.',
    accentColor: '#22C55E',
  },
];

export const comparisonLanguages: DocsFeatureItemType[] = [
  {
    title: 'Language presence',
    description:
      "Identify which programming languages appear across each developer's available repositories.",
    accentColor: '#8B5CF6',
  },
  {
    title: 'Language distribution',
    description:
      'Compare how programming language usage is distributed across the available repository data.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Repository context',
    description:
      'Use individual repository information to understand where particular languages are being used.',
    accentColor: '#22C55E',
  },
];

export const comparisonDifference: DocsFeatureCardType[] = [
  {
    icon: Scale,
    title: 'Metric relationship',
    description:
      'Use relative values to understand the numerical relationship between corresponding metrics.',
    accentColor: '#8B5CF6',
  },
  {
    icon: BarChart3,
    title: 'Comparison context',
    description:
      'Read the relative difference alongside the underlying values for better context.',
    accentColor: '#06B6D4',
  },
];

export const comparisonHighlights: DocsFeatureItemType[] = [
  {
    title: 'Review the highlighted metric',
    description: 'Identify which metric produced the comparison highlight.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Check the underlying values',
    description:
      'Look at both source values before interpreting the size or meaning of a difference.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Explore additional context',
    description:
      'Open the relevant profile or repository when more information is needed.',
    accentColor: '#22C55E',
  },
];

export const comparisonWorkflow: DocsFeatureItemType[] = [
  {
    title: 'Select two profiles',
    description:
      'Choose the two GitHub usernames you want to examine together.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Review shared metrics',
    description:
      'Start with the metrics displayed for both profiles to establish a common context.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Inspect differences',
    description:
      'Use relative differences and comparison highlights to identify where the available values diverge.',
    accentColor: '#22C55E',
  },
  {
    title: 'Explore the underlying data',
    description:
      'Open individual profiles or repositories when you need additional context for a comparison.',
    accentColor: '#F97316',
  },
];

export const comparisonPrinciples: DocsFeatureItemType[] = [
  {
    title: 'Use the same context',
    description:
      'Compare equivalent metrics from both profiles rather than mixing unrelated measurements.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Look beyond one metric',
    description:
      'A difference in one metric does not describe the complete development activity represented by a profile.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Check the underlying data',
    description:
      'Open profile or repository details when a comparison needs more context.',
    accentColor: '#22C55E',
  },
  {
    title: 'Consider data availability',
    description:
      'Differences can reflect GitHub data availability, repository visibility, or API limitations.',
    accentColor: '#F59E0B',
  },
];

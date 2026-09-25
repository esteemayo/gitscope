import { DocsFeatureCardType } from '@/types/docs/featureCard';
import {
  ActivityItemType,
  contributionStepType,
  ContributionTimelineType,
  ReadingType,
} from '@/types/docs/contributions';

export const contributionData: DocsFeatureCardType[] = [
  {
    title: 'Contribution total',
    description:
      'Provides the total contribution activity represented by the available GitHub data.',
    accentColor: '#22C55E',
  },
  {
    title: 'Activity timeline',
    description:
      'Shows how contribution activity changes across the available period.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Consistency',
    description:
      'Helps identify whether activity is distributed regularly or concentrated in specific periods.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Peak activity',
    description:
      'Highlights periods where contribution activity reaches its highest level.',
    accentColor: '#F59E0B',
  },
];

export const contributionTimeline: ContributionTimelineType[] = [
  {
    label: 'Jan',
    value: '34',
    width: '42%',
    accentColor: '#8B5CF6',
  },
  {
    label: 'Feb',
    value: '52',
    width: '65%',
    accentColor: '#06B6D4',
  },
  {
    label: 'Mar',
    value: '71',
    width: '84%',
    accentColor: '#22C55E',
  },
  {
    label: 'Apr',
    value: '43',
    width: '54%',
    accentColor: '#F59E0B',
  },
];

export const contributionActivities: ActivityItemType[] = [
  {
    id: 'regular',
    label: 'Regular activity',
    description:
      'Contributions appear across many periods with fewer large gaps.',
    accentColor: '#22C55E',
  },
  {
    id: 'concentrated',
    label: 'Concentrated activity',
    description:
      'A larger portion of contributions appears within a smaller number of periods.',
    accentColor: '#F59E0B',
  },
  {
    id: 'variable',
    label: 'Variable activity',
    description: 'Activity levels fluctuate significantly between periods.',
    accentColor: '#8B5CF6',
  },
];

export const contributionReadings: ReadingType[] = [
  {
    label: 'Density',
    description:
      'Areas with more activity indicate periods with a higher concentration of contributions.',
    accentColor: '#22C55E',
  },
  {
    label: 'Gaps',
    description:
      'Empty or quieter periods can indicate breaks or changes in activity.',
    accentColor: '#8B5CF6',
  },
  {
    label: 'Patterns',
    description:
      'Repeated activity across periods can reveal recurring contribution patterns.',
    accentColor: '#F59E0B',
  },
];

export const contributionSteps: contributionStepType[] = [
  {
    id: 'total',
    title: 'Start with the total.',
    description:
      'Use the total to understand the overall amount of activity represented by the data.',
  },
  {
    id: 'timeline',
    title: 'Check the timeline.',
    description:
      'Look at when the activity occurred instead of relying only on the aggregate number.',
  },
  {
    id: 'patterns',
    title: 'Look for patterns.',
    description: 'Compare periods of high, low, and consistent activity.',
  },
  {
    id: 'context',
    title: 'Consider the context.',
    description:
      'Repository work, private activity, and other factors can affect what is visible on a public profile.',
  },
];

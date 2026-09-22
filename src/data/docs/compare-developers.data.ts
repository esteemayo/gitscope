import {
  CompareHighlightType,
  CompareStepItem,
  ComparisonCardType,
  DevelopersTimelineItemType,
  LanguageComparisonItem,
  MetricRowType,
  RepositoryComparisonItem,
} from '@/types/docs/compare';

export const compareDevelopersCard: ComparisonCardType[] = [
  {
    id: 'profile-metrics',
    title: 'Profile metrics',
    description: 'Compare high-level account activity and repository presence.',
    items: [
      'Followers and following',
      'Public repositories',
      'Repository stars',
      'Account activity',
    ],
    accentColor: '#8B5CF6',
  },
  {
    id: 'repository-activity',
    title: 'Repository activity',
    description: 'Examine the repositories associated with each profile.',
    items: [
      'Repository count',
      'Stars and forks',
      'Popular repositories',
      'Recent repository activity',
    ],
    accentColor: '#06B6D4',
  },
  {
    id: 'contributions',
    title: 'Contributions',
    description:
      'Compare contribution patterns across the available activity data.',
    items: [
      'Contribution totals',
      'Activity over time',
      'Peak activity periods',
      'Consistency patterns',
    ],
    accentColor: '#22C55E',
  },
  {
    id: 'languages',
    title: 'Languages',
    description: 'Understand the technologies represented across each profile.',
    items: [
      'Programming languages',
      'Language distribution',
      'Repository language usage',
      'Technology patterns',
    ],
    accentColor: '#F59E0B',
  },
];

export const compareDevelopersMetric: MetricRowType[] = [
  {
    id: 'repositories',
    label: 'Repositories',
    firstValue: '42',
    secondValue: '27',
    difference: '+55.6%',
    accentColor: '#8B5CF6',
  },
  {
    id: 'followers',
    label: 'Followers',
    firstValue: '180',
    secondValue: '120',
    difference: '+50%',
    accentColor: '#06B6D4',
  },
  {
    id: 'stars',
    label: 'Stars',
    firstValue: '640',
    secondValue: '410',
    difference: '+56.1%',
    accentColor: '#F59E0B',
  },
];

export const repositoryComparison: RepositoryComparisonItem[] = [
  {
    id: 'repository-count',
    title: 'Repository count',
    text: 'Compare the number of public repositories.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'stars',
    title: 'Stars',
    text: 'Compare accumulated repository stars.',
    accentColor: '#F59E0B',
  },
  {
    id: 'forks',
    title: 'Forks',
    text: 'Compare how often repositories have been forked.',
    accentColor: '#06B6D4',
  },
  {
    id: 'activity',
    title: 'Activity',
    text: 'Inspect recent repository activity and updates.',
    accentColor: '#22C55E',
  },
];

export const developersTimeline: DevelopersTimelineItemType[] = [
  {
    id: 'consistency',
    title: 'Consistency',
    description:
      'Shows how regularly activity appears across the comparison period.',
    accentColor: '#22C55E',
  },
  {
    id: 'peak-month',
    title: 'Peak month',
    description:
      'Identifies the period with the highest contribution activity.',
    accentColor: '#06B6D4',
  },
  {
    id: 'timeline',
    title: 'Timeline',
    description: 'Provides a broader view of how activity changes over time.',
    accentColor: '#8B5CF6',
  },
];

export const languageComparisons: LanguageComparisonItem[] = [
  {
    id: 'typescript',
    label: 'Developer A',
    language: 'TypeScript',
    remark: 'Primary language',
    accentColor: '#F59E0B',
  },
  {
    id: 'python',
    label: 'Developer B',
    language: 'Python',
    remark: 'Primary language',
    accentColor: '#06B6D4',
  },
];

export const comparisonHighlights: CompareHighlightType[] = [
  {
    id: 'higher-contributions',
    title: 'Higher contributions',
    label: 'Profile A',
    description: 'Based on the contribution metric being displayed.',
    accentColor: '#22C55E',
  },
  {
    id: 'more-repositories',
    title: 'More repositories',
    label: 'Profile B',
    description: 'Based on the repository count available for comparison.',
    accentColor: '#8B5CF6',
  },
];

export const compareSteps: CompareStepItem[] = [
  {
    title: 'Check the metric.',
    description: 'Identify exactly what the comparison is measuring.',
  },
  {
    title: 'Review both values.',
    description:
      'Look at the underlying numbers before considering the percentage difference.',
  },
  {
    title: 'Inspect the timeline.',
    description:
      'Contribution patterns can provide context that a total cannot.',
  },
  {
    title: 'Check repository context.',
    description:
      'Stars, forks, languages, and repository activity describe different aspects of a profile.',
  },
];

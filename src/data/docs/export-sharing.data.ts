import {
  ExportCardType,
  ExportComparisonType,
  ShareContextType,
  ShareStepType,
  SharingStepItem,
} from '@/types/docs/exportSharing';

export const exportOptions: ExportCardType[] = [
  {
    id: 'analytics',
    title: 'Analytics export',
    description:
      'Capture relevant analytics from the current view for later reference.',
    items: ['Profile analytics', 'Repository metrics', 'Contribution data'],
    accentColor: '#8B5CF6',
  },
  {
    id: 'comparison',
    title: 'Comparison export',
    description:
      'Preserve information from a developer comparison for review or reference.',
    items: ['Compared profiles', 'Metric differences', 'Comparison context'],
    accentColor: '#06B6D4',
  },
  {
    id: 'repository',
    title: 'Repository data',
    description:
      'Keep useful repository-level information outside the live dashboard.',
    items: ['Repository metrics', 'Language information', 'Activity context'],
    accentColor: '#F59E0B',
  },
  {
    id: 'shared',
    title: 'Shared analytics',
    description:
      'Share a useful analytics view without requiring the recipient to recreate the analysis.',
    items: ['Profile context', 'Relevant metrics', 'Analytics snapshot'],
    accentColor: '#22C55E',
  },
];

export const sharingAnalytics: ShareStepType[] = [
  {
    title: 'Analyze',
    description:
      'Open the GitHub profile, repository, or comparison you want to share.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Review',
    description:
      'Check that the visible analytics provide the context you want other people to see.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Share',
    description:
      'Use the available sharing mechanism to make the analytics accessible to the recipient.',
    accentColor: '#22C55E',
  },
];

export const sharedContexts: ShareContextType[] = [
  {
    title: 'Subject',
    description: 'Who or what is being analyzed?',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Metrics',
    description: 'Which analytics are being presented?',
    accentColor: '#06B6D4',
  },
  {
    title: 'Time',
    description: 'When was the data generated or viewed?',
    accentColor: '#F59E0B',
  },
];

export const exportComparisons: ExportComparisonType[] = [
  {
    id: 'live-analytics',
    label: 'Live analytics',
    items: [
      'Reflects currently available data',
      'Can change as GitHub activity changes',
      'Provides the interactive GitScope experience',
    ],
    accentColor: '#06B6D4',
  },
  {
    id: 'exported-information',
    label: 'Exported information',
    items: [
      'Represents data captured at a point in time',
      'Can be stored or referenced separately',
      'May become outdated as source data changes',
    ],
    accentColor: '#8B5CF6',
  },
];

export const sharingSteps: SharingStepItem[] = [
  {
    id: 'review',
    title: 'Review before sharing.',
    description:
      'Confirm that the analytics and profile are the ones you intend to share.',
  },
  {
    id: 'include-context',
    title: 'Include context.',
    description:
      'Explain what the metrics represent and when the data was captured.',
  },
  {
    id: 'check',
    title: 'Check freshness.',
    description:
      'Revisit the source when the accuracy of current activity matters.',
  },
  {
    id: 'share',
    title: 'Share intentionally.',
    description:
      'Consider who can access the shared information and why they need it.',
  },
];

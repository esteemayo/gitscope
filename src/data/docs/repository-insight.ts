import { RepositoryInsightCardType } from '@/types/docs/repositoryInsight';

export const repositoryInsightOverview: RepositoryInsightCardType[] = [
  {
    id: 'repository-identity',
    title: 'Repository identity',
    description:
      'The repository name, owner, description, and other identifying information.',
    accentColor: '#4F46E5',
  },
  {
    id: 'visibility',
    title: 'Visibility',
    description: "The repository's available visibility information.",
    accentColor: '#8B5CF6',
  },
  {
    id: 'primary-language',
    title: 'Primary language',
    description:
      'The primary programming language associated with the repository.',
    accentColor: '#FA5A7A',
  },
  {
    id: 'repository-status',
    title: 'Repository status',
    description:
      'Context around the current state and activity of the project.',
    accentColor: '#22C55E',
  },
];

export const repositoryInsightMetrics: RepositoryInsightCardType[] = [
  {
    id: 'stars',
    title: 'Stars',
    description: 'The number of GitHub stars associated with the repository.',
    accentColor: '#FACC15',
  },
  {
    id: 'forks',
    title: 'Forks',
    description: 'The number of forks associated with the repository.',
    accentColor: '#F59E0B',
  },
  {
    id: 'issues',
    title: 'Issues',
    description: 'Issue information available for the repository.',
    accentColor: '#EF4444',
  },
  {
    id: 'repository-activity',
    title: 'Repository activity',
    description: 'Available signals describing recent repository activity.',
    accentColor: '#06B6D4',
  },
];

export const repositoryInsightSummaries: RepositoryInsightCardType[] = [
  {
    id: 'project-context',
    title: 'Project context',
    description: 'What the repository is and what it is intended to provide.',
    accentColor: '#4F46E5',
  },
  {
    id: 'technical-context',
    title: 'Technical context',
    description:
      'The languages and technical characteristics represented in the repository.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'activity-context',
    title: 'Activity context',
    description:
      'Signals describing how the repository has been changing over time.',
    accentColor: '#22C55E',
  },
];

export const repositoryInsightNavigation: RepositoryInsightCardType[] = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Identify the repository and understand its basic context.',
    accentColor: '#4F46E5',
  },
  {
    id: 'metrics',
    title: 'Metrics',
    description: 'Review measurable repository signals.',
    accentColor: '#F59E0B',
  },
  {
    id: 'summary',
    title: 'Summary',
    description:
      'Understand the project through a concise analytical overview.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'health',
    title: 'Health',
    description: 'Review additional activity and maintenance signals.',
    accentColor: '#22C55E',
  },
];

export const repositoryInsightInterpretation: RepositoryInsightCardType[] = [
  {
    id: 'multiple-metrics',
    title: 'Look at multiple metrics',
    description: 'Avoid drawing conclusions from a single repository signal.',
    accentColor: '#4F46E5',
  },
  {
    id: 'project-context',
    title: 'Consider project context',
    description:
      'A personal project, library, application, and archived repository can have very different activity patterns.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'activity-as-context',
    title: 'Use activity as context',
    description:
      'Recent activity can help explain the current state of a repository without defining its overall quality.',
    accentColor: '#22C55E',
  },
];

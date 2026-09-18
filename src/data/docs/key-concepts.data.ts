import { KeyConceptType } from '@/types/docs/keyConcepts';

export const keyConceptRepositories: KeyConceptType[] = [
  {
    id: 'repository',
    title: 'Repository',
    description: 'An individual project hosted on GitHub.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'repository-metrics',
    title: 'Repository metrics',
    description:
      'Quantifiable information used to describe repository activity and popularity.',
    accentColor: '#F59E0B',
  },
  {
    id: 'stars',
    title: 'Stars',
    description:
      'A GitHub signal commonly used to indicate interest in a repository.',
    accentColor: '#FACC15',
  },
  {
    id: 'forks',
    title: 'Forks',
    description: 'Copies of a repository created under another GitHub account.',
    accentColor: '#22C55E',
  },
];

export const keyConceptAnalytics: KeyConceptType[] = [
  {
    id: 'metric',
    title: 'Metric',
    description: 'A measurable value derived from available GitHub data.',
    accentColor: '#4F46E5',
  },
  {
    id: 'trend',
    title: 'Trend',
    description: 'A pattern in a metric observed across a period of time.',
    accentColor: '#22C55E',
  },
  {
    id: 'visualization',
    title: 'Visualization',
    description:
      'A chart or visual representation used to make analytical data easier to interpret.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    description:
      'The interface that brings profile, repository, contribution, and analytical information together.',
    accentColor: '#F59E0B',
  },
];

export const keyConceptFlow: KeyConceptType[] = [
  {
    id: 'github-data',
    title: '1. GitHub Data',
    description: 'GitHub provides the source data used by GitScope.',
    accentColor: '#4F46E5',
  },
  {
    id: 'data-processing',
    title: '2. Data Processing',
    description:
      'GitScope organizes the retrieved information into structures used by the application.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'analytics',
    title: '3. Analytics',
    description:
      'Processed data is transformed into metrics, trends, and visualizations.',
    accentColor: '#22C55E',
  },
  {
    id: 'interface',
    title: '4. Interface',
    description:
      "The resulting insights are presented through GitScope's dashboards and views.",
    accentColor: '#F59E0B',
  },
];

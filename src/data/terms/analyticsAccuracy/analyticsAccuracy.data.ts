import {
  BarChart3,
  Calculator,
  Database,
  GitCommit,
  GitFork,
  Info,
  LineChart,
  RefreshCw,
  Server,
  Star,
  TrendingUp,
  TriangleAlert,
} from 'lucide-react';
import {
  AnalyticsAccuracyNoticeType,
  AnalyticsFlowStepType,
  AnalyticsLimitationType,
  AnalyticsMethodItemType,
} from '@/types/terms/analyticsAccuracy';

export const termsAnalyticsAccuracyMethodology: AnalyticsMethodItemType[] = [
  {
    id: 'repository-count',
    label: 'Repository count',
    value: 'Source data',
    description:
      'Repository totals are based on repository information returned through the supported GitHub data sources.',
    icon: Database,
    accentColor: '#60A5FA',
  },
  {
    id: 'stars',
    label: 'Stars',
    value: 'GitHub metric',
    description:
      'Stars counts reflect the repository information available from GitHub when the analytics data is retrieved.',
    icon: Star,
    accentColor: '#FBBF24',
  },
  {
    id: 'forks',
    label: 'Forks',
    value: 'GitHub metric',
    description:
      'Fork counts are derived from repository information supplied through GitHub.',
    icon: GitFork,
    accentColor: '#A78BFA',
  },
  {
    id: 'contributions',
    label: 'Contributions',
    value: 'Activity data',
    description:
      'Contribution analytics depend on the contribution information available through GitHub and the supported GitScope processing logic.',
    icon: GitCommit,
    accentColor: '#34D399',
  },
  {
    id: 'languages',
    label: 'Languages',
    value: 'Repository data',
    description:
      'Language analytics are based on language information associated with repositories returned by GitHub.',
    icon: LineChart,
    accentColor: '#F472B6',
  },
  {
    id: 'trends',
    label: 'Trends',
    value: 'Calculated',
    description:
      'Trend indicators are calculated from available data and should be interpreted as directional signals rather than absolute measurements.',
    icon: TrendingUp,
    accentColor: '#38BDF8',
  },
];

export const termsAnalyticsAccuracyFlow: AnalyticsFlowStepType[] = [
  {
    id: 'github-source',
    title: 'GitHub data',
    description:
      'GitScope starts with information returned through supported GitHub APIs and connected data sources.',
    icon: Server,
    accentColor: '#60A5FA',
  },
  {
    id: 'normalization',
    title: 'Data processing',
    description:
      'Retrieved information is normalized and prepared for the analytics features supported by GitScope,',
    icon: RefreshCw,
    accentColor: '#A78BFA',
  },
  {
    id: 'calculation',
    title: 'Metric calculation',
    description:
      'GitScope applies its analytics logic to calculate supported metrics, summaries, and trend indicators.',
    icon: Calculator,
    accentColor: '#34D399',
  },
  {
    id: 'presentation',
    title: 'Visual presentation',
    description:
      'Calculated results are presented through dashboards, charts, repository views, and other interface elements.',
    icon: BarChart3,
    accentColor: '#F59E0B',
  },
];

export const termsAnalyticsAccuracyLimitations: AnalyticsLimitationType[] = [
  {
    id: 'source-changes',
    title: 'Source data can change',
    description:
      'GitHub data can change after GitScope retrieves it. A later request can therefore produce different results.',
    icon: RefreshCw,
    accentColor: '#60A5FA',
  },
  {
    id: 'api-availability',
    title: 'API availability matters',
    description:
      'Temporary API limitations, unavailable data, or service interruptions can affect the information available to GitScope.',
    icon: Server,
    accentColor: '#F59E0B',
  },
  {
    id: 'calculated-metrics',
    title: 'Some metrics are calculated',
    description:
      'Certain insights are derived by GitScope and should not be treated as native GitHub measurements.',
    icon: Calculator,
    accentColor: '#A7B8FA',
  },
  {
    id: 'interpretation',
    title: 'Metrics require context',
    description:
      'Analytics provide context about GitHub activity. They do not independently determine code quality, developer productivity, or project success.',
    icon: Info,
    accentColor: '#34D399',
  },
];

export const termsAnalyticsAccuracyNotice: AnalyticsAccuracyNoticeType = {
  title: 'Analytics are informational',
  description:
    'You should evaluate GitScope metrics alongside the underlying repository context and other relevant information before using them to make important technical, business, or professional decisions.',
  icon: TriangleAlert,
  accentColor: '#F59E0B',
};

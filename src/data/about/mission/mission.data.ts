import {
  Activity,
  Database,
  GitBranch,
  Rocket,
  ScanSearch,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react';

import {
  HealthProgressType,
  MissionMetricType,
  MissionPrinciple,
  MissionTimelineStep,
} from '@/types/about/mission';

export const missionPrinciples: MissionPrinciple[] = [
  {
    id: 'clarity',
    icon: ScanSearch,
    title: 'Clarity',
    description:
      'Complex GitHub repositories are transformed into intuitive visual analytics that are easy to explore and understand.',
    accentColor: '#3B82F6',
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Performance',
    description:
      'Every interaction is designed to feel responsive, from repository search to analytics rendering.',
    accentColor: '#F59E0B',
  },
  {
    id: 'privacy',
    icon: ShieldCheck,
    title: 'Privacy First',
    description:
      'GitScope only analyzes publicly available GitHub information. Your credentials and private repositories remain private.',
    accentColor: '#10B981',
  },
];

export const missionTimeline: MissionTimelineStep[] = [
  {
    id: 'github',
    icon: GitBranch,
    title: 'GitHub Repository',
    description: 'Connect a public GitHub repository or developer profile.',
    accentColor: '#3B82F6',
  },
  {
    id: 'collect',
    icon: Database,
    title: 'Collect Data',
    description:
      'Fetch commits, contributors, languages, releases and repository metadata.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'analyze',
    icon: Activity,
    title: 'Analyze Activity',
    description: 'Process contribution history, trends and repository health.',
    accentColor: '#F59E0B',
  },
  {
    id: 'visualize',
    icon: TrendingUp,
    title: 'Visualize Insights',
    description:
      'Generate interactive charts, timelines and language analytics.',
    accentColor: '#06B6D4',
  },
  {
    id: 'decision',
    icon: Rocket,
    title: 'Make Better Decision',
    description: 'Understand projects faster with actionable insights.',
    accentColor: '#10B981',
  },
];

export const missionMetrics: MissionMetricType[] = [
  {
    id: 'repositories',
    label: 'Repositories',
    value: 128,
    trendLabel: 'Active projects',
  },
  {
    id: 'stars',
    label: 'Stars',
    value: 9800,
    trendLabel: 'Community growth',
  },
];

export const healthProgress: HealthProgressType[] = [
  {
    id: 'code-quality',
    label: 'Code quality',
    percentage: 92,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    percentage: 84,
  },
  {
    id: 'activity',
    label: 'Activity',
    percentage: 97,
  },
];

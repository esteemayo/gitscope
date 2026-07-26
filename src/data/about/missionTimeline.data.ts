import {
  Activity,
  Database,
  GitBranch,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import { MissionTimelineStep } from '@/types/about';

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

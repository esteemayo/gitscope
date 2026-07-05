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
  },
  {
    id: 'collect',
    icon: Database,
    title: 'Collect Data',
    description:
      'Fetch commits, contributors, languages, releases and repository metadata.',
  },
  {
    id: 'analyze',
    icon: Activity,
    title: 'Analyze Activity',
    description: 'Process contribution history, trends and repository health.',
  },
  {
    id: 'visualize',
    icon: TrendingUp,
    title: 'Visualize Insights',
    description:
      'Generate interactive charts, timelines and language analytics.',
  },
  {
    id: 'decision',
    icon: Rocket,
    title: 'Make Better Decision',
    description: 'Understand projects faster with actionable insights.',
  },
];

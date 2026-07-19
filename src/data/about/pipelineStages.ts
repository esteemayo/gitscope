import {
  BarChart3,
  Database,
  GitBranchPlus,
  LayoutDashboard,
  Settings2,
} from 'lucide-react';
import { PipelineStage } from '@/types/about';

export const pipelineStages: PipelineStage[] = [
  {
    id: 'github',
    title: 'GitHub',
    description: 'Connect repositories and retrieve developer activity.',
    icon: GitBranchPlus,
    accentColor: '#8B5CF6',
    items: [
      { id: 'repositories', label: 'Repositories' },
      { id: 'commits', label: 'Commits' },
      { id: 'language', label: 'Language' },
    ],
  },
  {
    id: 'acquisition',
    title: 'Data Acquisition',
    description: 'Securely fetch repository data using GitHub APIs.',
    icon: Database,
    accentColor: '#3B82F6',
    items: [
      { id: 'graphql', label: 'GraphQL API' },
      { id: 'rest', label: 'REST API' },
      { id: 'auth', label: 'OAuth Authentication' },
    ],
  },
  {
    id: 'engine',
    title: 'GitScope Engine',
    description:
      'Transform raw GitHub data into meaningful developer insights.',
    icon: Settings2,
    accentColor: '#10B981',
    items: [
      { id: 'analysis', label: 'Repository Analysis' },
      { id: 'health', label: 'Health Scoring' },
      { id: 'compare', label: 'Profile Comparison' },
      { id: 'timeline', label: 'Timeline Generation' },
    ],
  },
  {
    id: 'visualization',
    title: 'Visualization',
    description: 'Convert processed data into interactive charts and metrics.',
    icon: BarChart3,
    accentColor: '#F59E0B',
    items: [
      { id: 'analytics', label: 'Analytics' },
      { id: 'health-ui', label: 'Health' },
      { id: 'timeline-ui', label: 'Timeline' },
      { id: 'compare-ui', label: 'Compare' },
    ],
  },
  {
    id: 'dashboard',
    title: 'Interactive Dashboard',
    description: 'Present everything through a fast and intuitive interface.',
    icon: LayoutDashboard,
    accentColor: '#EF4444',
    items: [
      { id: 'repos', label: 'Repositories' },
      { id: 'insights', label: 'Insights' },
      { id: 'charts', label: 'Charts' },
    ],
  },
];

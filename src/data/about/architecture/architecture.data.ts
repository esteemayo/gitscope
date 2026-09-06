import {
  Activity,
  BarChart3,
  Database,
  Layers3,
  LayoutDashboard,
  ShieldCheck,
  Settings2,
  Sparkles,
  Zap,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { ArchitectureFeature, PipelineStage } from '@/types/about/architecture';

export const architectureFeatures: ArchitectureFeature[] = [
  {
    id: 'frontend',
    title: 'Modern Frontend',
    description:
      'Next.js App Router with React Server Components delivers fast page rendering and efficient data loading.',
    icon: Layers3,
    accentColor: '#3B82F6',
    layer: 'Presentation Layer',
  },
  {
    id: 'api',
    title: 'Optimized API Layer',
    description:
      'GitHub API requests are organized to reduce unnecessary network calls and improve responsiveness.',
    icon: Activity,
    accentColor: '#10B981',
    layer: 'API Layer',
  },
  {
    id: 'data',
    title: 'Intelligent Data Flow',
    description:
      'Repository data is transformed into meaningful analytics before reaching the user interface.',
    icon: Database,
    accentColor: '#F59E0B',
    layer: 'Data Layer',
  },
  {
    id: 'performance',
    title: 'Performance First',
    description:
      'Streaming, lazy loading and efficient rendering keep dashboards smooth, even with large datasets.',
    icon: Zap,
    accentColor: '#8B5CF6',
    layer: 'Performance Layer',
  },
  {
    id: 'security',
    title: 'Secure by Design',
    description:
      'GitHub OAuth and secure session management protect user accounts and repository access.',
    icon: ShieldCheck,
    accentColor: '#EF4444',
    layer: 'Security Layer',
  },
  {
    id: 'ux',
    title: 'Developer Experience',
    description:
      'Accessibility, keyboard navigation and thoughtful interactions are built into every screen.',
    icon: Sparkles,
    accentColor: '#06B6D4',
    layer: 'Experience Layer',
  },
];

export const pipelineStages: PipelineStage[] = [
  {
    id: 'github',
    title: 'GitHub',
    description: 'Connect repositories and retrieve developer activity.',
    icon: GitHubLogoIcon,
    accentColor: '#8B5CF6',
    items: [
      { id: 'repositories', label: 'Repositories' },
      { id: 'commits', label: 'Commits' },
      { id: 'language', label: 'Language' },
    ],
    cardWidth: 'sm',
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
    cardWidth: 'md',
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
    cardWidth: 'lg',
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
    cardWidth: 'sm',
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
    cardWidth: 'sm',
  },
];

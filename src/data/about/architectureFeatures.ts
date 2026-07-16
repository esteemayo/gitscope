import {
  Activity,
  Database,
  Layers3,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { ArchitectureFeature } from '@/types/about';

export const architectureFeatures: ArchitectureFeature[] = [
  {
    id: 'frontend',
    title: 'Modern Frontend',
    description:
      'Next.js App Router with React Server Components delivers fast page rendering and efficient data loading.',
    icon: Layers3,
    accentColor: '#3B82F6',
  },
  {
    id: 'api',
    title: 'Optimized API Layer',
    description:
      'GitHub API requests are organized to reduce unnecessary network calls and improve responsiveness.',
    icon: Activity,
    accentColor: '#10B981',
  },
  {
    id: 'data',
    title: 'Intelligent Data Flow',
    description:
      'Repository data is transformed into meaningful analytics before reaching the user interface.',
    icon: Database,
    accentColor: '#F59E0B',
  },
  {
    id: 'performance',
    title: 'Performance First',
    description:
      'Streaming, lazy loading and efficient rendering keep dashboards smooth, even with large datasets.',
    icon: Zap,
    accentColor: '#8B5CF6',
  },
  {
    id: 'security',
    title: 'Secure by Design',
    description:
      'GitHub OAuth and secure session management protect user accounts and repository access.',
    icon: ShieldCheck,
    accentColor: '#3B82F6',
  },
  {
    id: 'ux',
    title: 'Developer Experience',
    description:
      'Accessibility, keyboard navigation and thoughtful interactions are built into every screen.',
    icon: Sparkles,
    accentColor: '#3B82F6',
  },
];

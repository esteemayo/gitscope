import { DiagramConnection } from '@/types/about';

export const architectureConnections: DiagramConnection[] = [
  {
    from: 'github',
    to: 'api',
  },
  {
    from: 'api',
    to: 'auth',
  },
  {
    from: 'api',
    to: 'processing',
  },
  {
    from: 'auth',
    to: 'core',
  },
  {
    from: 'processing',
    to: 'core',
  },
  {
    from: 'core',
    to: 'analytics',
  },
  {
    from: 'core',
    to: 'health',
  },
  {
    from: 'core',
    to: 'compare',
  },
  {
    from: 'core',
    to: 'timeline',
  },
  {
    from: 'analytics',
    to: 'dashboard',
  },
  {
    from: 'health',
    to: 'dashboard',
  },
  {
    from: 'compare',
    to: 'dashboard',
  },
  {
    from: 'timeline',
    to: 'dashboard',
  },
];

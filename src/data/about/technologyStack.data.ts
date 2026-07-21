import {
  Accessibility,
  Blocks,
  Database,
  Globe,
  LayoutDashboard,
  ShieldCheck,
} from 'lucide-react';
import { StackCategory } from '@/types/about';

export const technologyStack: StackCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description:
      'Modern interfaces focused on performance, accessibility and user experience.',
    icon: LayoutDashboard,
    accentColor: '#3B82F6',
    technologies: ['React', 'Next.js', 'TypeScript', 'SCSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Scalable services that securely process GitHub data.',
    icon: Globe,
    accentColor: '#10B981',
    technologies: [
      'Next.js API Routes',
      'GitHub REST API',
      'GitHub GraphQL API',
    ],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    description:
      'Collecting, transforming and visualizing repository insights.',
    icon: Database,
    accentColor: '#F59E0B',
    technologies: ['Recharts', 'CSV Export', 'Analytics Engine'],
  },
  {
    id: 'security',
    title: 'Security',
    description:
      "Authentication and privacy designed around GitHub's OAuth ecosystem.",
    icon: ShieldCheck,
    accentColor: '#8B5CF6',
    technologies: ['GitHub OAuth', 'HTTPS', 'Access Tokens'],
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description:
      'Designed with inclusive experiences, semantic HTML and keyboard-first interactions for every user.',
    icon: Accessibility,
    accentColor: '#06B6DA',
    technologies: [
      'WCAG Guidelines',
      'Semantic HTML',
      'ARIA Attributes',
      'Keyboard Navigation',
      'Focus Management',
    ],
  },
  {
    id: 'dx',
    title: 'Developer Experience',
    description:
      'Tooling that keeps development maintainable and production ready.',
    icon: Blocks,
    accentColor: '#EF4444',
    technologies: ['ESLint', 'Prettier', 'Vercel', 'Git'],
  },
];

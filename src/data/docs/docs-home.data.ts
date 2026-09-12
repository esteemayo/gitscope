import { BarChart3, BookOpen, Code2, Rocket, ShieldCheck } from 'lucide-react';

import { DocsCardType, DocsStepType } from '@/types/docs/docsCard';
import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';

export const quickStartCards: DocsCardType[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description:
      'Learn the fundamentals and start exploring GitHub analytics with GitScope.',
    href: '/documentation',
    icon: Rocket,
    accentColor: '#8B5CF6',
  },
  {
    id: 'github-analytics',
    title: 'GitHub Analytics',
    description:
      'Understand repositories, stars, languages, contributions and developer metrics.',
    href: '/documentation/features/github-analytics',
    icon: GitHubLogoIcon,
    accentColor: '#06B6D4',
  },
  {
    id: 'authentication',
    title: 'Authentication',
    description:
      'Understand GitHub authentication, permissions and authenticated sessions.',
    href: '/documentation/authentication/github',
    icon: ShieldCheck,
    accentColor: '#22C55E',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description:
      'Learn how GitScope organizes repository and contribution data.',
    href: '/documentation/analytics',
    icon: BarChart3,
    accentColor: '#F59E0B',
  },
  {
    id: 'guides',
    title: 'Guides',
    description:
      'Follow practical guides for analyzing, comparing and sharing profiles.',
    href: '/documentation/guides/analyze-profile',
    icon: BookOpen,
    accentColor: '#EC4899',
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    description:
      'Explore API concepts, endpoints, responses and authentication.',
    href: '/documentation/api',
    icon: Code2,
    accentColor: '#3B82F6',
  },
];

export const docsSteps: DocsStepType[] = [
  {
    id: 'github',
    label: 'GitHub',
    description: 'Connect your GitHub profile.',
    accentColor: '#4F46E5',
  },
  {
    id: 'data',
    label: 'Data',
    description: 'Retrieve and organize relevant data.',
    accentColor: '#22C55E',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    description: 'Transform data into useful metrics.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'insights',
    label: 'Insights',
    description: 'Explore your developer profile.',
    accentColor: '#EF4444',
  },
];

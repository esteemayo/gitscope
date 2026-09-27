import {
  Compass,
  Flag,
  GitBranch,
  Layers3,
  Lightbulb,
  Map,
  Rocket,
  Target,
} from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const roadmapAreas: DocsFeatureCardType[] = [
  {
    icon: Layers3,
    title: 'Analytics',
    description:
      'Expand the depth and usefulness of GitHub profile, repository, language, and contribution analytics.',
    accentColor: '#8B5CF6',
  },
  {
    icon: Rocket,
    title: 'Product experience',
    description:
      'Improve workflows, interactions, navigation, and the overall GitScope experience.',
    accentColor: '#06B6D4',
  },
  {
    icon: GitBranch,
    title: 'Developer platform',
    description:
      'Continue improving APIs, integrations, documentation, and developer-facing capabilities.',
    accentColor: '#22C55E',
  },
  {
    icon: Compass,
    title: 'Exploration',
    description:
      'Explore new ways to understand, compare, visualize, and share GitHub activity.',
    accentColor: '#F59E0B',
  },
];

export const analyticsDirection: DocsFeatureItemType[] = [
  {
    title: 'Deeper insights',
    description:
      'Provide more context around the metrics already available in GitScope.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Expanded analytics',
    description:
      'Explore additional ways to visualize and understand GitHub activity.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Better exploration',
    description:
      'Make it easier to move from high-level metrics into the underlying data.',
    accentColor: '#F59E0B',
  },
];

export const developerPlatforms: DocsFeatureItemType[] = [
  {
    title: 'API capabilities',
    description:
      'Expand the ways developers can access and work with GitScope analytics.',
    accentColor: '#3B82F6',
  },
  {
    title: 'Developer experience',
    description:
      'Improve documentation, examples, and workflows for developers building with GitScope.',
    accentColor: '#22C55E',
  },
];

export const productExperiences: DocsFeatureCardType[] = [
  {
    icon: Map,
    title: 'Navigation',
    description:
      'Make important analytics and workflows easier to discover and move between.',
    accentColor: '#EC4899',
  },
  {
    icon: Target,
    title: 'Focused workflows',
    description:
      'Improve task-oriented experiences around analysis, comparison, export, and sharing.',
    accentColor: '#F97316',
  },
];

export const roadmapItems: DocsFeatureItemType[] = [
  {
    title: 'User needs',
    description:
      'Consider problems and workflows that provide meaningful value to GitScope users.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Technical feasibility',
    description:
      'Evaluate architecture, dependencies, data availability, and implementation complexity.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Project direction',
    description:
      'Consider whether proposed work supports the broader goals and architecture of GitScope.',
    accentColor: '#22C55E',
  },
  {
    title: 'Feedback',
    description:
      'Use developer and user feedback to identify areas that may deserve further exploration.',
    accentColor: '#F59E0B',
  },
];

export const projectDirections: DocsFeatureCardType[] = [
  {
    icon: Lightbulb,
    title: 'Explore',
    description:
      'Identify useful ways to make GitHub data easier to understand and explore.',
    accentColor: '#EAB308',
  },
  {
    icon: Flag,
    title: 'Build',
    description:
      'Turn validated ideas into maintainable product and platform improvements.',
    accentColor: '#EF4444',
  },
];

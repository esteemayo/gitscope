import {
  BarChart3,
  Code2,
  GitBranch,
  Layers3,
  PieChart,
  Search,
} from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const languageAnalyticsArea: DocsFeatureCardType[] = [
  {
    title: 'Language distribution',
    description:
      'See the languages represented across the repositories included in the analyzed profile.',
    icon: Code2,
    accentColor: '#6366F1',
  },
  {
    title: 'Relative composition',
    description:
      'Understand how different languages contribute to the overall repository language mix.',
    icon: PieChart,
    accentColor: '#EC4899',
  },
  {
    title: 'Language comparison',
    description:
      'Compare the relative presence of different languages across the available repository data.',
    icon: BarChart3,
    accentColor: '#06B6D4',
  },
  {
    title: 'Repository context',
    description:
      'Connect language information back to the repositories where those technologies are represented.',
    icon: Layers3,
    accentColor: '#8B5CF6',
  },
];

export const languageCompositions: DocsFeatureItemType[] = [
  {
    title: 'Primary languages',
    description:
      'Languages with a larger representation in the analyzed repository data.',
    accentColor: '#6366F1',
  },
  {
    title: 'Secondary languages',
    description:
      'Languages that appear across the profile but represent a smaller portion of the available data.',
    accentColor: '#14B8A6',
  },
  {
    title: 'Technology diversity',
    description: 'The range of languages represented across the repositories.',
    accentColor: '#F59E0B',
  },
];

export const languageComparison: DocsFeatureItemType[] = [
  {
    title: 'Relative presence',
    description:
      'Compare how strongly different languages are represented within the available repository data.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Repository coverage',
    description:
      "Identify which repositories contribute to a language's presence in the profile.",
    accentColor: '#06B6D4',
  },
  {
    title: 'Technology patterns',
    description:
      'Use language distribution as a starting point for identifying recurring technology patterns.',
    accentColor: '#EC4899',
  },
];

export const languageSteps: DocsFeatureItemType[] = [
  {
    title: '1. Identify',
    description: 'Find languages that stand out in the profile analytics.',
    accentColor: '#6366F1',
  },
  {
    title: '2. Trace',
    description:
      'Locate the repositories where those languages are represented.',
    accentColor: '#14B8A6',
  },
  {
    title: '3. Explore',
    description:
      'Inspect repository details to understand the technology in project context.',
    accentColor: '#F59E0B',
  },
];

export const readingLanguageAnalytics: DocsFeatureCardType[] = [
  {
    title: 'Start broad',
    description:
      "Use the language overview to understand the profile's overall technology mix.",
    icon: Search,
    accentColor: '#6366F1',
  },
  {
    title: 'Trace repositories',
    description:
      'Connect language data to the projects where the technology appears.',
    icon: GitBranch,
    accentColor: '#14B8A6',
  },
];

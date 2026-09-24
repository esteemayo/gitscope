import {
  BarChart3,
  Code2,
  GitBranch,
  Layers3,
  PieChart,
  Search,
} from 'lucide-react';

import {
  LanguageCardType,
  LanguageItemType,
} from '@/types/docs/analytics/language';

export const languageAnalyticsArea: LanguageCardType[] = [
  {
    id: 'language-distribution',
    title: 'Language distribution',
    description:
      'See the languages represented across the repositories included in the analyzed profile.',
    icon: Code2,
    accentColor: '#6366F1',
  },
  {
    id: 'relative-composition',
    title: 'Relative composition',
    description:
      'Understand how different languages contribute to the overall repository language mix.',
    icon: PieChart,
    accentColor: '#EC4899',
  },
  {
    id: 'language-comparison',
    title: 'Language comparison',
    description:
      'Compare the relative presence of different languages across the available repository data.',
    icon: BarChart3,
    accentColor: '#06B6D4',
  },
  {
    id: 'repository-context',
    title: 'Repository context',
    description:
      'Connect language information back to the repositories where those technologies are represented.',
    icon: Layers3,
    accentColor: '#8B5CF6',
  },
];

export const languageCompositions: LanguageItemType[] = [
  {
    id: 'primary-languages',
    label: 'Primary languages',
    description:
      'Languages with a larger representation in the analyzed repository data.',
    accentColor: '#6366F1',
  },
  {
    id: 'secondary-languages',
    label: 'Secondary languages',
    description:
      'Languages that appear across the profile but represent a smaller portion of the available data.',
    accentColor: '#14B8A6',
  },
  {
    id: 'technology-diversity',
    label: 'Technology diversity',
    description: 'The range of languages represented across the repositories.',
    accentColor: '#F59E0B',
  },
];

export const languageComparison: LanguageItemType[] = [
  {
    id: 'relative-presence',
    label: 'Relative presence',
    description:
      'Compare how strongly different languages are represented within the available repository data.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'repository-coverage',
    label: 'Repository coverage',
    description:
      "Identify which repositories contribute to a language's presence in the profile.",
    accentColor: '#06B6D4',
  },
  {
    id: 'technology-patterns',
    label: 'Technology patterns',
    description:
      'Use language distribution as a starting point for identifying recurring technology patterns.',
    accentColor: '#EC4899',
  },
];

export const languageSteps: LanguageItemType[] = [
  {
    id: 'identify',
    label: '1. Identify',
    description: 'Find languages that stand out in the profile analytics.',
    accentColor: '#6366F1',
  },
  {
    id: 'trace',
    label: '2. Trace',
    description:
      'Locate the repositories where those languages are represented.',
    accentColor: '#14B8A6',
  },
  {
    id: 'explore',
    label: '3. Explore',
    description:
      'Inspect repository details to understand the technology in project context.',
    accentColor: '#F59E0B',
  },
];

export const readingLanguageAnalytics: LanguageCardType[] = [
  {
    id: 'start-broad',
    title: 'Start broad',
    description:
      "Use the language overview to understand the profile's overall technology mix.",
    icon: Search,
    accentColor: '#6366F1',
  },
  {
    id: 'trace-repositories',
    title: 'Trace repositories',
    description:
      'Connect language data to the projects where the technology appears.',
    icon: GitBranch,
    accentColor: '#14B8A6',
  },
];

import {
  BookOpen,
  Bug,
  GitBranch,
  History,
  Sparkles,
  Wrench,
} from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const changelogCovers: DocsFeatureCardType[] = [
  {
    icon: Sparkles,
    title: 'New features',
    description:
      'New capabilities and product functionality introduced to GitScope.',
    accentColor: '#8B5CF6',
  },
  {
    icon: Wrench,
    title: 'Improvements',
    description:
      'Existing features, workflows, and interfaces that have been enhanced.',
    accentColor: '#06B6D4',
  },
  {
    icon: Bug,
    title: 'Fixes',
    description:
      'Corrections for bugs, broken workflows, and unexpected behavior.',
    accentColor: '#F97316',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description:
      'Changes to guides, references, explanations, and developer documentation.',
    accentColor: '#22C55E',
  },
];

export const recentUpdates: DocsFeatureItemType[] = [
  {
    title: 'Features',
    description: 'New GitScope capabilities and user-facing functionality.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Improvements',
    description:
      'Enhancements to existing functionality, performance, usability, or developer experience.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Fixes',
    description:
      'Resolved issues that affected functionality, reliability, or expected behavior.',
    accentColor: '#F97316',
  },
  {
    title: 'Documentation',
    description:
      'Updates that improve clarity, coverage, examples, or documentation structure.',
    accentColor: '#22C55E',
  },
];

export const readChangelogs: DocsFeatureItemType[] = [
  {
    title: 'Start with the change type',
    description:
      'Identify whether an entry represents a feature, improvement, fix, or documentation update.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Read the change summary',
    description:
      'Use the summary to understand what changed and which part of GitScope it affects.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Check the surrounding context',
    description:
      'Related documentation can provide additional details about workflows or functionality affected by the change.',
    accentColor: '#F59E0B',
  },
];

export const changelogChanges: DocsFeatureCardType[] = [
  {
    icon: History,
    title: 'Review project history',
    description:
      'Use documented changes to understand how GitScope has evolved over time.',
    accentColor: '#EC4899',
  },
  {
    icon: GitBranch,
    title: 'Follow development',
    description:
      "Use the project's development activity alongside the changelog for additional context.",
    accentColor: '#3B82F6',
  },
];

import {
  Activity,
  BarChart3,
  FolderGit2,
  GitFork,
  Layers3,
  Star,
} from 'lucide-react';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const repositoryMetrics: DocsFeatureCardType[] = [
  {
    title: 'Repository count',
    description:
      'Shows the number of repositories available in the analyzed GitHub profile data.',
    icon: FolderGit2,
    accentColor: '#6366F1',
  },
  {
    title: 'Stars',
    description:
      'Shows the stars associated with repositories and helps identify projects that have attracted GitHub users.',
    icon: Star,
    accentColor: '#F59E0B',
  },
  {
    title: 'Forks',
    description:
      'Shows repository forks and provides additional context around how projects have been copied or extended.',
    icon: GitFork,
    accentColor: '#14B8A6',
  },
  {
    title: 'Activity',
    description:
      'Provides context about repository activity using the available GitHub activity data.',
    icon: Activity,
    accentColor: '#EC4899',
  },
  {
    title: 'Languages',
    description:
      'Shows the programming languages associated with repositories and their relative distribution.',
    icon: Layers3,
    accentColor: '#8B5CF6',
  },
  {
    title: 'Repository ranking',
    description:
      'Allows repositories to be sorted and explored using supported metrics such as stars or forks.',
    icon: BarChart3,
    accentColor: '#06B6D4',
  },
];

export const repositoryCombinedContext: DocsFeatureItemType[] = [
  {
    title: 'Stars',
    description:
      'Stars indicate that GitHub users have marked a repository as interesting or useful.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Forks',
    description:
      "Forks represent copies of repositories created through GitHub's fork mechanism.",
    accentColor: '#14B8A6',
  },
  {
    title: 'Combined context',
    description:
      'Viewing stars and forks together provides more context than relying on either metric independently.',
    accentColor: '#6366F1',
  },
];

export const popularRepositories: DocsFeatureItemType[] = [
  {
    title: 'Sort by stars',
    description: 'Surface repositories with higher star counts.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Sort by forks',
    description: 'Surface repositories with higher fork counts.',
    accentColor: '#14B8A6',
  },
  {
    title: 'Explore individually',
    description:
      'Open a repository to inspect its available details and metrics.',
    accentColor: '#8B5CF6',
  },
];

export const repositoryHealth: DocsFeatureItemType[] = [
  {
    title: 'Popularity',
    description:
      'Stars and forks provide observable signals of repository interest and reuse.',
    accentColor: '#F59E0B',
  },
  {
    title: 'Activity',
    description:
      'Available activity information provides context about repository development.',
    accentColor: '#EC4899',
  },
  {
    title: 'Composition',
    description:
      'Language information shows the technologies represented across projects.',
    accentColor: '#6366F1',
  },
];

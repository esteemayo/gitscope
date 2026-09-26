import { BarChart3, Search, UserRound, Workflow } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';

import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const githubProfiles: DocsFeatureCardType[] = [
  {
    icon: Search,
    title: 'Search by username',
    description:
      'Enter a GitHub username to locate the corresponding developer profile.',
    accentColor: '#8B5CF6',
  },
  {
    icon: GitHubLogoIcon,
    title: 'Use a valid account',
    description:
      'The username must correspond to a GitHub account that GitScope can retrieve.',
    accentColor: '#06B6D4',
  },
];

export const profileOverview: DocsFeatureItemType[] = [
  {
    title: 'Profile identity',
    description:
      "Review the developer's GitHub name, username, bio, and other available profile information.",
    accentColor: '#8B5CF6',
  },
  {
    title: 'Account statistics',
    description:
      'Review available follower, following, repository, and star-related statistics.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Profile context',
    description:
      'Use the available account information to understand the developer before exploring deeper analytics.',
    accentColor: '#22C55E',
  },
];

export const analysisAreas: DocsFeatureCardType[] = [
  {
    icon: UserRound,
    title: 'Profile overview',
    description:
      "Review the developer's GitHub identity, profile information, and high-level account statistics.",
    accentColor: '#8B5CF6',
  },
  {
    icon: BarChart3,
    title: 'Repository analytics',
    description:
      'Explore repository counts, stars, forks, and other repository-level signals available through GitHub data.',
    accentColor: '#06B6D4',
  },
  {
    icon: Workflow,
    title: 'Contribution activity',
    description:
      'Inspect contribution activity and identify patterns across the available contribution timeline.',
    accentColor: '#22C55E',
  },
  {
    icon: GitHubLogoIcon,
    title: 'Language distribution',
    description:
      "Explore the programming languages represented across the developer's repositories.",
    accentColor: '#F97316',
  },
];

export const exploreRepositories: DocsFeatureItemType[] = [
  {
    title: 'Sort repositories',
    description:
      'Use the available sorting options to organize repositories by supported metrics such as stars or forks.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Switch the presentation',
    description:
      'Use the available repository presentation options to scan projects more efficiently.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Open repository details',
    description:
      'Select a repository when you need deeper project-level information and metrics.',
    accentColor: '#22C55E',
  },
];

export const languageAnalytics: DocsFeatureItemType[] = [
  {
    title: 'Language distribution',
    description:
      "Identify the languages represented across the developer's repositories.",
    accentColor: '#8B5CF6',
  },
  {
    title: 'Repository context',
    description:
      'Use repository information to understand where each language appears.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Technology patterns',
    description:
      'Look across multiple repositories for recurring language and technology patterns.',
    accentColor: '#F97316',
  },
];

export const workflowSteps: DocsFeatureItemType[] = [
  {
    title: 'Find the profile',
    description:
      "Enter a GitHub username through GitScope's profile search to locate the developer you want to analyze.",
    accentColor: '#8B5CF6',
  },
  {
    title: 'Review the overview',
    description:
      'Start with the profile header and summary metrics to understand the account at a glance.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Explore analytics',
    description:
      'Move through repository, language, and contribution analytics to examine different aspects of the profile.',
    accentColor: '#22C55E',
  },
  {
    title: 'Inspect individual data',
    description:
      'Use sorting and repository exploration to move from high-level signals into more specific GitHub data.',
    accentColor: '#F97316',
  },
];

export const explorationTips: DocsFeatureItemType[] = [
  {
    title: 'Start broad',
    description:
      'Use the profile overview before focusing on individual repositories or contribution patterns.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Use sorting',
    description:
      'Sort repository data by the available metrics when you want to identify specific projects or patterns.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Compare related signals',
    description:
      'Read repository, language, and contribution data together rather than relying on a single metric.',
    accentColor: '#22C55E',
  },
  {
    title: 'Open repository details',
    description:
      'Move into an individual repository when profile-level analytics are not enough for your investigation.',
    accentColor: '#F97316',
  },
];

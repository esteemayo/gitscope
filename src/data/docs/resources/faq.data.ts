import {
  BarChart3,
  BookOpen,
  GitBranch,
  HelpCircle,
  LockKeyhole,
  Search,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { DocsFeatureCardType } from '@/types/docs/featureCard';
import { DocsFeatureItemType } from '@/types/docs/featureItem';

export const aboutGitScope: DocsFeatureCardType[] = [
  {
    icon: GitHubLogoIcon,
    title: 'What is GitScope?',
    description:
      'GitScope is a GitHub analytics platform for exploring developer profiles, repositories, languages, and contribution activity.',
    accentColor: '#8B5CF6',
  },
  {
    icon: BarChart3,
    title: 'What can I analyze?',
    description:
      'GitScope provides analytics across profile information, repositories, programming languages, and GitHub contribution activity.',
    accentColor: '#06B6D4',
  },
  {
    icon: Search,
    title: 'Can I search for a developer?',
    description:
      'GitScope supports GitHub profile exploration using a GitHub username.',
    accentColor: '#22C55E',
  },
  {
    icon: GitBranch,
    title: 'Can I explore repositories?',
    description:
      "Repository-level information and analytics can be explored through GitScope's repository features.",
    accentColor: '#F59E0B',
  },
];

export const faqAnalytics: DocsFeatureItemType[] = [
  {
    title: 'What data does GitScope analyze?',
    description:
      'GitScope works with GitHub profile, repository, language, and contribution data available to the platform.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Are analytics static?',
    description:
      'Analytics represent data available to GitScope at the time the relevant information is retrieved or processed.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Can I compare developers?',
    description:
      'GitScope provides a comparison feature for examining supported metrics and development activity across two GitHub profiles.',
    accentColor: '#22C55E',
  },
  {
    title: 'Can I sort repository data?',
    description:
      'Supported repository views can provide sorting and exploration options for working with repository metrics.',
    accentColor: '#F59E0B',
  },
];

export const githubAuthentication: DocsFeatureItemType[] = [
  {
    title: 'Why does GitScope use GitHub authentication?',
    description:
      'Authentication establishes the user context required for protected GitScope functionality and GitHub data access.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Does every feature require authentication?',
    description:
      'No. GitScope can provide public functionality while certain features require an authenticated session.',
    accentColor: '#22C55E',
  },
  {
    title: 'What does authentication provide?',
    description:
      'Authentication allows GitScope to establish an authenticated context for functionality that requires user authorization.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Can GitHub access be revoked?',
    description:
      'GitHub access can be managed through the relevant GitHub account authorization settings.',
    accentColor: '#EF4444',
  },
];

export const faqDocumentations: DocsFeatureCardType[] = [
  {
    icon: BookOpen,
    title: 'Where should I start?',
    description:
      'Start with the documentation introduction to understand GitScope and how its core concepts fit together.',
    accentColor: '#8B5CF6',
  },
  {
    icon: HelpCircle,
    title: 'Where can I find feature details?',
    description:
      'Use the Features section for focused explanations of GitHub Analytics, Repository Insights, Comparisons, Contributions, and Export & Sharing.',
    accentColor: '#06B6D4',
  },
  {
    icon: LockKeyhole,
    title: 'Where is authentication documented?',
    description:
      'Use the Authentication section for GitHub authentication, permissions, sessions, and privacy.',
    accentColor: '#22C55E',
  },
  {
    icon: Search,
    title: 'Where are workflows documented?',
    description:
      'Use the Guides section for task-oriented instructions covering common GitScope workflows.',
    accentColor: '#F59E0B',
  },
];

export const apiQuestions: DocsFeatureItemType[] = [
  {
    title: 'Does GitScope have an API?',
    description:
      'GitScope includes API documentation covering authentication, endpoints, responses, and errors.',
    accentColor: '#8B5CF6',
  },
  {
    title: 'Where can I learn about API authentication?',
    description:
      'The API Authentication page explains how authentication applies to protected API functionality.',
    accentColor: '#06B6D4',
  },
  {
    title: 'Where can I find API endpoints?',
    description:
      'The API Endpoints page explains how API resources are organized and how to identify the appropriate resource.',
    accentColor: '#22C55E',
  },
  {
    title: 'How should API errors be handled?',
    description:
      'The API Errors page explains common failure conditions and principles for handling unsuccessful requests.',
    accentColor: '#EF4444',
  },
];

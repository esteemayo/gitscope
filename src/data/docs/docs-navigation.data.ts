import {
  BarChart3,
  BookOpen,
  Code2,
  Compass,
  FileText,
  GitCompareArrows,
  LockKeyhole,
  Rocket,
  Settings2,
  ShieldCheck,
  Users,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { DocsNavSection } from '@/types/docs/docsSidebar';

export const docsNavigation: DocsNavSection[] = [
  {
    title: 'Introduction',
    items: [
      {
        title: 'Getting Started',
        href: '/documentation',
        icon: Rocket,
        description: 'Learn the fundamentals and start using GitScope.',
      },
      {
        title: 'How GitScope Works',
        href: '/documentation/introduction/how-it-works',
        icon: Compass,
        description:
          'Understand how GitScope turns GitHub data into analytics.',
      },
      {
        title: 'Key Concepts',
        href: '/documentation/introduction/concepts',
        icon: BookOpen,
        description: 'Learn the core concepts behind GitScope.',
      },
    ],
  },
  {
    title: 'Features',
    items: [
      {
        title: 'GitHub Analytics',
        href: '/documentation/features/github-analytics',
        icon: GitHubLogoIcon,
        description: 'Explore GitHub profiles through structured analytics.',
      },
      {
        title: 'Repository Insights',
        href: '/documentation/features/repository-insights',
        icon: BarChart3,
        description: 'Understand repository activity and performance.',
      },
      {
        title: 'Compare Developers',
        href: '/documentation/features/compare-developers',
        icon: GitCompareArrows,
        description: 'Compare GitHub profiles using measurable metrics.',
      },
      {
        title: 'Contributions',
        href: '/documentation/features/contributions',
        icon: Users,
        description: 'Explore contribution patterns and activity.',
      },
      {
        title: 'Export & Sharing',
        href: '/documentation/features/export-sharing',
        icon: FileText,
        description: 'Share and export GitScope analytics.',
      },
    ],
  },
  {
    title: 'Analytics',
    items: [
      {
        title: 'Overview',
        href: '/documentation/analytics',
        icon: BarChart3,
        description: "Understand GitScope's analytics model.",
      },
      {
        title: 'Repository Metrics',
        href: '/documentation/analytics/repository-metrics',
        icon: Settings2,
        description: 'Understand repository-level metrics.',
      },
      {
        title: 'Language Analytics',
        href: '/documentation/analytics/language',
        icon: Code2,
        description: 'Explore language usage across repositories.',
      },
      {
        title: 'Contribution Analytics',
        href: '/documentation/analytics/contributions',
        icon: Users,
        description: 'Analyze contribution activity.',
      },
    ],
  },
  {
    title: 'Authentication',
    items: [
      {
        title: 'GitHub Authentication',
        href: '/documentation/authentication',
        icon: GitHubLogoIcon,
        description: 'Understand GitHub authentication.',
      },
      {
        title: 'Permissions',
        href: '/documentation/authentication/permissions',
        icon: LockKeyhole,
        description: 'Understand requested GitHub permissions.',
      },
      {
        title: 'Sessions',
        href: '/documentation/authentication/sessions',
        icon: ShieldCheck,
        description: 'Understand authenticated sessions.',
      },
      {
        title: 'Privacy',
        href: '/documentation/authentication/privacy',
        icon: ShieldCheck,
        description: 'Understand how authentication relates to privacy.',
      },
    ],
  },
  {
    title: 'Guides',
    items: [
      {
        title: 'Analyze a Profile',
        href: '/documentation/guides/analyze-profile',
        description: 'Learn how to analyze a GitHub profile.',
      },
      {
        title: 'Compare Developers',
        href: '/documentation/guides/compare',
        description: 'Learn how to compare developers.',
      },
      {
        title: 'Export Analytics',
        href: '/documentation/guides/export',
        description: 'Learn how to export analytics.',
      },
      {
        title: 'Share a Profile',
        href: '/documentation/guides/share',
        description: 'Learn how to share profile analytics.',
      },
    ],
  },
  {
    title: 'API',
    items: [
      {
        title: 'Overview',
        href: '/documentation/api',
        icon: Code2,
        description: 'Learn about the GitScope API.',
      },
      {
        title: 'Authentication',
        href: '/documentation/api/authentication',
        icon: LockKeyhole,
        description: 'Authenticate API requests.',
      },
      {
        title: 'Endpoints',
        href: '/documentation/api/endpoints',
        icon: Code2,
        description: 'Explore available API endpoints.',
      },
      {
        title: 'Response',
        href: '/documentation/api/response',
        description: 'Understand API response structures.',
      },
      {
        title: 'Errors',
        href: '/documentation/api/errors',
        description: 'Understand API errors and status codes.',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'FAQ',
        href: '/documentation/resources/faq',
        description: 'Frequently asked GitScope questions.',
      },
      {
        title: 'Changelog',
        href: '/documentation/resources/changelog',
        description: 'See what changed across GitScope.',
      },
      {
        title: 'Roadmap',
        href: '/documentation/resources/roadmap',
        description: 'See where GitScope is heading.',
      },
    ],
  },
];

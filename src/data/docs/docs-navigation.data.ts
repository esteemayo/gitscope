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
      },
      {
        title: 'How GitScope Works',
        href: '/documentation/introduction/how-it-works',
        icon: Compass,
      },
      {
        title: 'Key Concepts',
        href: '//documentation/introduction/concepts',
        icon: BookOpen,
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
      },
      {
        title: 'Repository Insights',
        href: '/documentation/features/repository-insights',
        icon: BarChart3,
      },
      {
        title: 'Compare Developers',
        href: '/documentation/features/compare-developers',
        icon: GitCompareArrows,
      },
      {
        title: 'Contributions',
        href: '/documentation/features/contributions',
        icon: Users,
      },
      {
        title: 'Export & Sharing',
        href: '/documentation/features/export-sharing',
        icon: FileText,
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
      },
      {
        title: 'Repository Metrics',
        href: '/documentation/analytics/repository-metrics',
        icon: Settings2,
      },
      {
        title: 'Language Analytics',
        href: '/documentation/analytics/language',
        icon: Code2,
      },
      {
        title: 'Contribution Analytics',
        href: '/documentation/analytics/contributions',
        icon: Users,
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
      },
      {
        title: 'Permissions',
        href: '/documentation/authentication/permissions',
        icon: LockKeyhole,
      },
      {
        title: 'Sessions',
        href: '/documentation/authentication/sessions',
        icon: ShieldCheck,
      },
      {
        title: 'Privacy',
        href: '/documentation/authentication/privacy',
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: 'Guides',
    items: [
      {
        title: 'Analyze a Profile',
        href: '/documentation/guides/analyze-profile',
      },
      {
        title: 'Compare Developers',
        href: '/documentation/guides/compare',
      },
      {
        title: 'Export Analytics',
        href: '/documentation/guides/export',
      },
      {
        title: 'Share a Profile',
        href: '/documentation/guides/share',
      },
    ],
  },
  {
    title: 'API',
    items: [
      {
        title: 'Overview',
        href: '/documentation/api/authentication',
        icon: LockKeyhole,
      },
      {
        title: 'Endpoints',
        href: '/documentation/api/endpoints',
        icon: Code2,
      },
      {
        title: 'Response',
        href: '/documentation/api/response',
      },
      {
        title: 'Errors',
        href: '/documentation/api/errors',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'FAQ',
        href: '/documentation/resources/faq',
      },
      {
        title: 'Changelog',
        href: '/documentation/resources/changelog',
      },
      {
        title: 'Roadmap',
        href: '/documentation/resources/roadmap',
      },
    ],
  },
];

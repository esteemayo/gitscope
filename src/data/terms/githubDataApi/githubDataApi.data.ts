import {
  BarChart3,
  Database,
  Gauge,
  GitFork,
  KeyRound,
  LineChart,
  LockKeyhole,
  Network,
  NetworkIcon,
  ShieldCheck,
  Star,
  UserRound,
} from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import {
  GitHubApiNoticeType,
  GitHubDataAccessGroupType,
  GitHubDataAccessItemType,
} from '@/types/terms/githubDataApi';

export const githubDataGroups: GitHubDataAccessGroupType[] = [
  {
    id: 'data-access',
    eyebrow: 'Data access',
    title: 'GitHub data we use',
    description:
      'GitScope processes supported GitHub information required to generate the analytics displayed in the application.',
    icon: Database,
    accentColor: '#60A5FA',
    items: [
      {
        id: 'profile-data',
        title: 'Profile information',
        description:
          'GitScope may process supported GitHub profile information associated with an authenticated account, such as the public identity and profile details returned through GitHub.',
        icon: UserRound,
        accentColor: '#60A5FA',
      },
      {
        id: 'repositories',
        title: 'Repository information',
        description:
          'Repository metadata is used to present repository statistics, rankings, activity information, and other supported analytics.',
        icon: GitHubLogoIcon,
        accentColor: '#A78BFA',
      },
      {
        id: 'stars',
        title: 'Stars and forks',
        description:
          'Repository stars and forks contribute to metrics used to compare and evaluate repository activity.',
        icon: Star,
        accentColor: '#FBBF24',
      },
      {
        id: 'languages',
        title: 'Language information',
        description:
          'GitScope uses repository language information to produce language-related analytics and visualizations.',
        icon: BarChart3,
        accentColor: '#34D399',
      },
      {
        id: 'contributions',
        title: 'Contribution activity',
        description:
          'Supported contribution information is used to present activity patterns and contribution analytics.',
        icon: LineChart,
        accentColor: '#F472B6',
      },
      {
        id: 'repository-network',
        title: 'Repository relationship',
        description:
          'Supported repository relationships, such as fork information, can be used to provide additional repository context.',
        icon: GitFork,
        accentColor: '#FB923C',
      },
    ] as GitHubDataAccessItemType[],
  },
  {
    id: 'api-operation',
    eyebrow: 'API operation',
    title: 'How GitHub API usage works',
    description:
      'GitScope communicates with GitHub through supported API mechanisms to retrieve the information required by its features.',
    icon: Network,
    accentColor: '#A78BFA',
    items: [
      {
        id: 'authorized-requests',
        title: 'Authorized requests',
        description:
          'API requests are made within the scope of the GitHub authorization available to the authenticated user.',
        icon: KeyRound,
        accentColor: '#A78BFA',
      },
      {
        id: 'analytics-processing',
        title: 'Analytics processing',
        description:
          'Retrieved GitHub information is processed to calculate metrics, generate visualizations, and provide supported analytics.',
        icon: BarChart3,
        accentColor: '#38BDF8',
      },
      {
        id: 'api-limits',
        title: 'API limitations',
        description:
          "GitScope is subject to limitations imposed by GitHub's API infrastructure, including request availability and applicable rate limits.",
        icon: Gauge,
        accentColor: '#F59E0B',
      },
      {
        id: 'service-dependency',
        title: 'Third-party dependency',
        description:
          "Some GitScope functionality depends on GitHub's APIs and services remaining available and operating as expected.",
        icon: NetworkIcon,
        accentColor: '#F472B6',
      },
    ] as GitHubDataAccessItemType[],
  },
  {
    id: 'data-protection',
    eyebrow: 'Data handling',
    title: 'Protection and access',
    description:
      "GitScope is designed to limit how GitHub information is handled within the application and to keep access aligned with the application's supported functionality.",
    icon: ShieldCheck,
    accentColor: '#34D399',
    items: [
      {
        id: 'limited-purpose',
        title: 'Purpose-based processing',
        description:
          'GitHub information is processed to provide the analytics and application functionality described by GitScope.',
        icon: Database,
        accentColor: '#34D399',
      },
      {
        id: 'authentication-security',
        title: 'Authentication security',
        description:
          'GitHub authentication is handled through the supported authentication flow rather than requiring users to provide their GitHub password directly to GitScope.',
        icon: LockKeyhole,
        accentColor: '#60A5FA',
      },
      {
        id: 'access-controls',
        title: 'Controlled access',
        description:
          "Access to GitHub-connected functionality is governed by the apllication's authentication and authorization controls.",
        icon: ShieldCheck,
        accentColor: '#A78BFA',
      },
      {
        id: 'analytics-output',
        title: 'Analytics output',
        description:
          'GitHub information is transformed into metrics, summaries, charts, and other analytical outputs presented through GitScope.',
        icon: LineChart,
        accentColor: '#FBBF24',
      },
    ] as GitHubDataAccessItemType[],
  },
];

export const githubDataNotice: GitHubApiNoticeType = {
  title: 'GitHub remains an independent service',
  description:
    "GitScope does not control GitHub's availability, API behavior, policies, or changes to its services. Changes made by GitHub can affect the availability or behavior of GitScope features that depend on GitHub APIs.",
  icon: GitHubLogoIcon,
  accentColor: '#F59E0B',
};

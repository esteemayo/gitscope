import { BarChart3, Globe, ShieldCheck, Workflow } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { UsageStepItem } from '@/types/privacy/howWeUseYourInfo';

export const usageSteps: UsageStepItem[] = [
  {
    id: 'access',
    step: 1,
    title: 'Explore GitScope',
    description:
      'You can search GitHub users, browse public repositories, and view analytics without creating an account or signing in. GitScope uses publicly available GitHub data to provide these insights.',
    icon: Globe,
    accentColor: '#4F46E5',
    features: [
      'Search public GitHub profiles',
      'Browse repository analytics',
      'No account required',
    ],
    documentation: {
      label: 'Browse GitScope',
      href: '#',
    },
  },
  {
    id: 'authenticate',
    step: 2,
    title: 'Unlock Personalized Features',
    description:
      'When you choose to sign in with GitHub, GitScope securely authenticates your account to unlock personalized experiences. Authentication is only required for features tied to your account.',
    icon: GitHubLogoIcon,
    accentColor: '#22C55E',
    features: [
      'Personalized dashboard',
      'Repository detail pages',
      'Compare GitHub users',
      'Your analytics profile',
    ],
    documentation: {
      label: 'View Authentication Policy',
      href: '#',
    },
  },
  {
    id: 'repository-data',
    step: 3,
    title: 'Process Repository Data',
    description:
      'GitScope retrieves the public repository information needed to generate insights, visualizations, and repository statistics. Only the data required for the requested feature is processed.',
    icon: Workflow,
    accentColor: '#0EA5E9',
    features: [
      'Repository metadata',
      'Languages and topics',
      'Stars, forks, and contributors',
    ],
    documentation: {
      label: 'See Collected Information',
      href: '#',
    },
  },
  {
    id: 'analytics',
    step: 4,
    title: 'Generate Meaningful Insights',
    description:
      'Repository data is transformed into interactive charts, performance metrics, contribution summaries, and other visual analytics that help you better understand GitHub activity.',
    icon: BarChart3,
    accentColor: '#8B5CF6',
    features: [
      'Interactive visualizations',
      'Contribution summaries',
      'Repository performance metrics',
    ],
    documentation: {
      label: 'Explore Analytics',
      href: '#',
    },
  },
  {
    id: 'security',
    step: 5,
    title: 'Protect Your Information',
    description:
      'Throughout every interaction, GitScope applies secure authentication, encrypted communication, and responsible data handling practices to protect your information and maintain your trust.',
    icon: ShieldCheck,
    accentColor: '#EF4444',
    features: [
      'Encrypted communication',
      'Secure session management',
      'Privacy-first data handling',
    ],
    documentation: {
      label: 'View Security Practices',
      href: '#',
    },
  },
];

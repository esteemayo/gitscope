import { BarChart3, Database } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { ThirdPartyService } from '@/types/privacy/thirdPartyServices';

export const thirdPartyServices: ThirdPartyService[] = [
  {
    id: 'github',
    name: 'GitHub',
    category: 'Authentication & GitHub Data',
    description:
      'GitScope connects to GitHub to authenticate users and retrieve the GitHub data required for analytics.',
    purpose:
      'Authentication, repository information, profile data, contributions, and other GitHub analytics.',
    dataShared:
      'GitHub account information and the GitHub resources permitted through the authorization flow.',
    requirement: 'Optional',
    icon: GitHubLogoIcon,
    accentColor: '#8B5CF6',
  },
  {
    id: 'analytics',
    name: 'Analytics Infrastructure',
    category: 'Product Analytics',
    description:
      'Analytics infrastructure helps GitScope understand how the application is used and identify areas for improvement.',
    purpose:
      'Measure product usage, diagnose issues, and improve application performance.',
    dataShared:
      'Limited usage information and technical events required for product analysis.',
    requirement: 'Optional',
    icon: BarChart3,
    accentColor: '#0EA5E9',
  },
  {
    id: 'storage',
    name: 'Application Storage',
    category: 'Application Infrastructure',
    description:
      'Application storage supports the data required for GitScope features and authenticated experiences.',
    purpose: 'Store application data required to provide requested features.',
    dataShared:
      'Only the application data required for the relevant GitScope feature.',
    requirement: 'Required',
    icon: Database,
    accentColor: '#22C55E',
  },
];

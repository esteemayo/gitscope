import { BarChart3, CheckCircle2, Database, LockKeyhole, Server, ShieldCheck } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { ThirdPartyDataFlow, ThirdPartyService } from '@/types/privacy/thirdPartyServices';
import { ThirdPartyServicesNoticeProps } from '@/types/privacy/thirdPartyServices/third.party.services.notice.type';

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

export const thirdPartyDataFlow: ThirdPartyDataFlow = {
  badge: 'Data Flow',
  title: 'How Information Moves.',
  description:
    'GitScope limits third-party interactions to the information required for the feature you request. Authentication and data retrieval follow the permissions granted during the GitHub authorization process.',
  steps: [
    {
      id: 'request',
      label: 'You Request',
      description:
        'You request a GitHub profile, repository analysis, or authenticated feature.',
      icon: CheckCircle2,
      accentColor: '#4F46E5',
    },
    {
      id: 'authorize',
      label: 'GitHub Authorizes',
      description:
        'GitHub verifies the requested permissions and provides access according to your authorization.',
      icon: GitHubLogoIcon,
      accentColor: '#8B5CF6',
    },
    {
      id: 'process',
      label: 'GitScope Processes',
      description:
        'GitScope processes the permitted information to generate analytics and requested application features.',
      icon: Server,
      accentColor: '#0EA5E7',
    },
    {
      id: 'protect',
      label: 'Access Is Protected',
      description:
        'Authentication and application controls limit access to protected functionality and data.',
      icon: LockKeyhole,
      accentColor: '#22C55E',
    },
  ],
};

export const thirdPartyServicesNotice: ThirdPartyServicesNoticeProps = {
  badge: 'Your Data Stays Controlled',
  title: 'Third-party Access Is Limited.',
  description:
    'GitScope only interacts with external services when they are required to provide a requested feature. Access follows the permissions and purpose associated with each integration.',
  icon: ShieldCheck,
  accentColor: '#22C55E',
  points: [
    'Third-party services do not receive unrestricted access to your GitHub account.',
    'GitScope requests only the permissions required for its authenticated features.',
    'Public GitHub analytics remain available without authentication.',
    'You can revoke GitHub authorization through your GitHub account settings.',
  ],
};

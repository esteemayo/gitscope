import { CheckCircle2, LockKeyhole, Server } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import { ThirdPartyDataFlow } from '@/types/privacy/thirdPartyServices';

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

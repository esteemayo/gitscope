import { Globe2, KeyRound, Network, ShieldCheck, Webhook } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import {
  ThirdPartyBoundaryType,
  ThirdPartyServiceType,
} from '@/types/terms/thirdPartyServices';

export const thirdPartyServices: ThirdPartyServiceType[] = [
  {
    id: 'github',
    name: 'GitHub',
    category: 'Data provider',
    purpose: 'Repository and profile analytics',
    description:
      'GitScope uses GitHub APIs to retrieve supported GitHub information required to generate analytics and repository insights.',
    icon: GitHubLogoIcon,
    accentColor: '#8B5CF6',
    status: 'required',
  },
  {
    id: 'authentication',
    name: 'GitHub Authentication',
    category: 'Authentication',
    purpose: 'Account authentication',
    description:
      'GitHub authentication allows supported GitScope features to associate an authenticated GitHub account with the application.',
    icon: KeyRound,
    accentColor: '#60A5FA',
    status: 'integrated',
  },
  {
    id: 'api',
    name: 'GitHub API',
    category: 'API integration',
    purpose: 'Data retrieval',
    description:
      'GitScope communicates with GitHub through supported API mechanisms to retrieve information used by analytics features.',
    icon: Webhook,
    accentColor: '#34D399',
    status: 'required',
  },
  {
    id: 'infrastructure',
    name: 'Hosting & Infrastructure',
    category: 'Infrastructure',
    purpose: 'Application delivery',
    description:
      'GitScope relies on infrastructure providers to host, deliver, monitor, and operate parts of the application environment.',
    icon: Globe2,
    accentColor: '#F59E0B',
    status: 'integrated',
  },
];

export const thirdPartyBoundaries: ThirdPartyBoundaryType[] = [
  {
    title: 'External provider responsibility',
    description:
      'GitScope does not control the availability, policies, security practices, or independent processing performed by third-party providers.',
    icon: ShieldCheck,
    accentColor: '#60A5FA',
  },
  {
    title: 'Separate terms apply',
    description:
      "Your integration with an external service remains subject to that provider's own terms, policies, and applicable conditions.",
    icon: Globe2,
    accentColor: '#A78BFA',
  },
  {
    title: 'Integration boundaries',
    description:
      'GitScope only relies on external services for the functionality supported by the relevant integration and does not assume responsibility for unrelated provider activity.',
    icon: Network,
    accentColor: '#34D399',
  },
];

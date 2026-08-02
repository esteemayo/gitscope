import { Ban, Database, Mail } from 'lucide-react';

import { PermissionItem } from '@/types/privacy';
import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';

export const githubPermissions: PermissionItem[] = [
  {
    id: 'public-profile',
    title: 'Public GitHub Profile',
    description:
      'GitScope can access your public GitHub profile after you choose to sign in with GitHub.',
    whyWeNeedIt:
      'This information personalizes your dashboard and displays your GitHub identity throughout the application.',
    icon: GitHubLogoIcon,
    accentColor: '#4F46E5',
    status: 'required',
    grantedAccess: ['Username', 'Display name', 'Avatar', 'Bio', 'Profile URL'],
  },
  {
    id: 'repository-data',
    title: 'Public Repository Data',
    description:
      'GitScope reads public repository metadata to generate repository analytics and visual insights.',
    whyWeNeedIt:
      'Repository information powers charts, contribution summaries, language statistics, and repository performance metrics.',
    icon: Database,
    accentColor: '#0EA5E9',
    status: 'required',
    grantedAccess: [
      'Repository names',
      'Stars',
      'Forks',
      'Languages',
      'Topics',
      'Contributors',
    ],
  },
  {
    id: 'email',
    title: 'Email Address',
    description:
      'GitScope only accesses your email address if GitHub makes it available and it is required for account identification.',
    whyWeNeedIt:
      'Your email is never displayed publicly and is not used for marketing communications.',
    icon: Mail,
    accentColor: '#F59E0B',
    status: 'optional',
    grantedAccess: ['Primary email address'],
  },
  {
    id: 'repository-write',
    title: 'Repository Modification',
    description:
      'GitScope never requests permission to create, edit, delete, or push changes to your repositories.',
    whyWeNeedIt:
      'The platform is designed as a read-only analytics application and does not require write access to your GitHub account.',
    icon: Ban,
    accentColor: '#22C55E',
    status: 'never',
    grantedAccess: [
      'No repository write access',
      'No issue creation',
      'No pull request creation',
      'No repository deletion',
    ],
  },
];

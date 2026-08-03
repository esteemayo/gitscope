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
    grantedAccess: [
      { id: 'username', label: 'Username' },
      { id: 'name', label: 'Display name' },
      { id: 'avatar', label: 'Avatar' },
      { id: 'bio', label: 'Bio' },
      { id: 'url', label: 'Profile URL' },
    ],
    summary:
      'Used to personalize your GitScope experience after you choose to sign in.',
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
      { id: 'repo-names', label: 'Repository names' },
      { id: 'stars', label: 'Stars' },
      { id: 'forks', label: 'Forks' },
      { id: 'languages', label: 'Languages' },
      { id: 'topics', label: 'Topics' },
      { id: 'contributors', label: 'Contributors' },
    ],
    summary:
      'Read-only repository information powers analytics, charts, and insights.',
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
    grantedAccess: [{ id: 'email', label: 'Primary email address' }],
    summary:
      'Accessed only when available and only when needed for account identification.',
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
      { id: 'write-access', label: 'No repository write access' },
      { id: 'issue', label: 'No issue creation' },
      { id: 'pull-request', label: 'No pull request creation' },
      { id: 'deletion', label: 'No repository deletion' },
    ],
    summary:
      'GitScope never requests permission to modify your repositories or GitHub content.',
  },
];

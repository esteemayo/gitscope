import { Activity, Database } from 'lucide-react';
import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';

import {
  CollectionCategoryItem,
  InformationCollectedStats,
} from '@/types/privacy/information';

export const informationCollectedStats: InformationCollectedStats[] = [
  {
    id: 'categories',
    label: 'Collection Categories',
    value: '3',
  },
  {
    id: 'permissions',
    label: 'GitHub Permissions',
    value: 'Read-only',
  },
  {
    id: 'sensitive',
    label: 'Sensitive Data Stored',
    value: 'None',
  },
];

export const informationCollected: CollectionCategoryItem[] = [
  {
    id: 'github-profile',
    title: 'GitHub Profile',
    description:
      'Basic public information retrieved from your GitHub account to personalize analytics and display your profile.',
    icon: GitHubLogoIcon,
    accentColor: '#4F46E5',
    items: [
      'Username',
      'Display name',
      'Profile avatar',
      'Biography',
      'Followers and following',
      'Public profile URL',
    ],
  },
  {
    id: 'repositories',
    title: 'Repository Data',
    description:
      'Repository information used to generate analytics, charts, contribution summaries, and language insights.',
    icon: Database,
    accentColor: '#22C55E',
    items: [
      'Repository names',
      'Stars',
      'Forks',
      'Languages',
      'Topics',
      'Contributors',
      'Commit history',
    ],
  },
  {
    id: 'usage',
    title: 'Usage Information',
    description:
      'Limited application data collected to improve usability, remember preferences, and optimize performance.',
    icon: Activity,
    accentColor: '#F59E0B',
    items: [
      'Theme preference',
      'Browser information',
      'Device type',
      'Recent searches',
      'Cached analytics',
      'Local preferences',
    ],
  },
];

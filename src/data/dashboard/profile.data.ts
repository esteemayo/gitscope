import { GitHubProfile, ProfileStat } from '@/types/dashboard';

export const MOCK_PROFILE: GitHubProfile = {
  id: 583231,
  login: 'octocat',
  name: 'The Octocat',
  avatar_url: 'https://github.com/octocat.png',
  html_url: 'https://github.com/octocat',
  bio: 'A developer exploring open source, building tools, and sharing ideas.',
  company: '@github',
  location: 'San Francisco',
  blog: 'https://github.blog',
  twitter_username: 'github',
  public_repos: 42,
  followers: 1200,
  following: 180,
  created_at: '2011-01-25T18:44:36Z',
};

export const MOCK_PROFILE_STATS: ProfileStat[] = [
  {
    id: 'repositories',
    label: 'Repositories',
    value: 42,
    description: 'Public projects',
    icon: 'repository',
    accentColor: '#3B82F6',
  },
  {
    id: 'followers',
    label: 'Followers',
    value: 1200,
    description: 'Developer audience',
    icon: 'users',
    accentColor: '#F59E0B',
  },
  {
    id: 'following',
    label: 'Following',
    value: 1280,
    description: 'Developers followed',
    icon: 'user-round-plus',
    accentColor: '#10B981',
  },
  {
    id: 'account-age',
    label: 'On GitHub',
    value: 186,
    description: 'Account age',
    icon: 'calendar',
    accentColor: '#8B5CF6',
  },
];

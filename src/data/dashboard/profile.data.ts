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
    accentColor: '#60A5FA',
  },
  {
    id: 'stars',
    label: 'Stars',
    value: 1280,
    description: 'Across repositories',
    icon: 'star',
    accentColor: '#FBBF24',
  },
  {
    id: 'followers',
    label: 'Followers',
    value: 1200,
    description: 'Developer audience',
    icon: 'users',
    accentColor: '#34D399',
  },
  {
    id: 'forks',
    label: 'Forks',
    value: 186,
    description: 'Community reuse',
    icon: 'git-fork',
    accentColor: '#8B5CF6',
  },
];

import { GitHubProfile, ProfileStat } from '@/types/repository.type';

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
    description: 'Public repositories',
    icon: 'repository',
  },
  {
    id: 'stars',
    label: 'Stars',
    value: 1280,
    description: 'Stars across repositories',
    icon: 'star',
  },
  {
    id: 'followers',
    label: 'Followers',
    value: 1200,
    description: 'Developer followers',
    icon: 'users',
  },
  {
    id: 'forks',
    label: 'Forks',
    value: 186,
    description: 'Forks across repositories',
    icon: 'git-fork',
  },
];

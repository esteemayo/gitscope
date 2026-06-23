import { AchievementType, GithubUser, RepositoryType } from '@/types/profile';

export const mockUser: GithubUser = {
  id: 1,
  login: 'esteemayo',
  name: 'Emmanuel Adebayo',
  email: 'eadebayo15@gmail.com',
  avatar_url: '',
  bio: 'Frontend developer building modern developer experiences.',
  location: 'Lagos, Nigeria',
  company: 'Apple Inc.',
  twitter_username: 'esteem_ayo',
  followers: 254,
  following: 82,
  public_repos: 64,
  created_at: '2019-07-24T23:23:31Z',
  updated_at: '2021-09-30T17:45:07Z',
};

export const mockAchievement: AchievementType[] = [
  {
    id: 'followers',
    icon: '',
    title: '100+ Followers',
    description: 'Reached over 100 GitHub followers.',
  },
  {
    id: 'opensource',
    icon: '',
    title: 'Open Source Explorer',
    description: 'Published more than 50 repositories.',
  },
  {
    id: 'veteran',
    icon: '',
    title: 'Veteran Developer.',
    description: 'GitHub member for more than 5 years.',
  },
  {
    id: 'popular',
    icon: '',
    title: 'Popular Creator',
    description: 'Built repositories with strong community interest.',
  },
];

export const mockRepositories: RepositoryType[] = [
  {
    id: 1,
    name: 'GitScope',
    description: 'Modern GitHub analytics platform.',
    language: 'TypeScript',
    stargazers_count: 65,
    forks_count: 18,
    updated_at: '2026-06-22T00:25:15Z',
    html_url: '#',
  },
  {
    id: 2,
    name: 'Veyra',
    description: 'Gadget authenticity verification platform.',
    language: 'TypeScript',
    stargazers_count: 31,
    forks_count: 7,
    updated_at: '2026-06-21T00:23:27Z',
    html_url: '#',
  },
  {
    id: 3,
    name: 'Porfolio',
    description: 'Personal developer portfolio',
    language: 'TypeScript',
    stargazers_count: 12,
    forks_count: 2,
    updated_at: '2026-06-17T01:15:43Z',
    html_url: '#',
  },
];

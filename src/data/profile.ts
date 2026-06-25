import { FlameIcon, RocketIcon, StarIcon, TrophyIcon } from 'lucide-react';
import { AchievementType, GithubUser, RepositoryType } from '@/types/profile';

export const mockUser: GithubUser = {
  id: 1,
  login: 'esteemayo',
  name: 'Emmanuel Adebayo',
  email: 'eadebayo15@gmail.com',
  avatar_url: '',
  bio: 'Frontend developer building modern developer experiences.',
  location: 'Lagos, Nigeria',
  company: 'SwiftPay Nigeria',
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
    icon: FlameIcon,
    title: '100+ Followers',
    description: 'Reached over 100 GitHub followers.',
  },
  {
    id: 'opensource',
    icon: RocketIcon,
    title: 'Open Source Explorer',
    description: 'Published more than 50 repositories.',
  },
  {
    id: 'veteran',
    icon: TrophyIcon,
    title: 'Veteran Developer.',
    description: 'GitHub member for more than 5 years.',
  },
  {
    id: 'popular',
    icon: StarIcon,
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
    html_url: 'https://github.com/esteemayo/gitscope',
  },
  {
    id: 2,
    name: 'Veyra',
    description: 'Gadget authenticity verification platform.',
    language: 'TypeScript',
    stargazers_count: 31,
    forks_count: 7,
    updated_at: '2026-06-21T00:23:27Z',
    html_url: 'https://github.com/esteemayo/veyra',
  },
  {
    id: 3,
    name: 'Porfolio',
    description: 'Personal developer portfolio',
    language: 'TypeScript',
    stargazers_count: 12,
    forks_count: 2,
    updated_at: '2026-06-17T01:15:43Z',
    html_url: 'https://github.com/esteemayo/portfolio',
  },
  {
    id: 4,
    name: 'overlay-lab',
    description:
      'Headless popup system with stack-based state, compound components, and built-in accessibility (focus trap, overlay, scroll lock)',
    language: 'TypeScript',
    stargazers_count: 1000,
    forks_count: 2500,
    updated_at: '2023-02-02T01:33:26Z',
    html_url: 'https://github.com/esteemayo/overlay-lab',
  }
];

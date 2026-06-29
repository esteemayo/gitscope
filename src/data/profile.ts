import { FlameIcon, RocketIcon, StarIcon, TrophyIcon } from 'lucide-react';

import { Language } from '@/types/profile/language';
import { AchievementType, GithubUser, RepositoryType } from '@/types/profile';

export const mockUser: GithubUser = {
  id: 1,
  login: 'esteemayo',
  name: 'Emmanuel Adebayo',
  email: 'eadebayo15@gmail.com',
  avatar_url: '/avatar-2.jpg',
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
    name: 'gitscope',
    description: 'Modern GitHub analytics platform.',
    language: 'TypeScript',
    stargazers_count: 65,
    forks_count: 18,
    updated_at: '2026-06-22T00:25:15Z',
    html_url: 'https://github.com/esteemayo/gitscope',
  },
  {
    id: 2,
    name: 'veyra',
    description: 'Gadget authenticity verification platform.',
    language: 'TypeScript',
    stargazers_count: 31,
    forks_count: 7,
    updated_at: '2026-06-21T00:23:27Z',
    html_url: 'https://github.com/esteemayo/veyra',
  },
  {
    id: 3,
    name: 'porfolio',
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
  },
  {
    id: 5,
    name: 'albumz-api',
    description:
      'User password authentication and email verification using passport and passport-local.',
    language: 'JavaScript',
    stargazers_count: 25,
    forks_count: 300,
    updated_at: '2024-10-29T15:34:58Z',
    html_url: 'https://github.com/esteemayo/albumz-api',
  },
  {
    id: 6,
    name: 'ecommerce-store-client',
    description:
      'Odio maiores vel facilis molestias exercitationem reiciendis ad voluptatibus molestiae eligendi.',
    language: 'TypeScript',
    stargazers_count: 1500,
    forks_count: 1300,
    updated_at: '2021-05-12T21:32:19Z',
    html_url: 'https://github.com/esteemayo/ecommerce-store-client',
  },
  {
    id: 7,
    name: 'burgers',
    description:
      'Et nesciunt, eaque est totam inventore illum laborum ullam deserunt cupiditate nisi eos reprehenderit.',
    language: 'SCSS',
    stargazers_count: 1167,
    forks_count: 3120,
    updated_at: '2025-03-06T16:35:41Z',
    html_url: 'https://github.com/esteemayo/burgers',
  },
  {
    id: 8,
    name: 'react-3d-animation',
    description:
      'Incidunt omnis officiis est voluptas saepe, voluptate, provident molestiae quam iusto odit quo nam.',
    language: 'TypeScript',
    stargazers_count: 5000,
    forks_count: 4500,
    updated_at: '2026-01-04T01:30:28Z',
    html_url: 'https://github.com/esteemayo/react-3d-animation',
  },
  {
    id: 9,
    name: 'fusion-hub-client',
    description:
      'Iusto velit aperiam, odit minima perspiciatis eligendi illo perferendis earum expedita cum, inventore necessitatibus debitis? Doloremque eveniet reprehenderit, dolorem labore vitae quo.',
    language: 'TypeScript',
    stargazers_count: 6000,
    forks_count: 9000,
    updated_at: '2025-12-14T01:27:08Z',
    html_url: 'https://github.com/esteemayo/fusion-hub-client',
  },
  {
    id: 10,
    name: 'fusion-hub-server',
    description:
      'Quia, consequuntur mollitia ipsam rem ullam eveniet officia impedit debitis. Provident magnam est aspernatur deleniti ipsum deserunt itaque nulla omnis earum quidem.',
    language: 'JavaScript',
    stargazers_count: 5700,
    forks_count: 8900,
    updated_at: '2024-10-10T20:37:05Z',
    html_url: 'https://github.com/esteemayo/fusion-hub-server',
  },
];

export const mockLanguages: Language[] = [
  {
    name: 'TypeScript',
    percentage: 48.6,
    bytes: 1582340,
    color: '#3178C6',
  },
  {
    name: 'JavaScript',
    percentage: 21.3,
    bytes: 693842,
    color: '#F7DF1E',
  },
  {
    name: 'SCSS',
    percentage: 9.8,
    bytes: 318250,
    color: '#C6538C',
  },
  {
    name: 'HTML',
    percentage: 7.4,
    bytes: 240950,
    color: '#E34F26',
  },
  {
    name: 'CSS',
    percentage: 4.3,
    bytes: 139840,
    color: '#663399',
  },
  {
    name: 'MDX',
    percentage: 2.9,
    bytes: 94482,
    color: '#1B1F23',
  },
  {
    name: 'Shell',
    percentage: 2.4,
    bytes: 78122,
    color: '#89E051',
  },
  {
    name: 'Dockerfile',
    percentage: 1.8,
    bytes: 58650,
    color: '#384D54',
  },
  {
    name: 'Python',
    percentage: 0.9,
    bytes: 29204,
    color: '#3776AB',
  },
  {
    name: 'Go',
    percentage: 0.6,
    bytes: 19430,
    color: '#00ADD8',
  },
];

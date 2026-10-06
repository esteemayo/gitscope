import { RecentProfile } from '@/types/saved';

export const recentProfiles: RecentProfile[] = [
  {
    id: 100001,
    login: 'gaearon',
    name: 'Dan Abramov',
    avatarUrl: 'https://github.com/gaearon.png',
    bio: 'Working on things at Vercel.',
    repositories: 200,
    viewedAt: '2 min ago',
  },
  {
    id: 100002,
    login: 'torvalds',
    name: 'Linus Torvalds',
    avatarUrl: 'https://github.com/torvalds.png',
    bio: 'Creator of Linux and Git.',
    repositories: 8,
    viewedAt: '18 min ago',
  },
  {
    id: 100003,
    login: 'sindresorhus',
    name: 'Sindre Sorhus',
    avatarUrl: 'https://github.com/sindresorhus.png',
    bio: 'Full-time open-source developer.',
    repositories: 1300,
    viewedAt: '1 hour ago',
  },
];

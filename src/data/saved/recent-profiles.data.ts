import { RecentProfile } from '@/types/saved/recent';

export const recentProfiles: RecentProfile[] = [
  {
    id: 100001,
    login: 'gaearon',
    name: 'Dan Abramov',
    avatarUrl: 'https://github.com/gaearon.png',
    bio: 'Working on things at Vercel.',
    repositories: 200,
    accentColor: '#61DAFB',
    viewedAt: '2026-10-10T12:44:00.000Z',
  },
  {
    id: 100002,
    login: 'torvalds',
    name: 'Linus Torvalds',
    avatarUrl: 'https://github.com/torvalds.png',
    bio: 'Creator of Linux and Git.',
    repositories: 8,
    accentColor: '#F05032',
    viewedAt: '2026-10-10T08:50:00.000Z',
  },
  {
    id: 100003,
    login: 'sindresorhus',
    name: 'Sindre Sorhus',
    avatarUrl: 'https://github.com/sindresorhus.png',
    bio: 'Full-time open-source developer.',
    repositories: 1300,
    accentColor: '#22C55E',
    viewedAt: '2026-10-09T10:15:59.000Z',
  },
];

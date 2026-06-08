import {
  Commit,
  Contributor,
  LanguageData,
  TimelineEvent,
} from '@/types/repo/index';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Repository Created',
    description: 'Initial project structure and configuation added.',
    date: 'Jun 04, 2026',
  },
  {
    id: '2',
    title: 'Authentication Added',
    description: 'Implemented GitHub OAuth login flow',
    date: 'Jun 08, 2026',
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'Added repository insights and statistics.',
    date: 'Jun 14, 2026',
  },
  {
    id: '4',
    title: 'Language Charts',
    description: 'Introduced language distribution visualization.',
    date: 'Jun 20, 2026',
  },
  {
    id: '5',
    title: 'Performance Improvements',
    description: 'Reduced API requests and optimized caching.',
    date: 'Jun 24, 2026',
  },
];

export const languageData: LanguageData[] = [
  {
    name: 'TypeScript',
    percentage: 64,
    color: '#3178C6',
  },
  {
    name: 'SCSS',
    percentage: 18,
    color: '#CC6699',
  },
  {
    name: 'JavaScript',
    percentage: 11,
    color: '#F7DF1E',
  },
  {
    name: 'HTML',
    percentage: 5,
    color: '#E34F26',
  },
  {
    name: 'Other',
    percentage: 2,
    color: '#8B949E',
  },
];

export const contributors: Contributor[] = [
  {
    id: 1,
    login: 'esteemayo',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
    contributions: 182,
  },
  {
    id: 2,
    login: 'joshdev',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    contributions: 124,
  },
  {
    id: 3,
    login: 'sarahcodes',
    avatarUrl: 'https://i.pravatar.cc/150?img=13',
    contributions: 91,
  },
  {
    id: 4,
    login: 'michael-ui',
    avatarUrl: 'https://i.pravatar.cc/150?img=14',
    contributions: 73,
  },
  {
    id: 5,
    login: 'tom-react',
    avatarUrl: 'https://i.pravatar.cc/150?img=15',
    contributions: 51,
  },
  {
    id: 6,
    login: 'amy-dev',
    avatarUrl: 'https://i.pravatar.cc/150?img=16',
    contributions: 38,
  },
];

export const commits: Commit[] = [
  {
    sha: '4af12bc89fde',
    message: 'feat: add repository analytics overview',
    author: 'esteemayo',
    date: '2 hours ago',
  },
  {
    sha: '8ed91aa4c33f',
    message: 'feat: implement language breakdown chart',
    author: 'joshdev',
    date: '5 hours ago',
  },
  {
    sha: '1ac77de97bca',
    message: 'fix: correct contributor ranking calculation',
    author: 'sarahcodes',
    date: '1 day ago',
  },
  {
    sha: '7fa55bc12dd9',
    message: 'refactor: move chart components into shared module',
    author: 'esteemayo',
    date: '2 days ago',
  },
  {
    sha: '9ab44fcd93ef',
    message: 'style: update dashboard card spacing',
    author: 'michael-ui',
    date: '3 days ago',
  },
  {
    sha: '5de21acff10b',
    message: 'chore: upgrade dependencies',
    author: 'amy-dev',
    date: '4 days ago',
  },
  {
    sha: '3ce78baf22ea',
    message: 'feat: add repository health indicators',
    author: 'tom-react',
    date: '5 days ago',
  },
];

import { format } from 'date-fns';
import {
  AlertCircle,
  CalendarDays,
  Clock3,
  Code2,
  GitBranch,
  GitFork,
  Star,
} from 'lucide-react';

import {
  Commit,
  Contributor,
  LanguageData,
  RepoOverviewItem,
  TimelineEvent,
} from '@/types/repo/index';

export const overviewItems: RepoOverviewItem[] = [
  {
    id: 'stars',
    label: 'Stars',
    value: Number('2043').toLocaleString(),
    icon: Star,
  },
  {
    id: 'fork',
    label: 'Fork',
    value: Number('4320').toLocaleString(),
    icon: GitFork,
  },
  {
    id: 'issues',
    label: 'Issues',
    value: Number('50').toLocaleString(),
    icon: AlertCircle,
  },
  {
    id: 'language',
    label: 'Language',
    value: 'TypeScript',
    icon: Code2,
  },
  {
    id: 'created',
    label: 'Created',
    value: format(new Date('2025-10-29T15:34:58Z'), 'MMM d, yyyy'),
    icon: CalendarDays,
  },
  {
    id: 'updated',
    label: 'Updated',
    value: format(new Date('2025-10-29T15:34:58Z'), 'MMM d, yyyy'),
    icon: Clock3,
  },
  {
    id: 'branch',
    label: 'branch',
    value: 'Main',
    icon: GitBranch,
  },
];

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
    message: 'feat: add repository overview analytics cards',
    author: 'esteemayo',
    authorAvatar: 'https://i.pravatar.cc/150?img=11',
    date: '2 hours ago',
    htmlUrl: 'http://github.com/esteemayo/gitscope/commit/4af12bc',
    type: 'feat',
  },
  {
    sha: '8ed91aa4c33f',
    message: 'feat: resolve language chart percentage calculation',
    author: 'joshdev',
    authorAvatar: 'https://i.pravatar.cc/150?img=12',
    date: '5 hours ago',
    htmlUrl: 'http://github.com/esteemayo/gitscope/commit/8ed91aa',
    type: 'fix',
  },
  {
    sha: '1ac77de97bca',
    message: 'refactor: simplify repository service layer',
    author: 'sarahcodes',
    authorAvatar: 'https://i.pravatar.cc/150?img=13',
    date: '1 day ago',
    htmlUrl: 'http://github.com/esteemayo/gitscope/commit/1ac77de',
    type: 'refactor',
  },
  {
    sha: '7fa55bc12dd9',
    message: 'docs: update project setup instructions',
    author: 'esteemayo',
    authorAvatar: 'https://i.pravatar.cc/150?img=11',
    date: '2 days ago',
    htmlUrl: 'http://github.com/esteemayo/gitscope/commit/7fa55bc',
    type: 'docs',
  },
  {
    sha: '9ab44fcd93ef',
    message: 'style: improve repository sidebar spacing',
    author: 'michael-ui',
    authorAvatar: 'https://i.pravatar.cc/150?img=14',
    date: '3 days ago',
    htmlUrl: 'http://github.com/esteemayo/gitscope/commit/9ab44fc',
    type: 'style',
  },
  {
    sha: '5de21acff10b',
    message: 'feat: implement contributor ranking section',
    author: 'amy-dev',
    authorAvatar: 'https://i.pravatar.cc/150?img=16',
    date: '4 days ago',
    htmlUrl: 'http://github.com/esteemayo/gitscope/commit/5de21ac',
    type: 'feat',
  },
  {
    sha: '3ce78baf22ea',
    message: 'chore: upgrade Next.js and dependencies',
    author: 'tom-react',
    authorAvatar: 'https://i.pravatar.cc/150?img=15',
    date: '5 days ago',
    htmlUrl: 'http://github.com/esteemayo/gitscope/commit/3ce78ba',
    type: 'chore',
  },
  {
    sha: '6de8f1c4ab23d78',
    message: 'fix: upgrade Next.js and dependencies',
    author: 'esteemayo',
    authorAvatar: 'https://i.pravatar.cc/150?img=11',
    date: '1 week ago',
    htmlUrl: 'http://github.com/esteemayo/gitscope/commit/6de8f1c',
    type: 'fix',
  },
];

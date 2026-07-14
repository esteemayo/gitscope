import {
  ChartPoint,
  Language,
  TimelineItem,
} from '@/types/about/features/previews';
import { Download, Share2 } from 'lucide-react';

export const timelineActivities: TimelineItem[] = [
  {
    id: 1,
    title: 'Initial Commit',
    time: '2m ago',
    color: '#3b82f6',
  },
  {
    id: 2,
    title: 'Issue Closed',
    time: '15m ago',
    color: '#10b981',
  },
  {
    id: 3,
    title: 'Release v2.1',
    time: '1d ago',
    color: '#f59e0b',
  },
];

export const comparePreviewData = {
  leftUser: 'esteemayo',
  rightUser: 'vercel',
  leftStars: 12480,
  rightStars: 9875,
};

export const repositoryHealthData = {
  score: 95,
  activeIssues: 12,
  lastCommit: '2h ago',
};

export const analyticsPreviewData = {
  stars: 12400,
  forks: 842,
};

export const languagePreviewData: Language[] = [
  {
    id: 1,
    name: 'TypeScript',
    percentage: 46,
    color: '#3178C6',
  },
  {
    id: 2,
    name: 'SCSS',
    percentage: 24,
    color: '#CF649A',
  },
  {
    id: 3,
    name: 'JavaScript',
    percentage: 18,
    color: '#F7DF1E',
  },
  {
    id: 4,
    name: 'HTML',
    percentage: 12,
    color: '#E34F26',
  },
];

export const chartsPreviewData: ChartPoint[] = [
  {
    id: 1,
    value: 42,
  },
  {
    id: 2,
    value: 58,
  },
  {
    id: 3,
    value: 39,
  },
  {
    id: 4,
    value: 78,
  },
  {
    id: 5,
    value: 66,
  },
  {
    id: 6,
    value: 91,
  },
  {
    id: 7,
    value: 74,
  },
];

export const exportPreviewData = {
  icon: Download,
  title: 'Export Analytics',
  subtitle: 'CSV • JSON • PDF',
  accentColor: '#3B82F6',
  buttonLabel: 'Export',
};

export const sharePreviewData = {
  icon: Share2,
  title: 'Share Dashboard',
  subtitle: 'Public Link • QR Code • Embed',
  accentColor: '#8B5CF6',
  buttonLabel: 'Share',
};

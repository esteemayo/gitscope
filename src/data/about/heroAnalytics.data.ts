import { Activity, GitBranch, Star, Users2 } from 'lucide-react';
import { HeroCardItem } from '@/types/about';

export const heroAnalytics: HeroCardItem[] = [
  {
    id: '1',
    icon: Activity,
    title: 'Repository Activity',
    value: '+32%',
    trend: 'Compared to last month',
    accentColor: '#06B6D4',
  },
  {
    id: '2',
    icon: GitBranch,
    title: 'Commits',
    value: '1,284',
    trend: 'Healthy contribution pace',
    accentColor: '#EC4899',
  },
  {
    id: '3',
    icon: Star,
    title: 'Stars Earned',
    value: '9.8K',
    trend: 'Growing community impact',
    accentColor: '#F59E0B',
  },
  {
    id: '4',
    icon: Users2,
    title: 'Contributors',
    value: '124',
    trend: 'Across active repositories',
    accentColor: '#6366F1',
  },
];

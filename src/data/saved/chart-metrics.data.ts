import { GitFork, Star, Users2 } from 'lucide-react';
import { MetricItem } from '@/types/saved/chart';

export const metrics: MetricItem[] = [
  {
    label: 'Repositories',
    value: 'repositories',
    icon: GitFork,
    description: 'Repository count',
  },
  {
    label: 'Followers',
    value: 'followers',
    icon: Users2,
    description: 'Follower count',
  },
  {
    label: 'Stars',
    value: 'stars',
    icon: Star,
    description: 'Total stars',
  },
];

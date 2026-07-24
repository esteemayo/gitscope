import { BarChart3, ChartSpline, Code2, DatabaseZap } from 'lucide-react';
import { AboutStat } from '@/types/about';

export const aboutStats: AboutStat[] = [
  {
    id: 'repository-metrics',
    icon: BarChart3,
    value: '50+',
    label: 'Repository Metrics',
    trend: 'Real-time',
    trendLabel:
      'Track stars, forks, commits, contributors, issues and repository health.',
    accentColor: '#3B82F6',
  },
  {
    id: 'languages',
    icon: Code2,
    value: '100+',
    label: 'Programming Languages',
    trend: 'Auto-detected',
    trendLabel:
      'Visualize language distribution and technology usage across repositories.',
    accentColor: '#10B981',
  },
  {
    id: 'visualizations',
    icon: ChartSpline,
    value: '20+',
    label: 'Interactive Visualizations',
    trend: 'Insight-driven',
    trendLabel:
      'Explore charts, timelines, activity trends and contribution analytics.',
    accentColor: '#8B5CF6',
  },
  {
    id: 'github-data',
    icon: DatabaseZap,
    value: 'Live',
    label: 'GitHub Data',
    trend: 'Continuously Updated',
    trendLabel:
      'Powered by the GitHub API to provide accurate and up-to-date repository insights.',
    accentColor: '#F97316',
  },
];

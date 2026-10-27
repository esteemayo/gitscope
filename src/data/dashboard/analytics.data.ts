import { type AnalyticsData } from '@/types/dashboard/analytics';

export const MOCK_ANALYTICS: AnalyticsData = {
  metrics: [
    {
      id: 'stars',
      label: 'Total stars',
      value: 1280,
      description: 'Across public repositories',
      icon: 'star',
      accentColor: '#F59E0B',
    },
    {
      id: 'forks',
      label: 'Total forks',
      value: 186,
      description: 'Community contributions',
      icon: 'git-fork',
      accentColor: '#8B5CF6',
    },
    {
      id: 'repositories',
      label: 'Active repositories',
      value: 24,
      description: 'Updated in the last 12 months',
      icon: 'activity',
      accentColor: '#10B981',
    },
  ],
  repositories: [
    { name: 'GitScope', stars: 420, forks: 64 },
    { name: 'OverlayLab', stars: 310, forks: 42 },
    { name: 'eCommerce', stars: 245, forks: 30 },
    { name: 'Blog Platform', stars: 180, forks: 25 },
    { name: 'Chat App', stars: 125, forks: 17 },
  ],
  languages: [
    {
      name: 'TypeScript',
      bytes: 58642,
      percentage: 48,
      color: '#317BC6',
    },
    {
      name: 'JavaScript',
      bytes: 28642,
      percentage: 24,
      color: '#F1E05A',
    },
    {
      name: 'SCSS',
      bytes: 13607,
      percentage: 16,
      color: '#C6538C',
    },
    {
      name: 'HTML',
      bytes: 8250,
      percentage: 7,
      color: '#E34C26',
    },
    {
      name: 'Other',
      bytes: 4200,
      percentage: 5,
      color: '#94A3B8',
    },
  ],
};

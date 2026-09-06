import { aboutStats } from './aboutStats.data';
import { aboutStatsContent } from './aboutStatsContent.data';

import { AboutStatsProps } from '@/types/about/stats/about.stats.type';

export const aboutStatsData: AboutStatsProps = {
  ...aboutStatsContent,
  stats: aboutStats,
};

import { AboutStat, AboutStatContent } from './index';

export interface AboutStatsProps extends AboutStatContent {
  stats: AboutStat[];
  className?: string;
  style?: React.CSSProperties;
}

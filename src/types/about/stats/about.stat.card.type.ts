import { AboutStat } from './index';

export interface AboutStatCardProps extends AboutStat {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

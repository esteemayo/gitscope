import { WhyItem } from './index';

export interface ValueCardProps extends WhyItem {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

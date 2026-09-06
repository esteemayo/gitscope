import { Variants } from 'framer-motion';
import { WhyItem } from './index';

export interface ValueCardProps extends WhyItem {
  variants: Variants;
  className?: string;
  style?: React.CSSProperties;
}

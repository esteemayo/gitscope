import { Variants } from 'framer-motion';
import { HeroCardItem } from './index';

export interface HeroCardProps extends HeroCardItem {
  variants: Variants;
  className?: string;
  style?: React.CSSProperties;
}

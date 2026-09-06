import { Variants } from 'framer-motion';
import { SecurityFeature } from './index';

export interface SecurityCardProps extends SecurityFeature {
  variants: Variants;
  className?: string;
  style?: React.CSSProperties;
}

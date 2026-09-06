import { Variants } from 'framer-motion';
import { StackCategory } from './index';

export interface StackCardProps extends StackCategory {
  variants: Variants;
  className?: string;
  style?: React.CSSProperties;
}

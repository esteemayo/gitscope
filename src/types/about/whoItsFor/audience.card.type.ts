import { Variants } from 'framer-motion';
import { Audience } from './index';

export interface AudienceCardProps extends Audience {
  variants: Variants;
  className?: string;
  style?: React.CSSProperties;
}

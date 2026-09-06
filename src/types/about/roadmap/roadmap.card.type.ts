import { Variants } from 'framer-motion';
import { RoadmapPhase } from './index';

export interface RoadmapCardProps extends RoadmapPhase {
  variants: Variants;
  className?: string;
  style?: React.CSSProperties;
}

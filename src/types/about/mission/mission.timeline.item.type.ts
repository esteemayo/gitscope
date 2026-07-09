import { Variants } from 'framer-motion';
import { MissionTimelineStep } from './index';

export interface MissionTimeItemProps {
  step: MissionTimelineStep;
  index: number;
  lastIndex: number;
  itemVariants: Variants;
}

import { Variants } from 'framer-motion';
import { MissionTimelineStep } from '../index';

export interface MissionTimelineItemProps {
  step: MissionTimelineStep;
  index: number;
  lastIndex: number;
  itemVariants: Variants;
}

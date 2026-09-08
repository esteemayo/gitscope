import { Variants } from 'framer-motion';
import { MissionTimelineStep } from '../hero/index';

export interface MissionTimelineItemProps {
  step: MissionTimelineStep;
  index: number;
  lastIndex: number;
  variants: Variants;
}

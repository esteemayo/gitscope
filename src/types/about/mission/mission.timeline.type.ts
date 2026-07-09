import { Variants } from 'framer-motion';
import { MissionTimelineStep } from './index';

export interface MissionTimelineProps {
  timeline: MissionTimelineStep[];
  itemVariants: Variants;
}

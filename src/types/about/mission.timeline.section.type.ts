import { Variants } from 'framer-motion';
import { MissionTimelineStep } from './index';

export interface MissionTimelineSectionProps {
  timeline: MissionTimelineStep[];
  itemVariants: Variants;
}

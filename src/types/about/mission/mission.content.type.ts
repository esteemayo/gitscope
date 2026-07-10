import { Variants } from 'framer-motion';
import { MissionPrinciple, MissionTimelineStep } from '../index';

export interface MissionContentProps {
  badge: string;
  title: string;
  description: string;
  principles: MissionPrinciple[];
  timeline: MissionTimelineStep[];
  itemVariants: Variants;
}

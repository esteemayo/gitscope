import { MissionPrinciple, MissionTimelineStep } from './index';

export interface AboutMissionProps {
  badge: string;
  title: string;
  description: string;
  principles: MissionPrinciple[];
  timeline: MissionTimelineStep[];
}

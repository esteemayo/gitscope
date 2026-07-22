import { RoadmapPhase } from '../index';

export interface RoadmapProps {
  badge: string;
  title: string;
  description: string;
  phases: RoadmapPhase[];
}

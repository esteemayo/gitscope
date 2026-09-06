import { RoadmapContent, RoadmapPhase } from './index';

export interface RoadmapProps extends RoadmapContent {
  phases: RoadmapPhase[];
  className?: string;
  style?: React.CSSProperties;
}

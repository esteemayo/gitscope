import { RoadmapPhase } from './index';

export interface RoadmapCardProps extends RoadmapPhase {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

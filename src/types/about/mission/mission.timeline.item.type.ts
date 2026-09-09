import { MissionTimelineStep } from './index';

export interface MissionTimelineItemProps extends MissionTimelineStep {
  index: number;
  lastIndex: number;
  className?: string
  style?: React.CSSProperties
}

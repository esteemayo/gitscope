import {
  HealthProgressType,
  MissionContent,
  MissionMetricType,
  MissionPrinciple,
  MissionTimelineStep,
} from './index';

export interface AboutMissionProps extends MissionContent {
  principles: MissionPrinciple[];
  timeline: MissionTimelineStep[];
  metrics: MissionMetricType[];
  healthProgress: HealthProgressType[];
  className?: string;
  style?: React.CSSProperties;
}

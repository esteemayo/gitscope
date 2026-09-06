import { HealthProgressType, MissionMetricType } from './index';

export interface MissionDashboardProps {
  metrics: MissionMetricType[];
  healthProgress: HealthProgressType[];
}

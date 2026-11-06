import { RepositoryHealthMetric } from './index';

export interface HealthMetricCardProps extends RepositoryHealthMetric {
  className?: string;
  style?: React.CSSProperties;
}

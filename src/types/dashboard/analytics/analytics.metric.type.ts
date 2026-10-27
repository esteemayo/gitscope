import { type AnalyticsMetric } from './index';

export interface AnalyticsMetricProps extends AnalyticsMetric {
  className?: string;
  style?: React.CSSProperties;
}

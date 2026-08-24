import { AnalyticsLimitationType } from './index';

export interface AnalyticsLimitationProps extends AnalyticsLimitationType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

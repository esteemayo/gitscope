import { AnalyticsStepType } from './index';

export interface AnalyticsStepProps extends AnalyticsStepType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

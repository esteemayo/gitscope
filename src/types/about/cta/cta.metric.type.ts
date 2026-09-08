import { CTAFloatingMetricType } from './index';

export interface CTAMetricProps extends CTAFloatingMetricType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

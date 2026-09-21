import { AnalyticCardType } from './index';

export interface AnalyticsCardProps extends AnalyticCardType {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

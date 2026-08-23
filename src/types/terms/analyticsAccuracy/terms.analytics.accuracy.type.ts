import {
  AnalyticsAccuracyContent,
  AnalyticsAccuracyNoticeType,
  AnalyticsFlowStepType,
  AnalyticsLimitationType,
  AnalyticsMethodItemType,
} from './index';

export interface TermsAnalyticsAccuracyProps extends AnalyticsAccuracyContent {
  methodology: AnalyticsMethodItemType[];
  flow: AnalyticsFlowStepType[];
  limitations: AnalyticsLimitationType[];
  notice: AnalyticsAccuracyNoticeType;
  className?: string;
  style?: React.CSSProperties;
}

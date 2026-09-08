import { CTAContent, CTAFloatingMetricType, CTAHighlightType } from './index';

export interface CallToActionProps extends CTAContent {
  highlights: CTAHighlightType[];
  metrics: CTAFloatingMetricType[];
  className?: string;
  style?: React.CSSProperties;
}

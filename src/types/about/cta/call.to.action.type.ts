import { CTAContent, CTAFloatingMetric, CTAHighlight } from './index';

export interface CallToActionProps extends CTAContent {
  highlights: CTAHighlight[];
  metrics: CTAFloatingMetric[];
  className?: string;
  style?: React.CSSProperties;
}

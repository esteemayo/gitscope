import { CTAButton, FloatingMetric, Highlight } from './index';

export interface CallToActionProps {
  badge: string;
  title: string;
  description: string;
  primaryAction: CTAButton;
  secondaryAction: CTAButton;
  highlights: Highlight[];
  metrics: FloatingMetric[];
}

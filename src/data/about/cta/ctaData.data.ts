import { ctaContent } from './ctaContent.data';
import { ctaHighlights, ctaMetrics } from './cta.data';

import { CallToActionProps } from '@/types/about/cta/call.to.action.type';

export const ctaData: CallToActionProps = {
  ...ctaContent,
  highlights: ctaHighlights,
  metrics: ctaMetrics,
};

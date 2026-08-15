import { privacySummaryItems } from './privacySummary.data';
import { privacySummaryContent } from './privacySummaryContent.data';

import { PrivacySummaryProps } from '@/types/privacy/privacySummary/privacy.summary.type';

export const privacySummaryData: PrivacySummaryProps = {
  ...privacySummaryContent,
  items: privacySummaryItems,
};

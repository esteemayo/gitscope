import { termsSummaryCards } from './termsSummary.data';
import { termsSummaryContent } from './termsSummaryContent.data';

import { TermsSummaryProps } from '@/types/terms/summary/terms.summary.type';

export const termsSummaryData: TermsSummaryProps = {
  ...termsSummaryContent,
  cards: termsSummaryCards,
};

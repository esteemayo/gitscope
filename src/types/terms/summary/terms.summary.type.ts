import { TermsSummaryCardData, TermsSummaryContent } from './index';

export interface TermsSummaryProps extends TermsSummaryContent {
  cards: TermsSummaryCardData[];
  className?: string;
  style?: React.CSSProperties;
}

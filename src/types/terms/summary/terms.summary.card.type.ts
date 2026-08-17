import { TermsSummaryCardData } from './index';

export interface TermsSummaryCardProps extends TermsSummaryCardData {
  count: number;
  className?: string;
  style?: React.CSSProperties;
}

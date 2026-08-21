import { TermsSummaryCardData } from './index';

export interface TermsSummaryCardProps extends TermsSummaryCardData {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

import { SummaryObservation } from './index';

export interface ObservationCardProps extends SummaryObservation {
  className?: string;
  style?: React.CSSProperties;
}

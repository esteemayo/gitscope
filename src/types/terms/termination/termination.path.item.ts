import { TerminationPathData } from './index';

export interface TerminationPathItemProps extends TerminationPathData {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

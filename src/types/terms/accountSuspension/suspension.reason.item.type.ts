import { SuspensionReasonType } from './index';

export interface SuspensionReasonItemProps extends SuspensionReasonType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

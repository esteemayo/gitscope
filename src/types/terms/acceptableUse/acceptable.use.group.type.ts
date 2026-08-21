import { AcceptableUseGroupType } from './index';

export interface AcceptableUseGroupProps extends AcceptableUseGroupType {
  groupIndex: number;
  className?: string;
  style?: React.CSSProperties;
}

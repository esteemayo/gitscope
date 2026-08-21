import { AcceptableUseItemType } from './index';

export interface AcceptableUseItemProps extends AcceptableUseItemType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

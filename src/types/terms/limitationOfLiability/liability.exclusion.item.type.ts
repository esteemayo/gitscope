import { LiabilityExclusionType } from './index';

export interface LiabilityExclusionItemProps extends LiabilityExclusionType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

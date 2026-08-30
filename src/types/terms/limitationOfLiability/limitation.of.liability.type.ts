import {
  LiabilityCapData,
  LiabilityExclusionType,
  LimitationOfLiabilityContent,
} from './index';

export interface LimitationOfLiabilityProps extends LimitationOfLiabilityContent {
  exclusions: LiabilityExclusionType[];
  liabilityCap: LiabilityCapData;
  className?: string;
  style?: React.CSSProperties;
}

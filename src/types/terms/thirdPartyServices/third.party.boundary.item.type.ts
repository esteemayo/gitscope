import { ThirdPartyBoundaryType } from './index';

export interface ThirdPartyBoundaryItemProps extends ThirdPartyBoundaryType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

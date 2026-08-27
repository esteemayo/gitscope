import { UserContentBoundaryType } from './index';

export interface UserContentBoundaryProps extends UserContentBoundaryType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

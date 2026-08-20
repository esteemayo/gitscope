import { UserResponsibilityItemType } from './index';

export interface UserResponsibilityItemProps extends UserResponsibilityItemType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

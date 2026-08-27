import { UserContentPermissionType } from './index';

export interface UserContentPermissionProps extends UserContentPermissionType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

import {
  UserContentBoundaryType,
  UserContentContentsType,
  UserContentLifecycleStep,
  UserContentNoticeType,
  UserContentPermissionType,
} from './index';

export interface TermsUserContentProps extends UserContentContentsType {
  lifecycle: UserContentLifecycleStep[];
  permissions: UserContentPermissionType[];
  boundaries: UserContentBoundaryType[];
  notice: UserContentNoticeType;
  className?: string;
  style?: React.CSSProperties;
}

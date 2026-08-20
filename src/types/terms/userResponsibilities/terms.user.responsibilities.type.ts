import {
  UserResponsibilityContent,
  UserResponsibilityItemType,
  UserResponsibilityNoticeType,
} from './index';

export interface TermsUserResponsibilitiesProps extends UserResponsibilityContent {
  items: UserResponsibilityItemType[];
  notice: UserResponsibilityNoticeType;
  className?: string;
  style?: React.CSSProperties;
}

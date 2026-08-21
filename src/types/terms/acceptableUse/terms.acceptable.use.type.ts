import {
  AcceptableUseContent,
  AcceptableUseGroupType,
  AcceptableUseNoticeType,
} from './index';

export interface TermsAcceptableUseProps extends AcceptableUseContent {
  groups: AcceptableUseGroupType[];
  notice: AcceptableUseNoticeType;
  className?: string;
  style?: React.CSSProperties;
}

import {
  PrivacyControlType,
  PrivacyDataCategoryType,
  PrivacyDataContent,
  PrivacyNoticeType,
  PrivacyPrincipleType,
} from './index';

export interface TermsPrivacyDataProps extends PrivacyDataContent {
  controls: PrivacyControlType[];
  principles: PrivacyPrincipleType[];
  dataCategories: PrivacyDataCategoryType[];
  notice: PrivacyNoticeType;
  className?: string;
  style?: React.CSSProperties;
}

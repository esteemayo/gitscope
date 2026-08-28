import { PrivacyDataCategoryType } from './index';

export interface PrivacyDataCategoryProps extends PrivacyDataCategoryType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

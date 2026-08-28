import { PrivacyControlType } from './index';

export interface PrivacyControlProps extends PrivacyControlType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

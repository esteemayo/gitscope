import { SecurityContent, SecurityFeature } from './index';

export interface PrivacySecurityProps extends SecurityContent {
  features: SecurityFeature[];
  className?: string;
  style?: React.CSSProperties;
}

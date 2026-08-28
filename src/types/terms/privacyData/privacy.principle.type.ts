import { PrivacyPrincipleType } from './index';

export interface PrivacyPrincipleProps extends PrivacyPrincipleType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

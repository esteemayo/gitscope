import { LegalPrincipleType } from './index';

export interface LegalPrincipleItemProps extends LegalPrincipleType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

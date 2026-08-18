import { TermsAcceptancePointData } from './index';

export interface TermsAcceptancePointProps extends TermsAcceptancePointData {
  count: number;
  className?: string;
  style?: React.CSSProperties;
}

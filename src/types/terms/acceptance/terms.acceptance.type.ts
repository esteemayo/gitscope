import { TermsAcceptanceContent, TermsAcceptancePointData } from './index';

export interface TermsAcceptanceProps extends TermsAcceptanceContent {
  points: TermsAcceptancePointData[];
  className?: string;
  style?: React.CSSProperties;
}

import { TermsEligibilityContent, TermsEligibilityItemData } from './index';

export interface TermsEligibilityProps extends TermsEligibilityContent {
  items: TermsEligibilityItemData[];
  className?: string;
  style?: React.CSSProperties;
}

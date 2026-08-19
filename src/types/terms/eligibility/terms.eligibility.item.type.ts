import { TermsEligibilityItemData } from './index';

export interface TermsEligibilityItemProps extends TermsEligibilityItemData {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

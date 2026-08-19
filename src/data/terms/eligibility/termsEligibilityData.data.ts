import { termsEligibilityItems } from './termsEligibility.data';
import { termsEligibilityContent } from './termsEligibilityContent.data';

import { TermsEligibilityProps } from '@/types/terms/eligibility/terms.eligibility.type';

export const termsEligibilityData: TermsEligibilityProps = {
  ...termsEligibilityContent,
  items: termsEligibilityItems,
};

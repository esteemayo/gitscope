import { termsAcceptancePoints } from './termsAcceptance.data';
import { termsAcceptanceContent } from './termsAcceptanceContent.data';

import { TermsAcceptanceProps } from '@/types/terms/acceptance/terms.acceptance.type';

export const termsAcceptanceData: TermsAcceptanceProps = {
  ...termsAcceptanceContent,
  points: termsAcceptancePoints,
};

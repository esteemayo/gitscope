import { privacyPrinciples } from './privacyPrinciples.data';
import { privacyPrinciplesContent } from './privacyPrinciplesContent.data';

import { PrivacyPrinciplesProps } from '@/types/privacy/privacyPrinciples/privacy.principles.type';

export const privacyPrinciplesData: PrivacyPrinciplesProps = {
  ...privacyPrinciplesContent,
  principles: privacyPrinciples,
};

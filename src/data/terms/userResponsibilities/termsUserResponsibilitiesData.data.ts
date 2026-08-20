import { termsUserResponsibilitiesContent } from './termsUserResponsibilitiesContent.data';
import * as data from './termsUserResponsibilities.data';

import { TermsUserResponsibilitiesProps } from '@/types/terms/userResponsibilities/terms.user.responsibilities.type';

export const termsUserResponsibilitiesData: TermsUserResponsibilitiesProps = {
  ...termsUserResponsibilitiesContent,
  items: data.termsUserResponsibilitiesItems,
  notice: data.termsUserResponsibilitiesNotice,
};

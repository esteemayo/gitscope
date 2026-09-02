import * as data from './changesToTerms.data';
import { changesToTermsContent } from './changesToTermsContent.data';

import { ChangesToTermsProps } from '@/types/terms/changesToTerms/changes.to.terms.type';

export const changesToTermsData: ChangesToTermsProps = {
  ...changesToTermsContent,
  reasons: data.changesToTermsReasons,
  lifecycle: data.changesToTermsLifecycle,
  options: data.changesToTermsOptions,
};

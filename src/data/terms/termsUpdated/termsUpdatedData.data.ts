import { termsUpdatedItems } from './termsUpdated.data';
import { termsUpdatedContent } from './termsUpdatedContent.data';

import { TermsUpdatedProps } from '@/types/terms/termsUpdated/terms.updated.type';

export const termsUpdatedData: TermsUpdatedProps = {
  ...termsUpdatedContent,
  items: termsUpdatedItems,
};

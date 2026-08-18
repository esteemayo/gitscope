import { termsTableOfContents } from './termsTableOfContents.data';
import { termsTableOfContentsContent } from './termsTableOfContentsContent.data';

import { TermsTableOfContentsProps } from '@/types/terms/tableOfContents/terms.table.of.contents.type';

export const termsTableOfContentsData: TermsTableOfContentsProps = {
  ...termsTableOfContentsContent,
  items: termsTableOfContents,
};

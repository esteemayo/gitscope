import { acceptableUseContent } from './acceptableUseContent.data';
import { acceptableUseGroup, acceptableUseNotice } from './acceptableUse.data';

import { TermsAcceptableUseProps } from '@/types/terms/acceptableUse/terms.acceptable.use.type';

export const acceptableUseData: TermsAcceptableUseProps = {
  ...acceptableUseContent,
  groups: acceptableUseGroup,
  notice: acceptableUseNotice,
};

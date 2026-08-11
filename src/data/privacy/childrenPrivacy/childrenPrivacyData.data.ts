import * as data from './childrenPrivacy.data';
import { childrenPrivacyContent } from './childrenPrivacyContent.data';

import { ChildrenPrivacyProps } from '@/types/privacy/childrenPrivacy/children.privacy.type';

export const childrenPrivacyData: ChildrenPrivacyProps = {
  ...childrenPrivacyContent,
  panel: data.childrenPrivacyPanel,
  notice: data.childrenPrivacyNotice,
};
